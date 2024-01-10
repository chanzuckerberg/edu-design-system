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
        'Please add EDS config to your project before continuing (specify "src" and "dest" target paths)',
      );
    }

    /**
     * TODO: Remove the old names for the input/output keys in the config at a future major version
     * json => src
     * css => dest
     */
    if (settings.config.json) {
      settings.config.src = settings.config.json;
      console.warn(
        'WARNING: You are using "json" in your config. Please replace with "src".',
      );
    }

    if (settings.config.css) {
      settings.config.dest = settings.config.css;
      console.warn(
        'WARNING: You are using "css" in your config. Please replace with "dest".',
      );
    }

    return settings.config;
  },
  /**
   * Utilities for handling generation of tokens in various formats.
   *
   * These will be used when preparing files upon publish, and are used with tooling provided by EDS to
   * consumers.
   */
  /**
   * Function to handle various minimizing tasks on style-dictionary rows, where a value to transform exists
   *
   * @param {StyleObject} obj Metadata object produced from style-dictionary
   * @param {Function} formatFunc function containing all the metadata for a given token
   * @returns object representing the full transformed token object
   */
  minifyDictionaryUsingFormat: function (obj, formatFunc) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      return obj;
    }

    const toRet = {};

    if (obj.hasOwnProperty('value')) {
      return formatFunc(obj);
    } else {
      for (const name in obj) {
        toRet[name] = module.exports.minifyDictionaryUsingFormat(
          obj[name],
          formatFunc,
        );
      }
    }
    return toRet;
  },
  /**
   * Determine if the given theme file is a subset of what's in the base theme file.
   * If it isnt, throw an error:
   * - If keys are in base that are missing in the theme file, that's OK (no need to override everything)
   * - If keys are in theme that aren't in base, throw (you can't theme tokens that don't exist in EDS)
   * @param {object} base The tokens theme file stored in the EDS project
   * @param {object} theme The project theme file stored in the app code (same format as bas)
   * @param {Array} path The base path, stored as an array of object key names (default [])
   * @throws Error when there are tokens in theme that aren't in base
   */
  isStrictSubset: function (base, theme, path = []) {
    for (const name in theme) {
      if (typeof theme[name] === 'object') {
        if (base[name] === undefined) {
          throw new Error(
            `Local themeable value does not exist in base theme: --${path.join(
              '-',
            )}.${name}"`,
          );
        }
        module.exports.isStrictSubset(
          base[name],
          theme[name],
          path.concat(name),
        );
      }
    }
  },
  /**
   * Flatten token names such that any "root-tokens" do not include `@` in the resulting token name.
   *
   * Example:
   * "neutral": {
   *   "default": {
   *     "@": "var(--eds-theme-color-border-neutral-default)",
   *     "hover": "var(--eds-theme-color-border-neutral-default-hover)"
   *   },
   * },
   *
   * will be changed to
   *
   * "neutral": {
   *   "default": {
   *     "hover": "var(--eds-theme-color-border-neutral-default-hover)"
   *   },
   * },
   * "neutral-default": "var(--eds-theme-color-border-neutral-default)",
   */
  formatEdsTokens: function (obj) {
    for (const name in obj) {
      if (typeof obj[name] === 'object') {
        for (const nestedName in obj[name]) {
          if (obj[name][nestedName]['@']) {
            obj[name + '-' + nestedName] = obj[name][nestedName]['@'];
            delete obj[name][nestedName]['@'];
            if (Object.keys(obj[name][nestedName]).length === 0) {
              delete obj[name][nestedName];
            }
            if (Object.keys(obj[name]).length === 0) {
              delete obj[name];
            }
          } else if (typeof obj[name][nestedName] === 'object') {
            module.exports.formatEdsTokens(obj[name]);
          }
        }
      }
    }
  },
};
