const breakpoints = require('./src/design-tokens/tier-1-definitions/breakpoints');

module.exports = {
  plugins: [
    require('postcss-import')({
      addModulesDirectories: ['node_modules'],
    }),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-simple-vars')({ variables: breakpoints }),
  ],
};
