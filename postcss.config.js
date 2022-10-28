const breakpoints = require('./src/design-tokens/tier-1-definitions/breakpoints');

module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: ['node_modules'],
    },
    'tailwindcss/nesting': {},
    'postcss-mixins': {},
    'postcss-simple-vars': { variables: breakpoints },
    'postcss-nested': {},
    tailwindcss: {},
  },
};
