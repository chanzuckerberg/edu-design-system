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
      throw new ReferenceError(
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
   * @returns {boolean} true when is strict subset
   * @throws Error when there are tokens in theme that aren't in base
   */
  isStrictSubset: function (base, theme, path = []) {
    for (const name in theme) {
      if (typeof theme[name] === 'object') {
        if (base[name] === undefined) {
          throw new ReferenceError(
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

    return true;
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
  /**
   * Determine the write path by taking the collection and variable name, and looking it up in
   * the existing local theme. If there's a path in the local theme file, we can write there (using lodash/set
   * or similar).
   *
   * @param {object} localTheme JSON file loaded, representing the data for the local theme
   * @param {string} collectionName Name of the exported collection
   * @param {string} variableName current variable name from figma (e.g., color/text/neutral/default)
   * @returns {string|null} representation of the path to write to in the local theme JSON file
   */
  getWritePath: function (localTheme, collectionName, variableName) {
    const at = require('lodash/at');

    const workingPath =
      module.exports.getTokenPrefix(collectionName) +
      module.exports.tokenNameToPath(variableName);

    const found = at(localTheme, workingPath).filter(
      (entries) => typeof entries !== 'undefined',
    );

    if (found.length) {
      // handle case where we should look for @ in the file, then pluck the value object properly
      if (found[0]['@']?.value) {
        // update the write path to mark the @ and value
        return workingPath + '.@.value';
      }

      // handle case where it's just value
      if (found[0]?.value) {
        // update the write path to mark the value
        return workingPath + '.value';
      }
    }

    // There is no write path based on what's in the local theme so we return null signal it's a missing token
    return null;
  },
  /**
   * Utilities for handling parsing of Figma Theme Data.
   *
   * These functions are set up to handle, transform, and read data coming from figma API Structure.
   * For more information on this API format, refer to:
   * - https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma
   * - https://www.figma.com/plugin-docs/api/VariableCollection/
   */
  /**
   * Given the value sourced from figma, translate it into a
   * style-dictionary format. When encountering an unrecognized type,
   * throw an error.
   *
   * Data Types:
   * - Type COLOR: https://www.figma.com/plugin-docs/api/RGB/
   *
   * @param {string} type Figma type for the token value (Set:)
   * @param {object} figmaResolvedValue
   * @returns {string} value using the type
   * @throws {TypeError} using `details` on the data read from figma
   */
  parseResolvedValue: function (type, figmaResolvedValue) {
    if (type === 'COLOR') {
      const r = Math.floor(figmaResolvedValue.r * 255);
      const g = Math.floor(figmaResolvedValue.g * 255);
      const b = Math.floor(figmaResolvedValue.b * 255);
      const a = figmaResolvedValue.a;
      if (figmaResolvedValue.a > 0 && figmaResolvedValue.a < 1) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
      } else {
        // print hex instead
        return (
          '#' +
          [r, g, b]
            .map((x) => x.toString(16))
            .map((x) => (x.length === 1 ? '0' + x : x))
            .join('')
            .toUpperCase()
        );
      }
    } else {
      throw new TypeError('unknown resolved type: ' + type, {
        details: figmaResolvedValue,
      });
    }
  },
  /**
   * Given the "type" of import file (named after the collection name), produce
   * a prefix to the token name that corresponds to the prefix used for those
   * tokens.
   *
   * @param {string} collectionName The key to write to
   * @returns {string|null} a text prefix for where to write the token value or null when no prefix is found
   */
  getTokenPrefix: function (collectionName) {
    switch (collectionName) {
      case 'themes':
        return 'eds.theme.';
      case 'primitives':
        return 'eds.';
      default:
        return null;
    }
  },
  /**
   * Conversion of the figma token name (e.g., some/path/to/token) to the equivalent path in a JSON object
   * @param {string} figmaTokenName The name from the figma variables panel (slash separated)
   * @returns {string} a lodash-compatible string representing the path to the token value in JSON
   */
  tokenNameToPath: function (figmaTokenName) {
    return figmaTokenName.replaceAll('/', '.').toLowerCase();
  },
};
