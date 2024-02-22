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
});
