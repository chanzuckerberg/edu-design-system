jest.mock('lilconfig');

const lilconfig = require('lilconfig');
const identity = require('lodash/identity');
const utils = require('./_util');

describe('utils', function () {
  describe('minifyDictionaryUsingFormat', () => {
    const base = {
      eds: {
        theme: {
          color: {
            test: {
              value: '#000000',
            },
            test2: {
              value: '#00FF00',
            },
          },
        },
      },
    };
    it('bypasses parsing when object is not an object', () => {
      const emptyArray = [];

      expect(utils.minifyDictionaryUsingFormat(emptyArray)).toEqual([]);
    });

    it('allows interpretation of parsed values as identity', () => {
      expect(utils.minifyDictionaryUsingFormat(base, identity)).toEqual(base);
    });

    it('allows flattening of value objects', () => {
      const expected = {
        eds: {
          theme: {
            color: {
              test: '#000000',
              test2: '#00FF00',
            },
          },
        },
      };
      expect(
        utils.minifyDictionaryUsingFormat(base, (obj) => obj.value),
      ).toEqual(expected);
    });
  });

  describe('formatEdsTokens', () => {
    const base = {
      neutral: {
        default: {
          '@': 'var(--eds-theme-color-border-neutral-default)',
          hover: 'var(--eds-theme-color-border-neutral-default-hover)',
        },
      },
    };

    it('can strip out any at-symbols from input style-dictionary object', () => {
      // since this function edits in place, clone the values then compare to expected
      const input = {
        ...base,
      };
      const expected = {
        neutral: {
          default: {
            hover: 'var(--eds-theme-color-border-neutral-default-hover)',
          },
        },
        'neutral-default': 'var(--eds-theme-color-border-neutral-default)',
      };

      utils.formatEdsTokens(input);

      expect(input).toEqual(expected);
    });
  });

  describe('isStrictSubset', () => {
    const base = {
      eds: {
        theme: {
          color: {
            test: {
              value: '#000000',
            },
            test2: {
              value: '#00FF00',
            },
          },
        },
      },
    };

    it('allows exact matching themes', () => {
      const theme = {
        ...base,
      };

      expect(utils.isStrictSubset(base, theme)).toBeTruthy();
    });

    it('allows theme to be a subset of base', () => {
      const theme = {
        ...base,
      };
      delete theme.eds.theme.color.test2;

      expect(utils.isStrictSubset(base, theme)).toBeTruthy();
    });

    it('throws when the theme has things not in the base theme file', () => {
      const theme = {
        ...base,
        color: {
          test: {
            value: '#FFOOFF',
          },
        },
      };

      const assertThrow = () => {
        utils.isStrictSubset(base, theme);
      };

      expect(assertThrow).toThrow(ReferenceError);
    });
  });

  describe('getConfig', function () {
    // Silence console output AND hook up for counting in tests
    let origWarn;
    beforeEach(() => {
      origWarn = console.warn;
      console.warn = jest.fn();
    });

    afterEach(() => {
      console.warn = origWarn;
    });

    describe('with no settings read', () => {
      it('throws when no settings are defined', async () => {
        lilconfig.lilconfig.mockImplementation(() => {
          return {
            search: function () {
              // https://www.npmjs.com/package/cosmiconfig#result
              return Promise.resolve(undefined);
            },
          };
        });

        const test = async () => {
          await utils.getConfig();
        };

        // We expect it to reject because it will also throw and throwing rejects
        await expect(test()).rejects.toThrow(ReferenceError);
      });
    });

    describe('with settings read', () => {
      it('converts json key to src key', async () => {
        lilconfig.lilconfig.mockImplementation(() => {
          return {
            search: function () {
              // https://www.npmjs.com/package/cosmiconfig#result
              return Promise.resolve({
                config: {
                  json: 'a/b/c',
                  css: '1/2/3',
                },
              });
            },
          };
        });
        const test = async () => {
          return await utils.getConfig();
        };

        // This ex expected to duplicate the keys currently.
        // In the future, we will deprecate the preservation of the old keys
        await expect(test()).resolves.toEqual({
          css: '1/2/3',
          src: 'a/b/c',
          json: 'a/b/c',
          dest: '1/2/3',
        });

        expect(console.warn).toHaveBeenCalledTimes(2);
      });
    });
  });

  describe('getWritePath', function () {
    const exampleTheme = {
      eds: {
        theme: {
          color: {
            body: {
              background: {
                neutral: {
                  default: {
                    '@': {
                      value: '#FFFFFF',
                    },
                    hover: {
                      value: '#F4F6F8',
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    it('generates a write path for a root-at value', () => {
      expect(
        utils.getWritePath(
          exampleTheme,
          'themes',
          'color/body/background/neutral/default',
        ),
      ).toEqual('eds.theme.color.body.background.neutral.default.@.value');
    });

    it('generates a write path for a non-root-at value', () => {
      expect(
        utils.getWritePath(
          exampleTheme,
          'themes',
          'color/body/background/neutral/default/hover',
        ),
      ).toEqual('eds.theme.color.body.background.neutral.default.hover.value');
    });

    it('generates a null when the path is not in the local theme', () => {
      expect(
        utils.getWritePath(
          exampleTheme,
          'themes',
          'color/body/background/neutral/default/focus',
        ),
      ).toEqual(null);
    });
  });

  describe('getTokenPath', function () {
    it.each([
      ['themes', 'eds.theme.'],
      ['primitives', 'eds.'],
      ['some-unknown', null],
      ['', null],
    ])(
      'parses the collection %s to token prefix "%s"',
      (collection, expected) => {
        expect(utils.getTokenPrefix(collection)).toEqual(expected);
      },
    );
  });

  describe('tokenNameToPath', function () {
    it('properly converts a token name to a lodash-compatible path', function () {
      expect(utils.tokenNameToPath('some/path/to/token')).toEqual(
        'some.path.to.token',
      );
    });
  });

  describe('parseResolvedValue', function () {
    const space500 = {
      r: 0.12941177189350128,
      g: 0.1568627506494522,
      b: 0.4000000059604645,
      a: 1,
    };

    const blueprint300 = {
      r: 0.027450980618596077,
      g: 0.30588236451148987,
      b: 0.9098039269447327,
      a: 1,
    };

    const neutral800 = {
      r: 0.12941177189350128,
      g: 0.15294118225574493,
      b: 0.1764705926179886,
      a: 1,
    };

    const backgroundVeil = {
      r: 0.12941177189350128,
      g: 0.15294118225574493,
      b: 0.1764705926179886,
      a: 0.5,
    };

    it.each`
      figmaColor        | type       | expected
      ${space500}       | ${'COLOR'} | ${'#212866'}
      ${blueprint300}   | ${'COLOR'} | ${'#074EE8'}
      ${neutral800}     | ${'COLOR'} | ${'#21272D'}
      ${backgroundVeil} | ${'COLOR'} | ${'rgba(33, 39, 45, 0.5)'}
    `(
      'will use type $type to convert $figmaColor to $expected',
      ({ figmaColor, type, expected }) => {
        expect(utils.parseResolvedValue(type, figmaColor)).toEqual(expected);
      },
    );

    it('will throw on unrecognized types', () => {
      const test = () => {
        utils.parseResolvedValue('FLOAT', 0.5);
      };
      expect(test).toThrow(TypeError);
    });
  });

  describe('Reader Classes', () => {
    const mockData = {
      status: 200,
      error: false,
      meta: {
        variableCollections: {
          'VariableCollectionId:6181:1797': {
            defaultModeId: '6181:0',
            id: 'VariableCollectionId:6181:1797',
            name: 'Collection 1',
            remote: false,
            modes: [
              {
                modeId: '6181:0',
                name: 'Value',
              },
            ],
            key: '5f66df751f45114c0d64b702b03e9ae820293768',
            hiddenFromPublishing: false,
            variableIds: [
              'VariableID:6195:914',
              'VariableID:6195:915',
              'VariableID:6348:6248',
            ],
          },
          'VariableCollectionId:6348:1793': {
            defaultModeId: '6348:0',
            id: 'VariableCollectionId:6348:1793',
            name: 'Collection 2',
            remote: false,
            modes: [
              {
                modeId: '6348:0',
                name: 'mode 1',
              },
              {
                modeId: '7493:1',
                name: 'mode 2',
              },
            ],
          },
        },
        variables: {
          'VariableID:6348:6248': {
            id: 'VariableID:6348:6248',
            name: 'render/neutral-050',
            remote: false,
            key: '176ccd26264f7e048ae441ac585726a51fa6a819',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': {
                r: 0.9764705896377563,
                g: 0.9529411792755127,
                b: 0.9450980424880981,
                a: 1,
              },
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          'VariableID:6195:915': {
            id: 'VariableID:6195:915',
            name: 'Render/Neutral/Neutral-025',
            remote: false,
            key: 'f03c13f2140f268dbedf27db0ad78660913af483',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': {
                r: 0.9921568632125854,
                g: 0.9764705896377563,
                b: 0.9725490212440491,
                a: 1,
              },
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          'VariableID:6195:914': {
            id: 'VariableID:6195:914',
            name: 'render/neutral/white',
            remote: false,
            key: 'b2ed72ac00bfa71fbe0c0039404b125f7f5193e2',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': {
                r: 1,
                g: 1,
                b: 1,
                a: 1,
              },
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          'VariableID:6359:7717': {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          'VariableID:6370:10670': {
            id: 'VariableID:6370:10670',
            name: 'Border-radius/none',
            remote: false,
            key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'FLOAT',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': 0,
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
        },
      },
    };

    describe('FigmaAPIReader', function () {
      it('pulls defined modes from the retrieved JSON data', () => {
        const reader = new utils.FigmaAPIReader(mockData);
        const modes = reader.getModes('VariableCollectionId:6348:1793');
        expect(modes[0].name).toEqual('mode 1');
        expect(modes[1].name).toEqual('mode 2');
      });

      it('pulls collection data from the retrieved JSON data', () => {
        const reader = new utils.FigmaAPIReader(mockData);
        const testCollections = reader.getVariableCollections();
        expect(testCollections[0].name).toEqual('Collection 1');
        expect(testCollections[1].name).toEqual('Collection 2');
      });

      it('gets variables by a given collection ID', () => {
        const reader = new utils.FigmaAPIReader(mockData);
        expect(
          reader.getVariablesByCollectionId(
            'VariableCollectionId:6348:1793',
          )[0],
        ).toEqual({
          id: 'VariableID:6359:7717',
          name: '-> text/utility/inverse',
          remote: false,
          key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
          variableCollectionId: 'VariableCollectionId:6348:1793',
          resolvedType: 'COLOR',
          description: '',
          hiddenFromPublishing: false,
          valuesByMode: {
            '6348:0': {
              type: 'VARIABLE_ALIAS',
              id: 'VariableID:6195:914',
            },
            '7493:1': {
              type: 'VARIABLE_ALIAS',
              id: 'VariableID:7493:9283',
            },
          },
          scopes: ['TEXT_FILL'],
          codeSyntax: {},
        });

        expect(
          reader.getVariablesByCollectionId('VariableCollectionId:6348:1793'),
        ).toHaveLength(1);
      });

      it('allows retrieval of arbitrary variables in the retrieved JSON data', () => {
        const reader = new utils.FigmaAPIReader(mockData);

        expect(reader.retrieveVariable('VariableID:6359:7717')).toEqual({
          id: 'VariableID:6359:7717',
          name: '-> text/utility/inverse',
          remote: false,
          key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
          variableCollectionId: 'VariableCollectionId:6348:1793',
          resolvedType: 'COLOR',
          description: '',
          hiddenFromPublishing: false,
          valuesByMode: {
            '6348:0': {
              type: 'VARIABLE_ALIAS',
              id: 'VariableID:6195:914',
            },
            '7493:1': {
              type: 'VARIABLE_ALIAS',
              id: 'VariableID:7493:9283',
            },
          },
          scopes: ['TEXT_FILL'],
          codeSyntax: {},
        });

        expect(reader.retrieveVariable('VariableID:6359:7717_FAKE')).toEqual(
          undefined,
        );
      });
    });

    describe('FigmaVariable', function () {
      it('can identify an orphaned variable (deleted in figma but still in use somewhere)', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: true,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: true,
            deletedButReferenced: true,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6181:0',
          () => {},
        );

        expect(variable.isOrphaned()).toBeTruthy();
      });

      it('allows retrieval of token path from a variable', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6181:0',
          () => {},
        );

        expect(variable.getTokenPath()).toEqual(
          'eds.theme.color.text.utility.inverse',
        );
      });

      it('allows deep retrieval of value from a variable, using delegate (resolve tier 1)', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6348:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.getResovledValue()).toEqual({ r: 1, g: 1, b: 1, a: 1 });
      });

      it('allows deep retrieval of value from a variable, using delegate (resolve tier 2)', () => {
        // This is a case where a tier 2+ token is referencing another tier 2 token (not a tier 1 and its subsequent value)
        const mockData = {
          status: 200,
          error: false,
          meta: {
            variableCollections: {
              'VariableCollectionId:6181:1797': {
                defaultModeId: '6181:0',
                id: 'VariableCollectionId:6181:1797',
                name: 'Collection 1',
                remote: false,
                modes: [
                  {
                    modeId: '6181:0',
                    name: 'Value',
                  },
                ],
                key: '5f66df751f45114c0d64b702b03e9ae820293768',
                hiddenFromPublishing: false,
                variableIds: [],
              },
              'VariableCollectionId:6348:1793': {
                defaultModeId: '6348:0',
                id: 'VariableCollectionId:6348:1793',
                name: 'Collection 2',
                remote: false,
                modes: [
                  {
                    modeId: '6348:0',
                    name: 'mode 1',
                  },
                  {
                    modeId: '7493:1',
                    name: 'mode 2',
                  },
                ],
              },
            },
            variables: {
              'VariableID:7359:7717': {
                id: 'VariableID:7359:7717',
                name: '-> text/utility/inverse-disabled',
                remote: false,
                key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
                variableCollectionId: 'VariableCollectionId:6348:1793',
                resolvedType: 'COLOR',
                description: '',
                hiddenFromPublishing: false,
                valuesByMode: {
                  '6348:0': {
                    r: 1,
                    g: 1,
                    b: 1,
                    a: 1,
                  },
                  '7493:1': {
                    r: 1,
                    g: 1,
                    b: 1,
                    a: 1,
                  },
                },
                scopes: ['TEXT_FILL'],
                codeSyntax: {},
              },
              'VariableID:8359:9717': {
                id: 'VariableID:8359:9717',
                name: '-> icon/utility/inverse-disabled',
                remote: false,
                key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
                variableCollectionId: 'VariableCollectionId:6348:1793',
                resolvedType: 'COLOR',
                description: '',
                hiddenFromPublishing: false,
                valuesByMode: {
                  '6348:0': {
                    type: 'VARIABLE_ALIAS',
                    id: 'VariableID:7359:7717',
                  },
                  '7493:1': {
                    type: 'VARIABLE_ALIAS',
                    id: 'VariableID:7493:9283',
                  },
                },
                scopes: ['TEXT_FILL'],
                codeSyntax: {},
              },
            },
          },
        };
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:8359:9717',
            name: '-> icon/utility/inverse-disabled',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7359:7717',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6348:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.valueRef).toEqual(
          'eds.theme.color.text.utility.inverse.disabled',
        );
      });

      it('allows deep retrieval of value refs from a variable, using delegate', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6348:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.valueRef).toEqual('eds.color.neutral.white');
      });

      it('allows retrieval of float value ref from a variable', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6370:10670',
            name: 'Border-radius/none',
            remote: false,
            key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'FLOAT',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6348:0': 0,
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          '6348:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.valueRef).toEqual('0');
      });

      it('handles name/value accessor methods', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6348:0': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:6195:914',
              },
              '7493:1': {
                type: 'VARIABLE_ALIAS',
                id: 'VariableID:7493:9283',
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6348:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.name).toEqual('-> text/utility/inverse');
        expect(variable.value).toEqual('#FFFFFF');
      });

      it('handles name/value accessor methods with a alpha channel', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6359:7717',
            name: '-> text/utility/inverse',
            remote: false,
            key: '9f4864bc73c48fcc5a28e2320bd81e6205d4e6b5',
            variableCollectionId: 'VariableCollectionId:6348:1793',
            resolvedType: 'COLOR',
            description: '',
            hiddenFromPublishing: false,
            valuesByMode: {
              '6181:0': {
                r: 1,
                g: 1,
                b: 1,
                a: 0.5,
              },
            },
            scopes: ['TEXT_FILL'],
            codeSyntax: {},
          },
          '6181:0',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.name).toEqual('-> text/utility/inverse');
        expect(variable.value).toEqual('rgba(255, 255, 255, 0.5)');
      });

      it('handles float values', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6370:10670',
            name: 'border-radius/none',
            remote: false,
            key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'FLOAT',
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': 0,
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          '6181:0',
        );

        expect(variable.value).toEqual('0');
        expect(variable.getTokenPath()).toEqual('eds.theme.border.radius.none');
      });

      it('throws on unparseable variable types', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6370:10670',
            name: 'border-radius/none',
            remote: false,
            key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'FAKE', // no type recognized
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': 0,
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          '6181:0',
        );

        expect(() => {
          variable.value;
        }).toThrow(TypeError);

        expect(() => {
          variable.getTokenPath();
        }).toThrow(TypeError);
      });

      it('throws when trying to retrieve a value reference with unknown type', () => {
        const variable = new utils.FigmaVariable(
          {
            id: 'VariableID:6370:10670',
            name: 'border-radius/none',
            remote: false,
            key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
            variableCollectionId: 'VariableCollectionId:6181:1797',
            resolvedType: 'FAKE', // no type recognized
            description: '',
            hiddenFromPublishing: true,
            valuesByMode: {
              '6181:0': 0,
            },
            scopes: ['ALL_SCOPES'],
            codeSyntax: {},
          },
          '6181:0',
        );

        expect(() => {
          variable.valueRef;
        }).toThrow(TypeError);
      });

      describe('static methods', () => {
        it('can determine if a value is aliased', () => {
          expect(
            utils.FigmaVariable.isAliased(
              {
                id: 'VariableID:6370:10670',
                name: 'border-radius/none',
                remote: false,
                key: '9358566cd8a6bb06f32e7682d2e8326fccf18e05',
                variableCollectionId: 'VariableCollectionId:6181:1797',
                resolvedType: 'FAKE', // no type recognized
                description: '',
                hiddenFromPublishing: true,
                valuesByMode: {
                  '6348:0': {
                    type: 'VARIABLE_ALIAS',
                    id: 'VariableID:6195:914',
                  },
                },
                scopes: ['ALL_SCOPES'],
                codeSyntax: {},
              },
              '6348:0',
            ),
          ).toBeTruthy();
        });
      });
    });
  });
});
