module.exports = {
  /**
   * Fetch the EDS config from the project using the lilconfig hierarchy.
   * This can be from package.json, or from various separate non-YAML files.
   *
   * @see https://github.com/antonk52/lilconfig#usage
   * @returns nullable config object returned from lilconfig
   */
  getConfig: async function () {
    const { lilconfig } = require('lilconfig');

    // read in the config from config file, package json "eds", etc.
    const settings = await lilconfig('eds').search();

    // If no config exists, fail
    if (!settings) {
      throw new Error(
        'Please add EDS config to your project before continuing (specify "json" and "css" target paths)',
      );
    }

    return settings.config;
  },
};
