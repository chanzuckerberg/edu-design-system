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
    // used for working on theming within EDS
    console.error('EDS package not installed. Using local path...');
    packageRootPath = path.dirname(require.main.path) + '/lib/tokens/json/';
  }

  // read in the config from config file, package json "eds", etc.
  const config = await getConfig();
  // take the packaged token files and place a copy in the project's 'json' specified path
  if (config?.src) {
    // copy each theme file separately, so that projects themed before dark mode can add the dark theme file
    const themeFiles = [
      { from: 'theme-base.json', to: 'app-theme.json' },
      { from: 'theme-base-dark.json', to: 'app-theme-dark.json' },
    ];

    const copied = themeFiles.filter(({ from, to }) => {
      try {
        fs.copyFileSync(
          packageRootPath + from,
          `${config.src}${to}`,
          fs.constants.COPYFILE_EXCL,
        );
        return true;
      } catch (error) {
        if (error.code === 'EEXIST') {
          console.warn(`The local theme file ${to} already exists. Skipping.`);
        } else {
          console.error(`Could not create ${to}. Details: \n`, error);
        }
        return false;
      }
    });

    if (!copied.length) {
      console.error('No theme files were created. Exiting.');
      return 1;
    }

    console.log(
      `File copy completed (${copied.map(({ to }) => to).join(', ')})! Please use \`npx eds-apply-theme\` to generate theme token file(s).`,
    );
  }
})();
