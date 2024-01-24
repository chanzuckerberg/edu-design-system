#!/usr/bin/env node

const { boolean } = require('yargs');

(async function () {
  const fs = require('fs');
  const jsonfile = require('jsonfile');
  const yargs = require('yargs/yargs');

  // eslint-disable-next-line import/extensions
  const { hideBin } = require('yargs/helpers');
  const { prompt } = require('enquirer');
  const at = require('lodash/at');
  const set = require('lodash/set');

  const { default: ora } = await import('ora');
  const chalk = require('chalk');

  // read in the config from config file, package json "eds", etc.
  const { getConfig } = require('./_util');
  const config = await getConfig();

  // Set up the command structure to output help if the file to load is not specified
  const args = yargs(hideBin(process.argv))
    .command('$0 <file>', 'Figma variable file to import from', (yargs) => {
      yargs.positional('file', {
        describe: 'JSON tokens file emitted from the plugin',
        type: 'string',
      });
    })
    .option('verbose', {
      describe: 'Print additional details for debugging purposes',
      type: 'boolean',
    })
    .option('dry-run', {
      describe: 'Run the script without writing any changes',
      type: 'boolean',
    }).argv;

  const isVerbose = args.v;
  const canWrite = !args.dryRun;

  // Read the figma import file, and parse out the modes to select from, prompting the user to pick one
  let importTheme;
  try {
    importTheme = JSON.parse(fs.readFileSync(args.file, 'utf8'));
  } catch (e) {
    console.error(chalk.red('cannot load import file', args.file));
    process.exit(1);
  }

  // now, load in the local theme file. We want to look up keys in there
  let localTheme;
  try {
    localTheme = JSON.parse(
      fs.readFileSync(`${config.src}app-theme.json`, 'utf8'),
    );
  } catch (e) {
    console.error(
      chalk.red('cannot load local theme file', `${config.src}app-theme.json`),
    );
    process.exit(2);
  }

  // Get the file being used: [primitives, themes]
  let tokenFile;
  switch (importTheme.name.toLowerCase()) {
    case 'themes':
      tokenFile = 'themes';
      break;
    case 'primitives':
      tokenFile = 'primitives';
      break;
    default:
      tokenFile = 'unknown';
  }

  // Determine which of the modes in the file should be used
  let response;
  try {
    response = await prompt({
      name: 'mode',
      message: 'Please select the Figma mode for token import',
      type: 'select',
      choices: Object.values(importTheme.modes),
    });
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'));
    process.exit(-1);
  }

  // Find the mode, and get the stored value and key for later use
  const [modeKey, modeValue] = Object.entries(importTheme.modes).filter(
    (modeTuple) => modeTuple[1] === response.mode,
  )[0];

  /**
   * The actual parsing
   * TODO: separate all of the below out into separate file(s)
   */
  const stats = {
    skipped: [],
    updated: [],
    errored: [],
  };

  const spinner = ora('Parsing tokens').start();
  importTheme.variables.forEach((figmaVariable) => {
    const workingPath =
      getTokenPrefix(tokenFile) + tokenNameToPath(figmaVariable.name);
    let writePath = workingPath;

    const found = at(localTheme, workingPath).filter(
      (entries) => typeof entries !== 'undefined',
    );

    if (found.length) {
      // handle case where we should look for @ in the file, then pluck the value object properly
      if (found[0]['@']?.value) {
        // update the write path to mark the @ and value
        writePath += '.@.value';
      }

      // handle case where it's just value
      if (found[0]?.value) {
        // update the write path to mark the value
        writePath += '.value';
      }

      // write the value using the calculated path and parsed value
      try {
        canWrite &&
          set(
            localTheme,
            writePath,
            parseResolvedValue(
              figmaVariable.type,
              figmaVariable.resolvedValuesByMode[modeKey].resolvedValue,
            ),
          );

        if (isVerbose || !canWrite) {
          spinner.succeed(
            'Write: ' +
              parseResolvedValue(
                figmaVariable.type,
                figmaVariable.resolvedValuesByMode[modeKey].resolvedValue,
              ) +
              ' to ' +
              writePath,
          );
        }
        isVerbose && stats.updated.push(figmaVariable);
        spinner.text = chalk.bold(figmaVariable.name) + ': Done!';
      } catch (e) {
        // We couldn't parse the resolved value, so skip and add to errors
        isVerbose && stats.errored.push(figmaVariable);
        spinner.warn(
          chalk.bold(figmaVariable.name) +
            ': Skipped with error (' +
            e.message +
            ')',
        );
      }
    } else {
      isVerbose && stats.skipped.push(figmaVariable);
      spinner.text = chalk.bold(figmaVariable.name) + ': Skipped';
    }
  });
  spinner.prefixText = '';

  await jsonfile.writeFile(
    `${config.src}app-theme.json`,
    localTheme,
    { spaces: 2, finalEOL: false },
    function (err) {
      if (err) console.error(chalk.red(err));
    },
  );

  if (isVerbose) {
    console.log(
      'updated:',
      stats.updated.length,
      'skipped:',
      stats.skipped.length,
      'errored:',
      stats.errored.length,
    );
  }
  spinner.succeed('Done!');

  /**
   * utils
   */

  /**
   * Conversion of the figma token name (e.g., some/path/to/token) to the equivalent path in a JSON object
   * @param {string} figmaTokenName The name from the figma variables panel (slash separated)
   * @returns a lodash-compatible string representing the path to the token value in JSON
   */
  function tokenNameToPath(figmaTokenName) {
    return figmaTokenName.replaceAll('/', '.').toLowerCase();
  }

  /**
   * Given the "type" of import file (named after the collection name), produce
   * a prefix to the token name that corresponds to the prefix used for those
   * tokens.
   *
   * @param {string} importFileType The key type to write to
   * @returns a text prefix for where to write the token value
   */
  function getTokenPrefix(importFileType) {
    switch (importFileType) {
      case 'themes':
        return 'eds.theme.';
      case 'primitives':
        return 'eds.';
      default:
        return '';
    }
  }

  /**
   * Given the value sourced from figma, translate it into a
   * style-dictionary format. When encountering an unrecognized type,
   * throw an error.
   *
   * @param {string} type Figma type for the token value (Set:)
   * @param {object} figmaResolvedValue
   * @returns value using the type
   * @throws Error using `details` on the data read from figma
   */
  function parseResolvedValue(type, figmaResolvedValue) {
    if (type === 'COLOR') {
      const r = Math.floor(figmaResolvedValue.r * 255);
      const g = Math.floor(figmaResolvedValue.g * 255);
      const b = Math.floor(figmaResolvedValue.b * 255);
      const a = figmaResolvedValue.a;
      if (figmaResolvedValue.a > 0 && figmaResolvedValue.a < 1) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      } else {
        // print hex instead
        return (
          '#' +
          [r, g, b]
            .map((x) => x.toString(16))
            .map((x) => (x.length === 1 ? '0' + x : x))
            .join('')
            .toUpperCase()
        );
      }
    } else {
      throw new Error('unknown resolved type: ' + type, {
        details: figmaResolvedValue,
      });
    }
  }
})();
