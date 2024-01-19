#!/usr/bin/env node
(async function () {
  const StyleDictionary = require('style-dictionary');
  const path = require('path');
  const fs = require('fs');
  const {
    formatEdsTokens,
    getConfig,
    isStrictSubset,
    minifyDictionaryUsingFormat,
  } = require('./_util');

  let packageRootPath;
  try {
    packageRootPath =
      path.dirname(require.resolve('@chanzuckerberg/eds')) + '/tokens/json/';
  } catch (e) {
    // used for working on theming within EDS
    console.error('EDS package not installed. Using local path...');
    packageRootPath = path.dirname(require.main.path) + '/lib/tokens/json/';
  }

  // Read the config to sort out where to read JSON from and where to write the CSS file
  const config = await getConfig();

  // read and parse JSON files on disk
  const localTheme = JSON.parse(
    fs.readFileSync(`${config.src}app-theme.json`, 'utf8'),
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

  StyleDictionary.registerFormat({
    name: 'json/tailwind-utility-config',
    formatter: function (dictionary) {
      const minifiedCssDictionary = minifyDictionaryUsingFormat(
        dictionary.properties,
        (obj) => `${obj.value}`,
      );
      formatEdsTokens(minifiedCssDictionary);
      return JSON.stringify(minifiedCssDictionary, null, 2);
    },
  });

  const EDSStyleDictionary = StyleDictionary.extend({
    source: [config.src + 'app-theme.json'],
    platforms: {
      css: {
        transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
        buildPath: config.dest,
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
          {
            format: 'json/tailwind-utility-config',
            destination: 'app-tailwind-theme.config.json',
            options: {
              outputReferences: true,
              fileHeader: 'cssOverrideHeader',
            },
          },
        ],
      },
    },
  });

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
