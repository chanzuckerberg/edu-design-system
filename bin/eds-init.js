#!/usr/bin/env node
(async function () {
  const fs = require('fs');
  const path = require('path');
  const { getConfig } = require('./_util');

  let packageRootPath;
  try {
    packageRootPath =
      path.dirname(require.resolve('@chanzuckerberg/eds')) + '/tokens/json/';
  } catch (e) {
    console.error('EDS package not installed. Using local path...');
    packageRootPath =
      path.dirname(require.main.path) + '/src/tokens-dist/json/';
  }

  // read in the config from config file, package json "eds", etc.
  const config = await getConfig();

  // take the packaged token file and place a copy in the project's 'json' specified path
  if (config) {
    try {
      fs.copyFileSync(
        packageRootPath + 'theme-base.json',
        `${config.json}app-theme.json`,
        fs.constants.COPYFILE_EXCL,
      );
    } catch (error) {
      console.error('The local theme file already exists. Exiting.');
      return 1;
    }

    console.log(
      'File copy completed! Please use `npx eds-apply-theme` to generate theme tokens (CSS Variables).',
    );
  }
})();
