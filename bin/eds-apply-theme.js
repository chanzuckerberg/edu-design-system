#!/usr/bin/env node
(async function () {
  const fs = require('fs');
  const StyleDictionary = require('style-dictionary');
  const {
    formatEdsTokens,
    getConfig,
    minifyDictionaryUsingFormat,
  } = require('./_util');

  // Read the config to sort out where to read JSON from and where to write the CSS file
  const config = await getConfig();

  // define the header to use in the resulting CSS file so people know not to edit it directly
  const registerHeader = (name, themeFile) =>
    StyleDictionary.registerFileHeader({
      name,
      fileHeader: (defaultMessage) => [
        ...defaultMessage,
        `To update, edit ${themeFile}, then run \`npx eds-apply-theme\``,
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

  // Each theme file to build, and the files to generate from it. The dark theme is optional,
  // since it is only present after running `eds-init-theme` with a version of EDS that has dark mode
  const themes = [
    {
      source: 'app-theme.json',
      header: 'cssOverrideHeader',
      css: 'app-theme.css',
      tailwind: 'app-tailwind-theme.config.json',
    },
    {
      source: 'app-theme-dark.json',
      header: 'cssDarkOverrideHeader',
      css: 'app-theme-dark.css',
      tailwind: 'app-tailwind-dark-theme.config.json',
      optional: true,
    },
  ].filter(
    ({ source, optional }) => !optional || fs.existsSync(config.src + source),
  );

  themes.forEach(({ source, header, css, tailwind }) => {
    registerHeader(header, source);

    const EDSStyleDictionary = StyleDictionary.extend({
      source: [config.src + source],
      platforms: {
        css: {
          transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
          buildPath: config.dest,
          files: [
            {
              format: 'css/variables',
              destination: css,
              options: {
                fileHeader: header,
                outputReferences: true,
              },
              filter: function (token) {
                // don't allow theming on legacy tokens
                return token.attributes.category !== 'legacy';
              },
            },
            {
              format: 'json/tailwind-utility-config',
              destination: tailwind,
              options: {
                outputReferences: true,
                fileHeader: header,
              },
            },
          ],
        },
      },
    });

    try {
      EDSStyleDictionary.buildAllPlatforms();
    } catch (error) {
      // NOTE: if theme has things not in base, error showing where the conflict
      console.error(`EDS theming error (${source}):`, error.message);
    }
  });
})();
