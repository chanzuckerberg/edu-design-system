#!/usr/bin/env node

(async function () {
  const jsonfile = require('jsonfile');
  const chalk = require('chalk');
  const { prompt } = require('enquirer');
  const at = require('lodash/at');
  const set = require('lodash/set');
  const { default: ora } = await import('ora');

  // eslint-disable-next-line import/extensions
  const { hideBin } = require('yargs/helpers');
  const yargs = require('yargs/yargs');

  const { getConfig } = require('./_util');

  // Set up the command structure to output help if the file to load is not specified
  const args = yargs(hideBin(process.argv))
    .command(
      '$0 <figma_file>',
      'Figma variable file to import from',
      (yargs) => {
        yargs.positional('figma_file', {
          describe: 'JSON tokens file emitted from the plugin',
          type: 'string',
        });
      },
    )
    .option('verbose', {
      describe: 'Print additional details for debugging purposes',
      type: 'boolean',
    })
    .option('dry-run', {
      describe: 'Run the script without writing any changes',
      type: 'boolean',
    }).argv;

  // read in the config from config file, package json "eds", etc.
  const config = await getConfig();

  // Read the figma import file, and parse out the modes to select from, prompting the user to pick one,
  // and load in the local theme file. We want to look up keys in there
  const figmaThemeData = jsonfile.readFileSync(args.figma_file);
  const localTheme = jsonfile.readFileSync(`${config.src}app-theme.json`);

  // Determine which of the modes in the file should be used
  let response;
  try {
    response = await prompt({
      name: 'mode',
      message: 'Please select the Figma mode for token import',
      type: 'select',
      choices: Object.values(figmaThemeData.modes),
    });
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'));
    process.exit(-1);
  }

  const stats = {
    skipped: [],
    updated: [],
    errored: [],
  };

  const spinner = ora('Parsing tokens').start();
  const isVerbose = args.v;
  const canWrite = !args.dryRun;
  // Find the mode, and get the stored key for later use
  const [modeKey] = Object.entries(figmaThemeData.modes).filter(
    (modeTuple) => modeTuple[1] === response.mode,
  )[0];

  figmaThemeData.variables.forEach((figmaVariable) => {
    const writePath = getWritePath(
      localTheme,
      figmaThemeData.name.toLowerCase(),
      figmaVariable.name,
    );

    if (writePath) {
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

        // write the value using the calculated path and parsed value
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

        spinner.text = chalk.bold(figmaVariable.name) + ': Done!';
        stats.updated.push(figmaVariable);
      } catch (e) {
        // We couldn't parse the resolved value, so skip and add to errors
        spinner.fail(
          chalk.bold(figmaVariable.name) +
            ': Skipped with error (' +
            e.message +
            ')',
        );
        stats.errored.push(figmaVariable);
      }
    } else {
      spinner.text = chalk.bold(figmaVariable.name) + ': Skipped';

      if (!writePath) {
        spinner.warn(
          chalk.bold(figmaVariable.name) +
            ': Skipped with warning (no write path)',
        );
      }
      stats.skipped.push(figmaVariable);
    }
  });

  if (canWrite) {
    jsonfile.writeFileSync(`${config.src}app-theme.json`, localTheme, {
      spaces: 2,
      finalEOL: false,
    });
  }

  spinner.succeed(
    `Done! updated: ${stats.updated.length}, skipped: ${stats.skipped.length}, errored: ${stats.errored.length}`,
  );

  /**
   * Determine the write path by taking the collection and variable name, and looking it up in
   * the existing local theme.
   *
   * @param {object} localTheme JSON file loaded, representing the data for the local theme
   * @param {string} collectionName Name of the exported collection
   * @param {string} variableName current variable name from figma (e.g., color/text/neutral/default)
   * @returns string|null representation of the path to write to in the local theme JSON file
   */
  function getWritePath(localTheme, collectionName, variableName) {
    const workingPath =
      getTokenPrefix(collectionName) + tokenNameToPath(variableName);

    const found = at(localTheme, workingPath).filter(
      (entries) => typeof entries !== 'undefined',
    );

    if (found.length) {
      // handle case where we should look for @ in the file, then pluck the value object properly
      if (found[0]['@']?.value) {
        // update the write path to mark the @ and value
        return workingPath + '.@.value';
      }

      // handle case where it's just value
      if (found[0]?.value) {
        // update the write path to mark the value
        return workingPath + '.value';
      }
    }

    // There is no write path based on what's in the local theme so we return null signal it's a missing token
    return null;
  }

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
   * @param {string} collectionName The key to write to
   * @returns a text prefix for where to write the token value
   */
  function getTokenPrefix(collectionName) {
    switch (collectionName) {
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
