/* eslint-disable no-case-declarations */

// NOTE: Do not use directly. Extend this to support re-writing eds-import-from-figma for non-enterprise use cases
class AbstractFigmaReader {
  static TIER_1_MODE = '6181:0';
  static EDS_COLLECTION_NAME = 'EDS tokens';

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
     * @see https://www.figma.com/plugin-docs/api/VariableCollection/
     *
     * @returns VariableCollection[]
     */
    getVariableCollections() {
      return Object.values(this._jsonData.variableCollections).map(
        (collection) => {
          return {
            id: collection.id,
            name: collection.name,
          };
        },
      );
    }

    /**
     * Retrieve the set of variables associated with a given collection (by ID)
     * @see https://www.figma.com/plugin-docs/api/Variable/
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
     * @see https://www.figma.com/plugin-docs/api/Variable/
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
    static TIER_1_PREFIX = 'render/';
    static TIER_2_PREFIX = '-> ';
    static VARIABLE_ALIAS = 'VARIABLE_ALIAS';

    constructor(json, mode, lookupDelegate) {
      // TODO: throw if any private members are invalid
      this._figmaVariableData = json;
      this._mode = mode;
      this._lookupDelegate = lookupDelegate;
    }

    /**
     * Retrieve the normalized path for the token name. This will prefix the token based on the token type
     * @returns string
     */
    getTokenPath() {
      switch (this._figmaVariableData.resolvedType) {
        case 'COLOR':
          /**
           * - when an arrow is seen, pay attention to the type of the token being read, and prefix appropriately (color, etc. => eds.theme.color, etc.)
           */
          return this._tokenNameToPath(
            'eds.theme.color.' +
              this._figmaVariableData.name.replace('-> ', ''),
          );
        case 'FLOAT':
          /**
           * - When an arrow is seen, remove it entirely for numeric values
           */
          return this._tokenNameToPath(
            'eds.theme.' + this._figmaVariableData.name.replace('-> ', ''),
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
     * Recursively find the resolved value for a given token
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
      if (module.exports.FigmaVariable.isAliased(figmaVariable, this._mode)) {
        // Look up value using delegate. Take whatever value is in there regardless of mode
        const lookupValue = this._lookupDelegate.retrieveVariable(
          figmaVariable.valuesByMode[this._mode].id,
        );

        return this.getResovledValue(lookupValue, true);
      } else {
        return isLookup
          ? figmaVariable.valuesByMode[
              module.exports.FigmaAPIReader.TIER_1_MODE
            ]
          : figmaVariable.valuesByMode[this._mode];
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
        this._mode,
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
      if (module.exports.FigmaVariable.isAliased(figmaVariable, this._mode)) {
        // Look up value using delegate. Take whatever value is in there regardless of mode
        const lookupValue = this._lookupDelegate.retrieveVariable(
          figmaVariable.valuesByMode[this._mode].id,
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
          const r = Math.floor(figmaResolvedValue.r * 255);
          const g = Math.floor(figmaResolvedValue.g * 255);
          const b = Math.floor(figmaResolvedValue.b * 255);
          const a = figmaResolvedValue.a * 1;

          // if we have an alpha channel, use `rgba()`
          if (a > 0 && a < 1) {
            return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
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
            this._mode,
          )
            ? `${this._tokenNameToPath(
                this.getResovledName()
                  // replace token prefixes with the internal equivalents
                  .replace(
                    module.exports.FigmaVariable.TIER_1_PREFIX,
                    'eds.color.',
                  )
                  .replace(
                    module.exports.FigmaVariable.TIER_2_PREFIX,
                    'eds.theme.color.',
                  ),
              )}`
            : this.value;
        case 'FLOAT':
          return module.exports.FigmaVariable.isAliased(
            this._figmaVariableData,
            this._mode,
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
};
