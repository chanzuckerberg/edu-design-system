// postcss-nested is ESM-only, so require() returns its module namespace.
const postcssNested = require('postcss-nested').default;

module.exports = {
  plugins: [
    require('postcss-import')({
      addModulesDirectories: ['node_modules'],
    }),
    require('tailwindcss/nesting'),
    require('postcss-mixins'),
    require('postcss-simple-vars')({
      variables: {
        // TODO-AH: Sync all the breakpoints across files
        'eds-bp-xs': '0px',
        'eds-bp-sm': '600px',
        'eds-bp-md': '768px',
        'eds-bp-lg': '1040px',
        'eds-bp-xl': '1440px',
        'eds-bp-xxl': '1920px',
      },
    }),
    postcssNested(),
    require('tailwindcss'),
  ],
};
