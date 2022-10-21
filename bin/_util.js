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
    const { config } = await lilconfig('eds').search();

    // If no config exists, exit.
    if (!config) {
      // TODO: point to documentation (linked either to the repo or confluence)
      console.error('Please add EDS config to your project before continuing.');
    }

    return config;
  },
};
