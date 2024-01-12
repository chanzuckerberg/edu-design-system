const StyleDictionary = require('style-dictionary');
const { minifyDictionaryUsingFormat, formatEdsTokens } = require('./bin/_util');

const EDSStyleDictionary = StyleDictionary.extend({
  source: ['src/design-tokens/**/*.json'],
  platforms: {
    storybook: {
      transformGroup: 'css',
      buildPath: '',
      files: [
        {
          format: 'json/flat',
          destination: '.storybook/data/tokens.json',
        },
      ],
    },
    css: {
      transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
      files: [
        {
          format: 'css/variables',
          destination: 'src/tokens-dist/css/variables.css',
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
          destination: 'ts/colors.ts',
          options: {
            showFileHeader: false,
          },
          filter: (token) => token.path.includes('color'),
        },
      ],
    },
    json: {
      transformGroup: 'js',
      files: [
        {
          format: 'json/nested',
          // useful for tailwind configs in consuming apps
          destination: 'src/tokens-dist/json/variables-nested.json',
        },
        {
          format: 'json/value',
          // sets up the base theme for use in overrides
          destination: 'lib/tokens/json/theme-base.json',
          filter: function (token) {
            // don't allow theming on legacy tokens
            return token.attributes.category !== 'legacy';
          },
        },
      ],
    },
    tailwind: {
      transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
      files: [
        {
          format: 'json/nested-css-variables',
          // useful for tailwind configs in consuming apps
          // NOTE: this will be replaced by the output utility config in a future version
          destination: 'lib/tokens/json/css-variables-nested.json',
          outputReferences: true,
        },
        {
          format: 'json/tailwind-utility-config',
          // useful for tailwind configs in consuming apps
          destination: 'lib/tokens/json/tailwind-utility-config.json',
          outputReferences: true,
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

EDSStyleDictionary.registerFormat({
  name: 'json/nested-css-variables',
  formatter: function (dictionary) {
    const minifiedCssDictionary = minifyDictionaryUsingFormat(
      dictionary.properties,
      (obj) => `var(--${obj.name})`,
    );
    formatEdsTokens(minifiedCssDictionary);
    return JSON.stringify(minifiedCssDictionary, null, 2);
  },
});

/**
 * Replace the leaf objects in the parsed style with a value object
 * mimicking the input file structure. Essentially, this formatter
 * is for concatenating the input JSON files (because the built-in
 * formatter outputs all the metadata)
 *
 * Needed because the current `json` formatter outputs too much :(
 * - https://github.com/amzn/style-dictionary/issues/887
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
