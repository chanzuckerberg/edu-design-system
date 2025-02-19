#!/usr/bin/env node

// Script shell
(async function () {
  const jsonfile = require('jsonfile');
  const chalk = require('chalk');
  const { prompt } = require('enquirer');
  const set = require('lodash/set');
  const at = require('lodash/at');
  const ora = require('ora');

  // eslint-disable-next-line import/extensions
  const { hideBin } = require('yargs/helpers');
  const yargs = require('yargs/yargs');

  const { getConfig, FigmaAPIReader, FigmaVariable } = require('./_util');

  // Set up the command structure to output help if the file to load is not specified
  const args = yargs(hideBin(process.argv))
    .command(
      '$0 file [file_id]',
      'Fetch the variables from Figma using the API',
      (yargs) => {
        yargs.positional('file_id', {
          type: 'string',
          describe: 'the figma file where the published variables are defined',
        });
      },
    )
    .option('token', {
      describe: 'Figma API token',
      type: 'string',
    })
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
  const isVerbose = args.v;
  const canWrite = !args.dryRun;

  // Get the local variables from the defined file b/c published ones won't contain the modes
  // https://www.figma.com/developers/api#get-local-variables-endpoint
  const figmaFileResponse = await fetch(
    `https://api.figma.com/v1/files/${args.file_id}/variables/local`,
    {
      headers: {
        'X-FIGMA-TOKEN': args.token,
      },
    },
  );

  if (!figmaFileResponse.ok) {
    throw new Error('cannot access figma file: ' + figmaFileResponse.status);
  }

  const fullData = await figmaFileResponse.json();
  const figmaApiReader = new FigmaAPIReader(fullData);
  const edsCollection = figmaApiReader
    .getVariableCollections()
    .find(
      (collection) => collection.name === FigmaAPIReader.EDS_COLLECTION_NAME,
    );

  // Determine which of the modes in the file should be used
  let response;
  try {
    response = await prompt({
      name: 'modeId',
      message: 'Please select the Figma mode for token import',
      type: 'select',
      choices: figmaApiReader.getModes(edsCollection.id).map((mode) => {
        return {
          name: mode.modeId,
          message: `Use the ${mode.name} figma mode`,
          value: mode.name,
        };
      }),
    });
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'), e);
    process.exit(-1);
  }

  const stats = {
    skipped: [],
    updated: [],
    errored: [],
    total: [],
  };

  const spinner = ora('Parsing tokens...').start();

  // now, load in the local theme file. We want to look up keys in there
  const localTheme = jsonfile.readFileSync(`${config.src}app-theme.json`);

  figmaApiReader
    .getVariablesByCollectionId(edsCollection.id)
    .forEach((figmaVariable) => {
      stats.total.push(figmaVariable.id);
      const variable = new FigmaVariable(
        figmaVariable,
        response.modeId,
        figmaApiReader,
      );
      let writePath = variable.getTokenPath();

      // mesh the token path to a matching path in the local theme file
      const found = at(localTheme, writePath).filter(
        (entries) => typeof entries !== 'undefined',
      );

      if (found.length) {
        // handle case where we should look for @ in the file, then pluck the value object properly
        if (found[0]['@']?.value) {
          // update the write path to mark the @ and value
          writePath = writePath + '.@.value';
        }

        // handle case where it's just value
        if (found[0]?.value) {
          // update the write path to mark the value
          writePath = writePath + '.value';
        }
      }

      if (writePath) {
        try {
          // error when path suffix is invalid (all should end with .value)
          if (!writePath.endsWith('value')) {
            throw new Error(
              `Name format violation. Name missing in local theme: ${writePath} (${figmaVariable.resolvedType})`,
            );
          }

          canWrite && set(localTheme, writePath, variable.value);

          // write the value using the calculated path and parsed value
          if (isVerbose || !canWrite) {
            spinner.succeed('Write: ' + variable.value + ' to ' + writePath);
          }

          spinner.text = chalk.bold(variable.name) + ': Done!';
          stats.updated.push(variable);
        } catch (e) {
          // We couldn't parse the resolved value, so skip and add to errors
          spinner.fail(chalk.bold(variable.name) + ': Error (' + e + ')');
          stats.errored.push(variable);
        }
      } else {
        spinner.text = chalk.bold(variable.name) + ': Skipped';

        if (!writePath) {
          spinner.warn(
            chalk.bold(variable.name) +
              ': Skipped with warning (no write path)',
          );
        }
        stats.skipped.push(variable);
      }
    });

  if (canWrite) {
    jsonfile.writeFileSync(`${config.src}app-theme.json`, localTheme, {
      spaces: 2,
      finalEOL: false,
    });
  }

  spinner.succeed(
    `Done! updated: ${stats.updated.length}, skipped: ${stats.skipped.length}, errored: ${stats.errored.length}, total: ${stats.total.length}`,
  );
})();
