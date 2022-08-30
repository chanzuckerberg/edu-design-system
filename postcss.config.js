const breakpoints = require('./src/design-tokens/tier-1-definitions/breakpoints');

module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: ['node_modules'],
    },
    'postcss-mixins': {},
    'postcss-simple-vars': { variables: breakpoints },
    // TODO: replace with tailwindcss/nesting (https://tailwindcss.com/docs/using-with-preprocessors#nesting)
    // to silence warnings; for some reason this is not working currently.
    'postcss-nested': {},
    tailwindcss: {},
  },
};
