/* eslint-disable no-case-declarations */

// NOTE: Do not use directly. Extend this to support re-writing eds-import-from-figma for non-enterprise use cases
class AbstractFigmaReader {
  constructor(jsonData) {
    this._jsonData = jsonData;
  }

  getModes(variableCollectionId) {
    throw new Error('Cannot Use Abstract class directly');
  }

  getVariableCollections() {
    throw new Error('Cannot Use Abstract class directly');
  }

  getVariablesByCollectionId(variableCollectionId) {
    throw new Error('Cannot Use Abstract class directly');
  }
}

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
   * Utilities for handling parsing of Figma Theme Data.
   *
   * These functions are set up to handle, transform, and read data coming from figma API Structure.
   * For more information on this API format, refer to:
   * - https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma
   * - https://www.figma.com/plugin-docs/api/VariableCollection/
   */
  // https://www.figma.com/developers/api#get-published-variables-endpoint
  FigmaAPIReader: class extends AbstractFigmaReader {
    constructor(jsonData) {
      super(jsonData.meta);
    }

    /**
     * Get the modes associated with a specific figma collection
     *
     * @param {string} variableCollectionId
     * @returns Mode[]
     */
    getModes(variableCollectionId) {
      return this._jsonData.variableCollections[variableCollectionId].modes;
    }

    /**
     * Retrieve the defined variable collections from the specific figma file data
     * @see https://www.figma.com/developers/api#variables
     *
     * @returns VariableCollection[]
     */
    getVariableCollections() {
      return Object.values(this._jsonData.variableCollections);
    }

    /**
     * Retrieve the set of variables associated with a given collection (by ID)
     * @see https://www.figma.com/developers/api#variables
     *
     * @param {string} variableCollectionId
     * @returns Variable[]
     */
    getVariablesByCollectionId(variableCollectionId) {
      return Object.values(this._jsonData.variables).filter((variable) => {
        return variable.variableCollectionId === variableCollectionId;
      });
    }

    //
    // Delegation methods: variable lookup
    //

    /**
     * Look up a specific variable in the object, by its ID
     * @see https://www.figma.com/developers/api#variables
     *
     * @returns Variable
     */
    retrieveVariable(variableId) {
      const retrieved = Object.values(this._jsonData.variables).find(
        (variable) => {
          return variable.id === variableId;
        },
      );
      return retrieved;
    }
  },

  FigmaVariable: class {
    static TIER_2_PREFIX = '-> ';
    static VARIABLE_ALIAS = 'VARIABLE_ALIAS';
    static THEME_PATH = 'eds.theme';
    static DARK_THEME_PATH = 'eds.dark.theme';

    /**
     * @param {Variable} json API JSON data representing a figma variable instance
     * @param {string} tier1Mode the mode to read tier 1 values from
     * @param {string} tier2Mode the mode to read tier 2 (theme) values from
     * @param {string} tier1CollectionName the prefix of the tier 1 variable names
     * @param {FigmaAPIReader} lookupDelegate used to resolve aliased variables
     * @param {string} themePath where tier 2 tokens live in the theme file (e.g., `eds.dark.theme` for dark mode)
     */
    constructor(
      json,
      tier1Mode,
      tier2Mode,
      tier1CollectionName,
      lookupDelegate,
      themePath = module.exports.FigmaVariable.THEME_PATH,
    ) {
      // TODO: throw if any private members are invalid
      this._figmaVariableData = json;
      this._tier1Mode = tier1Mode;
      this._tier2Mode = tier2Mode;
      this._tier1CollectionName = tier1CollectionName;
      this._lookupDelegate = lookupDelegate;
      this._themePath = themePath;
    }

    /**
     * Retrieve the normalized path for the token name. This will prefix the token based on the token type
     * @returns string
     */
    getTokenPath() {
      switch (this._figmaVariableData.resolvedType) {
        case 'COLOR':
          /**
           * - when an tier 2 prefix is seen, pay attention to the type of the token being read, and prefix appropriately (color, etc. => eds.theme.color, etc.)
           */
          return this._tokenNameToPath(
            this._themePath +
              '.color.' +
              this._figmaVariableData.name.replace(
                module.exports.FigmaVariable.TIER_2_PREFIX,
                '',
              ),
          );
        case 'FLOAT':
          /**
           * - When a prefix is seen, remove it entirely for numeric values
           */
          return this._tokenNameToPath(
            this._themePath +
              '.' +
              this._figmaVariableData.name.replace(
                module.exports.FigmaVariable.TIER_2_PREFIX,
                '',
              ),
          );
        case 'STRING':
          /**
           * - When the type is STRING, we don't use a specific prefix
           */
          return this._tokenNameToPath(
            this._themePath +
              '.' +
              this._figmaVariableData.name.replace(
                module.exports.FigmaVariable.TIER_2_PREFIX,
                '',
              ),
          );
        default:
          throw new TypeError(
            'unknown resolved type for ' +
              this._figmaVariableData.name +
              ': ' +
              this._figmaVariableData.resolvedType,
          );
      }
    }

    /**
     * Recursively find the resolved value for a given token. When looking up values, reference
     * tier 1 (default) variable values, or use the theme token when not recursing (themed variables).
     *
     * @param {Variable} figmaVariable
     * @param {boolean} isLookup
     * @returns ResolvedValue object or literal representation of the stored figma variable value
     */
    getResovledValue(
      figmaVariable = this._figmaVariableData,
      isLookup = false,
    ) {
      // TODO: this should not fall thru when mode is missing
      // TODO: should this fail if lookupDelegate is undefined?
      if (
        module.exports.FigmaVariable.isAliased(figmaVariable, this._tier2Mode)
      ) {
        // Look up value using delegate. Take whatever value is in there regardless of mode
        const lookupValue = this._lookupDelegate.retrieveVariable(
          figmaVariable.valuesByMode[this._tier2Mode]?.id,
        );

        // on recurse, lookup to reference the tier 1 values instead
        return this.getResovledValue(lookupValue, true);
      } else {
        return isLookup
          ? figmaVariable.valuesByMode[this._tier1Mode]
          : figmaVariable.valuesByMode[this._tier2Mode];
      }
    }

    /**
     * Determine whether a variable is marked as orphaned (e.g., deleted from the var.s but still used in a component)
     * @returns {boolean}
     */
    isOrphaned() {
      return !!this._figmaVariableData.deletedButReferenced;
    }

    /**
     * @static
     *
     * Returns whether the value of a given figma variable and mode is a reference or not
     * @param {FigmaVariable} figmaVariable API JSON data representing a figma variable instance
     * @param {string} mode the collection that the variable has a value in
     * @returns {boolean} whether the value for the variable is a literal or references another figma variable
     */
    static isAliased(figmaVariable, mode) {
      return (
        figmaVariable.valuesByMode[mode]?.type ===
        module.exports.FigmaVariable.VARIABLE_ALIAS
      );
    }

    /**
     * Returns whether the value of a given figma variable and mode is a reference or not
     * @param {FigmaVariable} figmaVariable API JSON data representing a figma variable instance
     * @param {string} mode the collection that the variable has a value in
     * @returns {boolean} whether the value for the variable is a literal or references another figma variable
     */
    isAliased() {
      return module.exports.FigmaVariable.isAliased(
        this._figmaVariableData,
        this._tier2Mode,
      );
    }

    /**
     * Recursively find the resolved name for a given token
     * @param {Variable} figmaVariable
     * @param {boolean} isLookup
     * @returns
     */
    getResovledName(figmaVariable = this._figmaVariableData, isLookup = false) {
      // TODO: this should not fall thru when mode is missing
      if (
        module.exports.FigmaVariable.isAliased(figmaVariable, this._tier2Mode)
      ) {
        // Look up value using delegate. Take whatever value is in there regardless of mode
        const lookupValue = this._lookupDelegate.retrieveVariable(
          figmaVariable.valuesByMode[this._tier2Mode]?.id,
        );

        return this.getResovledName(lookupValue, true);
      } else {
        return isLookup ? figmaVariable.name : undefined;
      }
    }

    /**
     * Conversion of the figma token name (e.g., some/path/to/token) to the equivalent path in a JSON object
     * @param {string} figmaTokenName The name from the figma variables panel (slash separated)
     * @returns {string} a lodash-compatible string representing the path to the token value in JSON
     */
    _tokenNameToPath(figmaTokenName) {
      // TODO: include example formats and conversions (in test)
      return (
        figmaTokenName
          // Figma separates out the token name parts using '/'. convert to dots for path naming
          .replaceAll('/', '.')
          // Tokens also use dashes to avoid complexity in the Figma variable UI. convert to dots for path naming
          .replaceAll('-', '.')
      );
    }

    /**
     * Convert the figma variable value format into a CSS-/JSON-cross-compatible format (quoted string), based on the variable type
     * @param {ResolvedValue} figmaResolvedValue
     * @returns string
     */
    parseResolvedValue(figmaResolvedValue) {
      const varType = this._figmaVariableData.resolvedType;

      /**
       * Data Types:
       * - Type COLOR: https://www.figma.com/plugin-docs/api/RGB/
       * - Type FLOAT
       */
      switch (varType) {
        case 'COLOR':
          // convert each part of the resolved value value to an equivalent number:
          // - for r,g,b, convert the fractional number to a value 0-255
          // - for a, make sure it's treated as a number
          const r = Math.floor(figmaResolvedValue.r * 255);
          const g = Math.floor(figmaResolvedValue.g * 255);
          const b = Math.floor(figmaResolvedValue.b * 255);
          const a = Number(figmaResolvedValue.a);

          // if we have an alpha channel, use `rgba()`
          if (a > 0 && a < 1) {
            return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
          } else if (
            figmaResolvedValue.color?.type === 'VARIABLE_ALIAS' &&
            figmaResolvedValue.color.id
          ) {
            // Figma can emit a color as an alias to another variable plus a separate opacity (0-100).
            // Resolve the aliased variable's tier 1 color and apply the opacity as the alpha channel.
            // Throws a ReferenceError if the aliased variable is missing or has no tier 1 value.
            const t = this._lookupDelegate.retrieveVariable(
              figmaResolvedValue.color.id,
            )?.valuesByMode[this._tier1Mode];
            if (t) {
              const r = Math.floor(t.r * 255);
              const g = Math.floor(t.g * 255);
              const b = Math.floor(t.b * 255);
              return `rgba(${r}, ${g}, ${b}, ${(figmaResolvedValue.opacity / 100).toFixed(2)})`;
            } else {
              throw new ReferenceError(
                `unknown lookup value: cannot find ${figmaResolvedValue.color.id} in mode ${this._tier1Mode}`,
              );
            }
          } else {
            // print hex instead when the value has no alpha channel
            return (
              '#' +
              [r, g, b]
                .map((x) => x.toString(16))
                .map((x) => (x.length === 1 ? '0' + x : x))
                .join('')
                .toUpperCase()
            );
          }
        case 'FLOAT':
          // JSON only handles strings so convert here
          return String(figmaResolvedValue);
        case 'STRING':
          return String(figmaResolvedValue);
        default:
          throw new TypeError('unknown resolved type: ' + varType, {
            details: figmaResolvedValue,
          });
      }
    }

    /**
     * @property
     * Unformatted (figma) name for the current figma variable
     */
    get name() {
      return this._figmaVariableData.name;
    }

    /**
     * @property
     * Resolved and parsed value for the given variable. Performs lookup if value is aliased, using delegate.
     */
    get value() {
      return this.parseResolvedValue(this.getResovledValue());
    }

    /**
     * @property
     * Resolved and parsed value reference (path) for the given variable. Performs lookup if value is aliased, using delegate.
     */
    get valueRef() {
      switch (this._figmaVariableData.resolvedType) {
        case 'COLOR':
          return module.exports.FigmaVariable.isAliased(
            this._figmaVariableData,
            this._tier2Mode,
          )
            ? `${this._tokenNameToPath(
                this.getResovledName()
                  // replace token prefixes with the internal equivalents
                  .replace(this._tier1CollectionName + '/', 'eds.color.')
                  .replace(
                    module.exports.FigmaVariable.TIER_2_PREFIX,
                    this._themePath + '.color.',
                  ),
              )}`
            : this.value;
        case 'FLOAT':
          return module.exports.FigmaVariable.isAliased(
            this._figmaVariableData,
            this._tier2Mode,
          )
            ? `${this._tokenNameToPath('eds.' + this.getResovledName())}`
            : this.value;
        case 'STRING':
          return module.exports.FigmaVariable.isAliased(
            this._figmaVariableData,
            this._tier2Mode,
          )
            ? `${this._tokenNameToPath('eds.' + this.getResovledName())}`
            : this.value;
        default:
          throw new TypeError(
            'unknown resolved type for ' +
              this._figmaVariableData.name +
              ': ' +
              this._figmaVariableData.resolvedType,
          );
      }
    }
  },
  /**
   * Guess which mode in a collection holds the dark values for a given theme mode, using the mode names.
   * Prefers a dark mode that shares the theme mode's name (e.g., "Brand" => "Brand Dark"), then any mode
   * with "dark" in its name.
   *
   * @param {Mode[]} modes the modes of the tier 2 collection
   * @param {string} themeModeId the mode ID of the selected (light) theme
   * @returns {Mode|undefined} the likely dark mode, or undefined if none is found
   */
  findDarkMode: function (modes, themeModeId) {
    const themeMode = modes.find((mode) => mode.modeId === themeModeId);
    const darkModes = modes.filter(
      (mode) => mode.modeId !== themeModeId && /dark/i.test(mode.name),
    );
    const themeName = themeMode?.name
      .replace(/light/i, '')
      .trim()
      .toLowerCase();

    return (
      (themeName &&
        darkModes.find((mode) =>
          mode.name.toLowerCase().includes(themeName),
        )) ||
      darkModes[0]
    );
  },
  /**
   * Apply the values of each tier 2 figma variable in a collection to a theme file object, for one mode.
   * Edits the theme in place.
   *
   * @param {object} options
   * @param {FigmaAPIReader} options.figmaApiReader reader for the figma variable data
   * @param {string} options.collectionId the tier 2 collection to read variables from
   * @param {string} options.tier1ModeId the mode to read tier 1 values from
   * @param {string} options.tier2ModeId the mode to read tier 2 values from (e.g., the light or dark theme)
   * @param {string} options.tier1CollectionName the prefix of the tier 1 variable names
   * @param {object} options.theme the parsed theme file to write to (e.g., core-tokens.json or app-theme.json)
   * @param {string} options.themePath where tier 2 tokens live in the theme file (e.g., `eds.dark.theme`)
   * @param {boolean} options.isLocal write token references (for EDS itself) instead of literal values
   * @param {boolean} options.canWrite when false, only report what would be written
   * @param {boolean} options.isVerbose print additional details
   * @param {object} options.logger ora-compatible spinner, used to report progress
   * @returns {{skipped: Array, updated: Array, errored: Array, total: Array}} stats on the processed variables
   */
  applyFigmaVariablesToTheme: function ({
    figmaApiReader,
    collectionId,
    tier1ModeId,
    tier2ModeId,
    tier1CollectionName,
    theme,
    themePath = module.exports.FigmaVariable.THEME_PATH,
    isLocal = false,
    canWrite = true,
    isVerbose = false,
    logger,
  }) {
    const chalk = require('chalk');
    const at = require('lodash/at');
    const identity = require('lodash/identity');
    const set = require('lodash/set');

    const stats = {
      skipped: [],
      updated: [],
      errored: [],
      total: [],
    };

    // Main loop: work thru each detected variable, and convert
    figmaApiReader
      .getVariablesByCollectionId(collectionId)
      .forEach((figmaVariable) => {
        stats.total.push(figmaVariable.id);
        const variable = new module.exports.FigmaVariable(
          figmaVariable,
          tier1ModeId,
          tier2ModeId,
          tier1CollectionName,
          figmaApiReader,
          themePath,
        );

        // bypass all typography tokens, as those should be handled manually at this time
        if (variable.name.includes('typography')) {
          return;
        }

        // If we have a zombie entry in the variable list, skip it (flag for design)
        if (variable.isOrphaned()) {
          stats.skipped.push(variable);

          logger.warn(
            chalk.bold(variable.name) +
              ': Skipped with warning (orphaned): please remove usage in figma',
          );

          if (isVerbose) {
            console.warn('Variable details:', variable);
          }

          return;
        }

        // mesh the token path to a matching path in the local theme file
        let writePath;
        try {
          writePath = variable.getTokenPath();
          const locationInLocal = at(theme, writePath).filter(
            (entries) => typeof entries !== 'undefined',
          );

          // Update the write path to conform to the format used in style-dictionary
          if (locationInLocal.length) {
            // handle case where we should look for @ in the file, then pluck the value object properly
            if (locationInLocal[0]['@']?.value) {
              // update the write path to mark the @ and value
              writePath = writePath + '.@.value';
            }

            // handle case where it's just value
            if (locationInLocal[0]?.value) {
              // update the write path to mark the value
              writePath = writePath + '.value';
            }
          }
        } catch (e) {
          // We couldn't parse the write path
          isVerbose && logger.fail(chalk.bold(variable.name) + ': ' + e);
          isVerbose && console.error('Variable details:', variable);
        }

        if (writePath) {
          try {
            // error when path suffix is invalid (all should end with .value)
            if (!writePath.endsWith('value')) {
              throw new Error(
                `Name format violation. JSON path missing in local theme: ${writePath} (${figmaVariable.resolvedType})`,
              );
            }

            if (
              module.exports.FigmaVariable.isAliased(
                figmaVariable,
                tier2ModeId,
              ) &&
              isLocal &&
              !at(theme, variable.valueRef).some(identity)
            ) {
              throw new Error(
                `Value violation. Trying to write a local reference value path not in local theme: ${writePath} => {${variable.valueRef}}`,
              );
            }

            // Write the defined value to the specified location by json path
            canWrite &&
              isLocal &&
              set(
                theme,
                writePath,
                variable.isAliased()
                  ? `{${variable.valueRef}}`
                  : variable.valueRef,
              );
            canWrite && !isLocal && set(theme, writePath, variable.value);

            // log if in a loggable mode (verbose / dry-run)
            if (isVerbose || !canWrite) {
              logger.succeed(
                `Write: ${
                  isLocal ? variable.valueRef : variable.value
                } to ${writePath}`,
              );
            }

            logger.text = chalk.bold(variable.name) + ': Done!';
            stats.updated.push(variable);
          } catch (e) {
            // We couldn't parse the resolved value, so skip and add to errors
            logger.fail(chalk.bold(variable.name) + ': ' + e);
            isVerbose && console.error('Variable details:', variable);
            stats.errored.push(variable);
          }
        } else {
          logger.text = chalk.bold(variable.name) + ': Skipped';

          if (!writePath) {
            logger.warn(
              chalk.bold(variable.name) +
                `: Skipped with warning (no write path "${writePath}")`,
            );
          }
          isVerbose && console.warn('Variable details:', variable);
          stats.skipped.push(variable);
        }
      });

    return stats;
  },
};
