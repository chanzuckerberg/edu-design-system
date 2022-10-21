#!/usr/bin/env node
(async function () {
  const fs = require('fs');
  const path = require('path');
  const { getConfig } = require('./_util');

  let packageRootPath;
  try {
    packageRootPath =
      path.dirname(require.resolve('@chanzuckerberg/eds')) + '/tokens/';
  } catch (e) {
    console.error('EDS package not installed. Using local path...');
    packageRootPath = path.dirname(require.main.path) + '/src/tokens-dist/';
  }

  // read in the config from config file, package json "eds", etc.
  const config = await getConfig();

  // take the packaged var file and place a copy in the project's 'json' directory
  if (config) {
    try {
      fs.copyFileSync(
        packageRootPath + 'json/theme-base.json',
        `${config.json}app-theme.json`,
        fs.constants.COPYFILE_EXCL,
      );
    } catch (error) {
      console.error('The local theme file already exists. Exiting.');
      return;
    }

    console.log(
      'File copy completed! Please use `npx eds-update-theme` to generate theme override CSS.',
    );
  }
})();
