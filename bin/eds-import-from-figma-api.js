#!/usr/bin/env node

const { identity } = require('lodash');

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
    .option('local', {
      describe: 'Run in local mode (will apply theme updates to EDS itself)',
      type: 'boolean',
    })
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
  const config = !args.local && (await getConfig());
  const isVerbose = args.verbose;
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
    throw new Error(
      `cannot access figma file with token ${args.token}: ${figmaFileResponse.status}`,
    );
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

  const filePath = args.local
    ? 'src/design-tokens/core-tokens.json'
    : `${config.src}app-theme.json`;

  // now, load in the local theme file. We want to look up keys in there
  const localTheme = jsonfile.readFileSync(filePath);

  figmaApiReader
    .getVariablesByCollectionId(edsCollection.id)
    .forEach((figmaVariable) => {
      stats.total.push(figmaVariable.id);
      const variable = new FigmaVariable(
        figmaVariable,
        response.modeId,
        figmaApiReader,
      );

      // If we have a zombie entry in the variable list, skip it (flag for design)
      if (variable.isOrphaned()) {
        stats.skipped.push(variable);
        spinner.warn(
          chalk.bold(variable.name) +
            ': Skipped with warning (orphaned): please remove usage in figma',
        );
        isVerbose && console.warn('Variable details:', variable);

        return;
      }

      // mesh the token path to a matching path in the local theme file
      let writePath;
      try {
        writePath = variable.getTokenPath();
        const locationInLocal = at(localTheme, writePath).filter(
          (entries) => typeof entries !== 'undefined',
        );

        // Update the write path to conform to the format used in style-dictionary
        if (locationInLocal.length) {
          // handle case where we should look for @ in the file, then pluck the value object properly
          if (locationInLocal[0]['@']?.value) {
            // update the write path to mark the @ and value
            writePath = writePath + '.@.value';
          }

          // handle case where it's just value
          if (locationInLocal[0]?.value) {
            // update the write path to mark the value
            writePath = writePath + '.value';
          }
        }
      } catch (e) {
        // We couldn't parse the write path
        isVerbose && spinner.fail(chalk.bold(variable.name) + ': ' + e);
        isVerbose && console.error('Variable details:', variable);
      }

      if (writePath) {
        try {
          // error when path suffix is invalid (all should end with .value)
          if (!writePath.endsWith('value')) {
            throw new Error(
              `Name format violation. JSON path missing in local theme: ${writePath} (${figmaVariable.resolvedType})`,
            );
          }

          if (
            FigmaVariable.isAliased(figmaVariable, response.modeId) &&
            args.local &&
            !at(localTheme, variable.valueRef).some(identity)
          ) {
            throw new Error(
              `Value violation. Trying to write a local reference value path not in local theme: ${writePath} => {${variable.valueRef}}`,
            );
          }

          // Write the defined value to the specified location by json path
          canWrite &&
            args.local &&
            set(
              localTheme,
              writePath,
              variable.isAliased()
                ? `{${variable.valueRef}}`
                : variable.valueRef,
            );
          canWrite && !args.local && set(localTheme, writePath, variable.value);

          // log if in a loggable mode (verbose / dry-run)
          if (isVerbose || !canWrite) {
            spinner.succeed(
              `Write: ${
                args.local ? variable.valueRef : variable.value
              } to ${writePath}`,
            );
          }

          spinner.text = chalk.bold(variable.name) + ': Done!';
          stats.updated.push(variable);
        } catch (e) {
          // We couldn't parse the resolved value, so skip and add to errors
          spinner.fail(chalk.bold(variable.name) + ': ' + e);
          isVerbose && console.error('Variable details:', variable);
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
        isVerbose && console.warn('Variable details:', variable);
        stats.skipped.push(variable);
      }
    });

  if (canWrite) {
    jsonfile.writeFileSync(filePath, localTheme, {
      spaces: 2,
      finalEOL: false,
    });
  }

  spinner.succeed(
    `Done! updated: ${stats.updated.length}, skipped: ${stats.skipped.length}, errored: ${stats.errored.length}, total: ${stats.total.length}`,
  );
})();
