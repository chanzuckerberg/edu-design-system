module.exports = {
  // Shared Edu config from https://github.com/chanzuckerberg/edu-libs/tree/main/packages/prettier-config-edu.
  // Copied here, because EDS is open source and can't use the private package directly.
  arrowParens: 'always',
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'all',

  // Override of our shared config. Should we change this and use the same config as our other
  // repos? Doing so would result in a large diff (every file would be updated).
  bracketSpacing: true,
};
