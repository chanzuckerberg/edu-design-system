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

// copied from https://github.com/amzn/style-dictionary/blob/v3.0.0-rc.1/src/common/formats.js#L96
function minifyCSSVarDictionary(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const toRet = {};

  if (obj.value) {
    return `var(--${obj.name})`;
  } else {
    for (const name in obj) {
      toRet[name] = minifyCSSVarDictionary(obj[name]);
    }
  }
  return toRet;
}

/**
 * Tokens with key '@' are the base value of the parent, e.g.
 * {background: {neutral: {@: 'value' }}} is compiled to `background-neutral-default-@: 'value'`,
 * but we want this to look like `background-neutral: 'value'`.
 *
 * This function moves the '@' token out to be a sibling of the parent with the '@' part of
 * the name removed.
 *
 * Example:
 * "neutral": {
 *   "default": {
 *     "@": "var(--eds-theme-color-border-neutral-default)",
 *     "hover": "var(--eds-theme-color-border-neutral-default-hover)"
 *   },
 * },
 *
 * will be changed to
 *
 * "neutral": {
 *   "default": {
 *     "hover": "var(--eds-theme-color-border-neutral-default-hover)"
 *   },
 * },
 * "neutral-default": "var(--eds-theme-color-border-neutral-default)",
 *
 * This helper function makes this happen by
 * 1) Scanning great grandchildren for the key '@'
 * 2) If such key exists, child and grandchild names are combined to make the new child key and value of the great grandchild '@' key is assigned to the new child key
 * 2.1) The great grandchild '@' key/value pair is deleted for housekeeping.
 * 2.2) If objects are now empty, deletes them to prevent potential token name clashing which could cause Tailwind bugs.
 * 3) If such key does not exist, but grand child is an object, recurses with the child to repeat this process.
 */
function formatEdsTokens(obj) {
  for (const name in obj) {
    if (typeof obj[name] === 'object') {
      for (const nestedName in obj[name]) {
        if (obj[name][nestedName]['@']) {
          obj[name + '-' + nestedName] = obj[name][nestedName]['@'];
          delete obj[name][nestedName]['@'];
          if (Object.keys(obj[name][nestedName]).length === 0) {
            delete obj[name][nestedName];
          }
          if (Object.keys(obj[name]).length === 0) {
            delete obj[name];
          }
        } else if (typeof obj[name][nestedName] === 'object') {
          formatEdsTokens(obj[name]);
        }
      }
    }
  }
}

EDSStyleDictionary.registerFormat({
  name: 'json/nested-css-variables',
  formatter: function (dictionary) {
    const minifiedCssDictionary = minifyCSSVarDictionary(dictionary.properties);
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
