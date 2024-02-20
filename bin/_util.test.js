const utils = require('./_util');

describe('utils', function () {
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
