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
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens-dist/',
      files: [
        {
          format: 'javascript/es6',
          // dark theme (tier 2) colors, e.g. for the Storybook docs dark theme
          destination: 'ts/colors-dark.ts',
          options: {
            showFileHeader: false,
          },
          filter: (token) =>
            token.path[1] === 'dark' && token.path.includes('color'),
        },
      ],
    },
    json: {
      transformGroup: 'js',
      files: [
        {
          format: 'json/value',
          // sets up the dark theme (tier 2) base for use in overrides
          destination: 'lib/tokens/json/theme-base-dark.json',
          filter: (token) => token.path[1] === 'dark',
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

/**
 * Replace the leaf objects in the parsed style with a value object
 * mimicking the input file structure (see style-dictionary.config.js)
 */
EDSStyleDictionary.registerFormat({
  name: 'json/value',
  formatter: function (dictionary) {
    return JSON.stringify(
      minifyDictionaryUsingFormat(dictionary.properties, (obj) => ({
        value: obj.value,
      })),
      null,
      2,
    );
  },
});

EDSStyleDictionary.buildAllPlatforms();
