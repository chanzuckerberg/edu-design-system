const StyleDictionary = require('style-dictionary');

/** @type {import('style-dictionary')} */
const EDSStyleDictionary = StyleDictionary.extend({
  source: ['src/design-tokens/**/*.json'],
  platforms: {
    storybook: {
      transformGroup: 'css',
      files: [
        {
          format: 'json/flat',
          destination: '.storybook/data/tokens.json',
        },
      ],
    },
    tokenMap: {
      transformGroup: 'css',
      files: [
        {
          format: 'json/flat-map',
          destination: '.storybook/data/token-map.json',
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
      ],
    },
  },
});

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

// This transforms tokens into a flat map with preserved original values, so tokens with tier > n + 1 will map to tier n tokens (usually tier 1),
// while tier 1 tokens will map to primary values.
EDSStyleDictionary.registerFormat({
  name: 'json/flat-map',
  formatter: function (dictionary) {
    const map = {};
    dictionary.allTokens.forEach((token) => {
      let value = '';
      // Look for style dictionary format tokens or css custom variables and morph them to a common format
      if (token.original.value.startsWith('{eds')) {
        value = token.original.value.slice(1, -1).split('.').join('-');
      } else if (token.original.value.startsWith('var(--')) {
        value = token.original.value.slice(6, -1);
      } else {
        value = token.original.value;
      }
      // Include file path to distinguish tiers of tokens
      map[token.name] = { value, filePath: token.filePath };
    });
    return JSON.stringify(map, null, 2);
  },
});

EDSStyleDictionary.buildAllPlatforms();
