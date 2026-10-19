const StyleDictionary = require('style-dictionary');
const { minifyDictionaryUsingFormat, formatEdsTokens } = require('./bin/_util');

const EDSStyleDictionary = StyleDictionary.extend({
  source: [
    'src/design-tokens/tier-1-definitions/*.json',
    'src/design-tokens/core-dark-tokens.json',
  ],
  platforms: {
    css: {
      transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
      files: [
        {
          format: 'css/variables',
          destination: 'src/tokens-dist/css/variables-dark.css',
          options: {
            showFileHeader: false,
            outputReferences: true,
          },
        },
      ],
    },
    tailwind: {
      transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
      files: [
        {
          format: 'json/tailwind-utility-config',
          // dark theme (tier 2) tokens, merged into the tailwind config under `dark`
          destination: 'lib/tokens/json/tailwind-dark-utility-config.json',
          filter: (token) => token.path[1] === 'dark',
        },
      ],
    },
  },
});

EDSStyleDictionary.registerFormat({
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

EDSStyleDictionary.buildAllPlatforms();
