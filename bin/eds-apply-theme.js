#!/usr/bin/env node
(async function () {
  const StyleDictionary = require('style-dictionary');
  const path = require('path');
  const fs = require('fs');
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

  // Read the config to sort out where to read JSON from and where to write the CSS file
  const config = await getConfig();

  // read and parse JSON files on disk
  const localTheme = JSON.parse(
    fs.readFileSync(`${config.json}app-theme.json`, 'utf8'),
  );
  const baseTheme = JSON.parse(
    fs.readFileSync(`${packageRootPath}theme-base.json`, 'utf8'),
  );

  // define the header to use in the resulting CSS file so people know not to edit it directly
  StyleDictionary.registerFileHeader({
    name: 'cssOverrideHeader',
    fileHeader: (defaultMessage) => [
      ...defaultMessage,
      'To update, edit app-theme.json, then run `npx eds-apply-theme`',
    ],
  });

  const EDSStyleDictionary = StyleDictionary.extend({
    source: [config.json + 'app-theme.json'],
    platforms: {
      css: {
        transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
        buildPath: config.css,
        files: [
          {
            format: 'css/variables',
            destination: 'app-theme.css',
            options: {
              fileHeader: 'cssOverrideHeader',
              outputReferences: true,
            },
            filter: function (token) {
              // don't allow theming on legacy tokens
              return token.attributes.category !== 'legacy';
            },
          },
        ],
      },
    },
  });

  /**
   * Determine if the given theme file is a subset of what's in the base theme file.
   * If it isnt, throw an error:
   * - If keys are in base that are missing in the theme file, that's OK (no need to override everything)
   * - If keys are in theme that aren't in base, throw (you can't theme tokens that don't exist in EDS)
   * @param {object} base The tokens theme file stored in the EDS project
   * @param {object} theme The project theme file stored in the app code (same format as bas)
   * @param {Array} path The base path, stored as an array of object key names (default [])
   * @throws Error when there are tokens in theme that aren't in base
   */
  function isStrictSubset(base, theme, path = []) {
    for (const name in theme) {
      if (typeof theme[name] === 'object') {
        if (base[name] === undefined) {
          throw new Error(
            `Local themeable value does not exist in base theme: --${path.join(
              '-',
            )}.${name}"`,
          );
        }
        isStrictSubset(base[name], theme[name], path.concat(name));
      }
    }
  }

  try {
    // Keys in the theme file must be a strict subset of those in the base file
    isStrictSubset(baseTheme, localTheme);
    EDSStyleDictionary.buildAllPlatforms();
  } catch (error) {
    // TODO: if theme has things not in base, error showing where the conflict
    console.error('EDS theming error:', error.message);
    return;
  }
})();
