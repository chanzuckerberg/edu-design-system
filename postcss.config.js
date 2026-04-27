module.exports = {
  plugins: {
    'postcss-import': {
      addModulesDirectories: ['node_modules'],
    },
    'tailwindcss/nesting': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {
      variables: {
        // TODO-AH: Sync all the breakpoints across files
        'eds-bp-xs': '0px',
        'eds-bp-sm': '600px',
        'eds-bp-md': '768px',
        'eds-bp-lg': '1040px',
        'eds-bp-xl': '1440px',
        'eds-bp-xxl': '1920px',
      },
    },
    'postcss-nested': {},
    tailwindcss: {},
  },
};
