const config = require('@chanzuckerberg/prettier-config-edu');

module.exports = {
  ...config,

  // Override of our shared config. Should we remove this and use the same config as our other
  // repos? Doing so would result in a large diff (every file would be updated).
  bracketSpacing: true,
};
