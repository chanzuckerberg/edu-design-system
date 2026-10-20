#!/usr/bin/env node

// Script shell
(async function () {
  const fs = require('fs');
  const jsonfile = require('jsonfile');
  const chalk = require('chalk');
  const { prompt } = require('enquirer');
  const uniq = require('lodash/uniq');
  const ora = require('ora');

  // eslint-disable-next-line import/extensions
  const { hideBin } = require('yargs/helpers');
  const yargs = require('yargs/yargs');

  const {
    applyFigmaVariablesToTheme,
    findDarkMode,
    getConfig,
    FigmaAPIReader,
    FigmaVariable,
  } = require('./_util');

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

  // Handle script initialization
  const initSpinner = ora('Loading Figma Data').start();

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

  initSpinner.stop();

  // enquire about the collection to use where we keep the tier 2 tokens. Hint at the name,
  // noting that it should be something like "Tier 2" but could be anything
  // This is used to set up the mode to pull token values from later in the script
  // Make sure each entry is named uniquely, b/c the API can return multiple entries with matching names,
  // but overlapping IDs
  let collectionNameResponses;
  try {
    collectionNameResponses = await prompt([
      {
        name: 'tier1Collection',
        message:
          'Which collection contains the tier 1 tokens (e.g., "Tier 1")?',
        type: 'select',
        choices: figmaApiReader
          .getVariableCollections()
          .filter((collection) => !collection.hiddenFromPublishing)
          .map((collection) => {
            return {
              name: collection.id,
              message: `Use the "${collection.name}" collection`,
              value: collection.name,
            };
          }),
      },
      {
        name: 'tier2Collection',
        message:
          'Which collection contains the tier 2 tokens (e.g., "Tier 2")?',
        type: 'select',
        choices: figmaApiReader
          .getVariableCollections()
          .filter((collection) => !collection.hiddenFromPublishing)
          .map((collection) => {
            return {
              name: collection.id,
              message: `Use the "${collection.name}" collection`,
              value: collection.name,
            };
          }),
      },
    ]);
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'), e);
    process.exit(-1);
  }

  // get the data for the full collection from the API reader
  const tier1Collection = figmaApiReader
    .getVariableCollections()
    .filter((collection) => !collection.hiddenFromPublishing)
    .find(
      (collection) => collection.id === collectionNameResponses.tier1Collection,
    );

  const tier2Collection = figmaApiReader
    .getVariableCollections()
    .filter((collection) => !collection.hiddenFromPublishing)
    .find(
      (collection) => collection.id === collectionNameResponses.tier2Collection,
    );

  // Determine which of the modes in the file should be used
  let modeResponses;
  try {
    modeResponses = await prompt([
      {
        name: 'tier1ModeId',
        message:
          'Please select the mode containing the tier 1 values you wish to import:',
        type: 'select',
        choices: figmaApiReader.getModes(tier1Collection.id).map((mode) => {
          return {
            name: mode.modeId,
            message: `Use the ${mode.name} value set`,
            value: mode.name,
          };
        }),
      },
      {
        name: 'tier1CollectionName',
        message:
          'Please select the tier 1 collection name containing the tier 1 values you wish to import:',
        type: 'select',
        // Use the top-level tier 1 values as the basis for the tier 1 naming selection. Trim the name to just the prefix
        // TODO: filter out non-color top level values
        choices: uniq(
          figmaApiReader
            .getVariablesByCollectionId(tier1Collection.id)
            .map((variable) => variable.name.replace(/\/[a-zA-Z0-9-]*/g, '')),
        ).map((tier1Name) => {
          return {
            name: tier1Name,
            message: `Use the ${tier1Name} value set`,
            value: tier1Name,
          };
        }),
      },
      {
        name: 'tier2ModeId',
        message: 'Please select the theme to use you wish to import:',
        type: 'select',
        choices: figmaApiReader.getModes(tier2Collection.id).map((mode) => {
          return {
            name: mode.modeId,
            message: `Use the ${mode.name} theme`,
            value: mode.name,
          };
        }),
      },
    ]);
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'), e);
    process.exit(-1);
  }

  // Determine which mode holds the dark values for the selected theme, if any. Suggest a mode with
  // "dark" in the name, and allow skipping when the theme has no dark mode
  const SKIP_DARK_MODE = 'skip';
  const tier2Modes = figmaApiReader.getModes(tier2Collection.id);
  const darkModeChoices = tier2Modes
    .filter((mode) => mode.modeId !== modeResponses.tier2ModeId)
    .map((mode) => {
      return {
        name: mode.modeId,
        message: `Use the ${mode.name} theme`,
        value: mode.name,
      };
    })
    .concat({
      name: SKIP_DARK_MODE,
      message: 'Skip (do not import dark mode values)',
      value: SKIP_DARK_MODE,
    });
  const suggestedDarkMode = findDarkMode(tier2Modes, modeResponses.tier2ModeId);

  let darkModeResponse;
  try {
    darkModeResponse = await prompt({
      name: 'tier2DarkModeId',
      message: 'Please select the dark mode for this theme:',
      type: 'select',
      choices: darkModeChoices,
      initial: suggestedDarkMode
        ? darkModeChoices.findIndex(
            (choice) => choice.name === suggestedDarkMode.modeId,
          )
        : darkModeChoices.length - 1,
    });
  } catch (e) {
    // e.g., someone hits ESC
    console.error(chalk.red('Aborted.'), e);
    process.exit(-1);
  }

  const spinner = ora('Parsing tokens...').start();

  // Each theme mode to import, and the file to write its values to
  const imports = [
    {
      label: 'Theme',
      tier2ModeId: modeResponses.tier2ModeId,
      themePath: FigmaVariable.THEME_PATH,
      filePath: args.local
        ? 'src/design-tokens/core-tokens.json'
        : `${config.src}app-theme.json`,
    },
  ];

  if (darkModeResponse.tier2DarkModeId !== SKIP_DARK_MODE) {
    const darkFilePath = args.local
      ? 'src/design-tokens/core-dark-tokens.json'
      : `${config.src}app-theme-dark.json`;

    if (fs.existsSync(darkFilePath)) {
      imports.push({
        label: 'Dark theme',
        tier2ModeId: darkModeResponse.tier2DarkModeId,
        themePath: FigmaVariable.DARK_THEME_PATH,
        filePath: darkFilePath,
      });
    } else {
      spinner.warn(
        `Skipping dark mode: ${darkFilePath} does not exist. Run \`npx eds-init-theme\` to create it`,
      );
    }
  }

  imports.forEach(({ label, tier2ModeId, themePath, filePath }) => {
    // now, load in the local theme file. We want to look up keys in there
    const localTheme = jsonfile.readFileSync(filePath);

    const stats = applyFigmaVariablesToTheme({
      figmaApiReader,
      collectionId: tier2Collection.id,
      tier1ModeId: modeResponses.tier1ModeId,
      tier2ModeId,
      tier1CollectionName: modeResponses.tier1CollectionName,
      theme: localTheme,
      themePath,
      isLocal: args.local,
      canWrite,
      isVerbose,
      logger: spinner,
    });

    if (canWrite) {
      jsonfile.writeFileSync(filePath, localTheme, {
        spaces: 2,
        finalEOL: false,
      });
    }

    spinner.succeed(
      `${label} (${filePath}) done! updated: ${stats.updated.length}, skipped: ${stats.skipped.length}, errored: ${stats.errored.length}, total: ${stats.total.length}`,
    );
  });

  spinner.info('Any typography tokens must be imported manually from Figma');
  !isVerbose && spinner.info(`Use --verbose for more information`);
})();
