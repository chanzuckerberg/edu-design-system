#!/usr/bin/env node

(async function () {
  const jsonfile = require('jsonfile');
  const chalk = require('chalk');
  const { prompt } = require('enquirer');
  const set = require('lodash/set');
  const { default: ora } = await import('ora');

  // eslint-disable-next-line import/extensions
  const { hideBin } = require('yargs/helpers');
  const yargs = require('yargs/yargs');

  const { getConfig, parseResolvedValue, getWritePath } = require('./_util');

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
})();
