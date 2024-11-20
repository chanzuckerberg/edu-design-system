(async function () {
  const StyleDictionary = (await import('style-dictionary')).default;
  const {
    minifyDictionaryUsingFormat,
    formatEdsTokens,
  } = require('./bin/_util');

  const EDSStyleDictionary = new StyleDictionary({
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
        transforms: [
          ...StyleDictionary.hooks.transformGroups.css,
          'name/kebab',
        ],
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
              // TODO(next-major): remove filter once all legacy tokens are removed
              return token.attributes.category !== 'legacy';
            },
          },
        ],
      },
      tailwind: {
        transforms: [
          ...StyleDictionary.hooks.transformGroups.css,
          'name/kebab',
        ],
        files: [
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

  await EDSStyleDictionary.hasInitialized;

  EDSStyleDictionary.registerFormat({
    name: 'json/tailwind-utility-config',
    format: function ({ dictionary }) {
      const minifiedCssDictionary = minifyDictionaryUsingFormat(
        dictionary.tokens,
        (obj) => `${obj.value}`,
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
    format: function ({ dictionary }) {
      return JSON.stringify(
        minifyDictionaryUsingFormat(dictionary.tokens, (obj) => ({
          value: obj.value,
        })),
        null,
        2,
      );
    },
  });

  // TODO: enable? await EDSStyleDictionary.cleanAllPlatforms();
  await EDSStyleDictionary.buildAllPlatforms();
})();
