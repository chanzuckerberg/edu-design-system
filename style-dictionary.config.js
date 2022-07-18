const StyleDictionary = require('style-dictionary');

/**
 * From BM theming from here to "From EDS" comment
 */

// Look for args passed on the command line
const args = require('minimist')(process.argv.slice(2));

// If no theme arg was passed, default to Primary theme
const theme = args.theme ? args.theme : 'theme-1';

console.log(`🚧 Compiling tokens with the ${theme.toUpperCase()} theme`);

/**
 * Generate a Theme-Specific Config
 * This accepts a theme parameter, which is used to control which set of
 * tokens to compile, and to define theme-specific compiled output.
 * @param {string} theme
 */
const getStyleDictionaryConfig = (theme) => {
  return {
    log: 'warn',
    source: [`src/design-tokens/${theme}/**/*.json`],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'src/',
        files: [
          {
            destination: `/design-tokens/${theme}/tokens.css`,
            format: 'css/variables',
          },
        ],
      },
      json: {
        transformGroup: 'css',
        buildPath: '',
        files: [
          {
            destination: '.storybook/data/tokens.json',
            format: 'json/flat',
          },
        ],
      },
    },
  };
};

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(
  getStyleDictionaryConfig(theme),
);

// BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

/**
 * From EDS
 */

// const EDSStyleDictionary = StyleDictionary.extend({
//   source: ['src/design-tokens/**/*.json'],
//   platforms: {
//     storybook: {
//       transformGroup: 'css',
//       buildPath: '',
//       files: [
//         {
//           format: 'json/flat',
//           destination: '.storybook/data/tokens.json',
//         },
//       ],
//     },
//     css: {
//       transforms: [...StyleDictionary.transformGroup.css, 'name/cti/kebab'],
//       buildPath: 'src/tokens-dist/',
//       files: [
//         {
//           format: 'css/variables',
//           destination: 'css/variables.css',
//           options: {
//             showFileHeader: false,
//           },
//         },
//         {
//           format: 'json/nested-css-variables',
//           // useful for tailwind configs in consuming apps
//           destination: 'json/css-variables-nested.json',
//         },
//       ],
//     },
//     js: {
//       transformGroup: 'js',
//       buildPath: 'src/tokens-dist/',
//       files: [
//         {
//           format: 'javascript/es6',
//           destination: 'ts/colors.ts',
//           options: {
//             showFileHeader: false,
//           },
//           filter: (token) => token.path.includes('color'),
//         },
//       ],
//     },
//     json: {
//       transformGroup: 'js',
//       buildPath: 'src/tokens-dist/',
//       files: [
//         {
//           format: 'json/nested',
//           // useful for tailwind configs in consuming apps
//           destination: 'json/variables-nested.json',
//         },
//       ],
//     },
//     scss: {
//       transforms: [...StyleDictionary.transformGroup.scss, 'name/cti/kebab'],
//       buildPath: 'src/tokens-dist/',
//       files: [
//         {
//           format: 'scss/map-deep',
//           destination: 'scss/_variables.scss',
//           options: {
//             showFileHeader: false,
//           },
//         },
//       ],
//     },
//   },
// });

// // copied from https://github.com/amzn/style-dictionary/blob/v3.0.0-rc.1/src/common/formats.js#L96
// function minifyCSSVarDictionary(obj) {
//   if (typeof obj !== 'object' || Array.isArray(obj)) {
//     return obj;
//   }

//   var toRet = {};

//   if (obj.value) {
//     return `var(--${obj.name})`;
//   } else {
//     for (var name in obj) {
//       toRet[name] = minifyCSSVarDictionary(obj[name]);
//     }
//   }
//   return toRet;
// }

// EDSStyleDictionary.registerFormat({
//   name: 'json/nested-css-variables',
//   formatter: function (dictionary) {
//     return JSON.stringify(
//       minifyCSSVarDictionary(dictionary.properties),
//       null,
//       2,
//     );
//   },
// });

// EDSStyleDictionary.buildAllPlatforms();
