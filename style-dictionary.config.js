const StyleDictionary = require('style-dictionary');
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
          },
        },
        {
          format: 'json/nested-css-variables',
          // useful for tailwind configs in consuming apps
          destination: 'lib/tokens/json/css-variables-nested.json',
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
      buildPath: 'src/tokens-dist/',
      files: [
        {
          format: 'json/nested',
          // useful for tailwind configs in consuming apps
          destination: 'json/variables-nested.json',
        },
        {
          format: 'json/value',
          // sets up the base theme for use in overrides
          /**
           * TODO:
           * - use filter to only include the theme-able things, not everything?
           * - - https://amzn.github.io/style-dictionary/#/formats?id=filtering-tokens
           */
          destination: 'json/theme-base.json',
          filter: function (token) {
            // don't allow theming on legacy tokens
            return token.attributes.category !== 'legacy';
          },
        },
      ],
    },
  },
});

// copied from https://github.com/amzn/style-dictionary/blob/main/lib/common/formatHelpers/minifyDictionary.js#L29
// replace the value object with a string representing the CSS variable reference
function minifyDictionaryUsingFormat(obj, formatFunc) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const toRet = {};

  if (obj.hasOwnProperty('value')) {
    return formatFunc(obj);
  } else {
    for (const name in obj) {
      toRet[name] = minifyDictionaryUsingFormat(obj[name], formatFunc);
    }
  }
  return toRet;
}

EDSStyleDictionary.registerFormat({
  name: 'json/nested-css-variables',
  formatter: function (dictionary) {
    return JSON.stringify(
      minifyDictionaryUsingFormat(
        dictionary.properties,
        (obj) => `var(--${obj.name})`,
      ),
      null,
      2,
    );
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
