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
      buildPath: 'src/',
      files: [
        {
          format: 'css/variables',
          destination: 'tokens-dist/css/variables.css',
          options: {
            showFileHeader: false,
          },
        },
        {
          format: 'json/nested-css-variables',
          // useful for tailwind configs in consuming apps
          destination: 'tokens-dist/json/css-variables-nested.json',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'tokens-dist/ts/colors.ts',
          options: {
            showFileHeader: false,
          },
          filter: (token) => token.path.includes('color'),
        },
      ],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [
        {
          format: 'json/nested',
          // useful for tailwind configs in consuming apps
          destination: 'tokens-dist/json/variables-nested.json',
        },
      ],
    },
    scss: {
      transforms: [...StyleDictionary.transformGroup.scss, 'name/cti/kebab'],
      buildPath: 'src/',
      files: [
        {
          format: 'scss/map-deep',
          destination: 'tokens-dist/scss/_variables.scss',
          options: {
            showFileHeader: false,
          },
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

  var toRet = {};

  if (obj.value) {
    return `var(--${obj.name})`;
  } else {
    for (var name in obj) {
      toRet[name] = minifyCSSVarDictionary(obj[name]);
    }
  }
  return toRet;
}

EDSStyleDictionary.registerFormat({
  name: 'json/nested-css-variables',
  formatter: function (dictionary) {
    return JSON.stringify(
      minifyCSSVarDictionary(dictionary.properties),
      null,
      2,
    );
  },
});

EDSStyleDictionary.buildAllPlatforms();
