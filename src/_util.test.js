import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import identity from 'lodash/identity';
// eslint-disable-next-line import-x/no-extraneous-dependencies
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import utils from '../bin/_util';

describe('utils', function () {
  describe('style-dictionary tools', function () {
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

      it('bypasses parsing when object is a primitive', () => {
        expect(utils.minifyDictionaryUsingFormat('#000000')).toEqual('#000000');
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

      it('removes groups left empty after flattening', () => {
        const input = {
          solo: {
            only: {
              '@': 'var(--eds-theme-color-solo)',
            },
          },
        };

        utils.formatEdsTokens(input);

        expect(input).toEqual({
          'solo-only': 'var(--eds-theme-color-solo)',
        });
      });

      it('recurses into nested groups without an at-symbol', () => {
        const input = {
          border: {
            plain: 'var(--eds-theme-color-border-plain)',
            neutral: {
              strong: {
                '@': 'var(--eds-theme-color-border-neutral-strong)',
              },
            },
          },
        };

        utils.formatEdsTokens(input);

        expect(input).toEqual({
          border: {
            plain: 'var(--eds-theme-color-border-plain)',
            'neutral-strong': 'var(--eds-theme-color-border-neutral-strong)',
          },
        });
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

      it('ignores literal values when comparing', () => {
        expect(
          utils.isStrictSubset({ eds: {} }, { eds: { anything: '#FFFFFF' } }),
        ).toBeTruthy();
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
  });

  describe('getConfig', function () {
    let tmpDir;
    beforeEach(() => {
      tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'eds-config-'));
      vi.spyOn(process, 'cwd').mockReturnValue(tmpDir);
    });

    afterEach(() => {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    it('returns the eds config from package.json', async () => {
      const config = { src: 'src/theme.json', dest: 'src/theme-dist' };
      fs.writeFileSync(
        path.join(tmpDir, 'package.json'),
        JSON.stringify({ name: 'consumer', eds: config }),
      );

      await expect(utils.getConfig()).resolves.toEqual(config);
    });

    it('rejects when no config can be found', async () => {
      await expect(utils.getConfig()).rejects.toThrow(ReferenceError);
    });
  });

  describe('Reader Classes', () => {
    it('prevents using the abstract reader directly', () => {
      const AbstractFigmaReader = Object.getPrototypeOf(utils.FigmaAPIReader);
      const reader = new AbstractFigmaReader({});

      expect(() => reader.getModes('id')).toThrow(
        'Cannot Use Abstract class directly',
      );
      expect(() => reader.getVariableCollections()).toThrow(
        'Cannot Use Abstract class directly',
      );
      expect(() => reader.getVariablesByCollectionId('id')).toThrow(
        'Cannot Use Abstract class directly',
      );
    });

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
      describe('string and alias handling', () => {
        const tier1Mode = '1:0';
        const tier2Mode = '2:0';
        const reader = new utils.FigmaAPIReader({
          meta: {
            variableCollections: {},
            variables: {
              'VariableID:1:1': {
                id: 'VariableID:1:1',
                name: 'font-family/body',
                resolvedType: 'STRING',
                valuesByMode: { [tier1Mode]: 'Arial' },
              },
              'VariableID:1:2': {
                id: 'VariableID:1:2',
                name: 'size/2',
                resolvedType: 'FLOAT',
                valuesByMode: { [tier1Mode]: 8 },
              },
              'VariableID:1:3': {
                id: 'VariableID:1:3',
                name: 'color/blue/500',
                resolvedType: 'COLOR',
                valuesByMode: { [tier1Mode]: { r: 0, g: 0.02, b: 1, a: 1 } },
              },
              'VariableID:1:4': {
                id: 'VariableID:1:4',
                name: 'color/red/500',
                resolvedType: 'COLOR',
                valuesByMode: { '3:0': { r: 1, g: 0, b: 0, a: 1 } },
              },
            },
          },
        });
        const createVariable = (name, resolvedType, value) =>
          new utils.FigmaVariable(
            {
              id: `VariableID:${name}`,
              name,
              resolvedType,
              valuesByMode: { [tier2Mode]: value },
            },
            tier1Mode,
            tier2Mode,
            'common',
            reader,
          );

        it('handles literal string variables', () => {
          const variable = createVariable(
            '-> font/body',
            'STRING',
            'Helvetica',
          );

          expect(variable.getTokenPath()).toEqual('eds.theme.font.body');
          expect(variable.isAliased()).toBe(false);
          expect(variable.getResovledName()).toBeUndefined();
          expect(variable.value).toEqual('Helvetica');
          expect(variable.valueRef).toEqual('Helvetica');
        });

        it('references the aliased token for string variables', () => {
          const variable = createVariable('-> font/body', 'STRING', {
            type: 'VARIABLE_ALIAS',
            id: 'VariableID:1:1',
          });

          expect(variable.isAliased()).toBe(true);
          expect(variable.value).toEqual('Arial');
          expect(variable.valueRef).toEqual('eds.font.family.body');
        });

        it('references the aliased token for float variables', () => {
          const variable = createVariable('-> spacing/sm', 'FLOAT', {
            type: 'VARIABLE_ALIAS',
            id: 'VariableID:1:2',
          });

          expect(variable.value).toEqual('8');
          expect(variable.valueRef).toEqual('eds.size.2');
        });

        it('uses the literal value for colors that are not aliased', () => {
          const variable = createVariable('-> background/utility', 'COLOR', {
            r: 0,
            g: 0.02,
            b: 1,
            a: 1,
          });

          // single-digit hex parts are zero-padded
          expect(variable.valueRef).toEqual('#0005FF');
        });

        it('applies opacity to a color that aliases another color variable', () => {
          const variable = createVariable('-> background/overlay', 'COLOR', {
            color: { type: 'VARIABLE_ALIAS', id: 'VariableID:1:3' },
            opacity: 50,
          });

          expect(variable.value).toEqual('rgba(0, 5, 255, 0.50)');
        });

        it('throws when the aliased color has no value in the tier 1 mode', () => {
          const variable = createVariable('-> background/overlay', 'COLOR', {
            color: { type: 'VARIABLE_ALIAS', id: 'VariableID:1:4' },
            opacity: 50,
          });

          expect(() => variable.value).toThrow(ReferenceError);
          expect(() => variable.value).toThrow(
            'unknown lookup value: cannot find VariableID:1:4 in mode 1:0',
          );
        });

        it('throws when the aliased color variable does not exist', () => {
          const variable = createVariable('-> background/overlay', 'COLOR', {
            color: { type: 'VARIABLE_ALIAS', id: 'VariableID:1:999' },
            opacity: 50,
          });

          expect(() => variable.value).toThrow(ReferenceError);
          expect(() => variable.value).toThrow(
            'unknown lookup value: cannot find VariableID:1:999 in mode 1:0',
          );
        });
      });

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
          '6181:0',
          'common',
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
          '6181:0',
          'common',
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
          '6181:0',
          '6348:0',
          'common',
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
          '6181:0',
          '6348:0',
          'common',
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
          '6181:0',
          '6348:0',
          'render',
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
          '6181:0',
          '6348:0',
          'common',
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
          '6181:0',
          '6348:0',
          'common',
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
          '6181:0',
          'common',
          new utils.FigmaAPIReader(mockData),
        );

        expect(variable.name).toEqual('-> text/utility/inverse');
        expect(variable.value).toEqual('rgba(255, 255, 255, 0.50)');
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
          '6181:0',
          'common',
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
          '6181:0',
          'common',
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
          '6181:0',
          'common',
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

  describe('dark mode import', () => {
    // A tier 1 collection with one mode, and a tier 2 collection with light and dark theme modes
    const darkModeData = {
      meta: {
        variableCollections: {
          tier1: {
            id: 'tier1',
            name: 'Tier 1',
            hiddenFromPublishing: false,
            modes: [{ modeId: 't1', name: 'Value' }],
          },
          tier2: {
            id: 'tier2',
            name: 'Tier 2',
            hiddenFromPublishing: false,
            modes: [
              { modeId: 'light', name: 'EDS' },
              { modeId: 'brand', name: 'Brand' },
              { modeId: 'brandDark', name: 'Brand Dark' },
              { modeId: 'dark', name: 'EDS Dark' },
            ],
          },
        },
        variables: {
          white: {
            id: 'white',
            name: 'Render/neutral/white',
            variableCollectionId: 'tier1',
            resolvedType: 'COLOR',
            valuesByMode: { t1: { r: 1, g: 1, b: 1, a: 1 } },
          },
          black: {
            id: 'black',
            name: 'Render/neutral/black',
            variableCollectionId: 'tier1',
            resolvedType: 'COLOR',
            valuesByMode: { t1: { r: 0, g: 0, b: 0, a: 1 } },
          },
          inverse: {
            id: 'inverse',
            name: '-> text/utility/inverse',
            variableCollectionId: 'tier2',
            resolvedType: 'COLOR',
            valuesByMode: {
              light: { type: 'VARIABLE_ALIAS', id: 'white' },
              dark: { type: 'VARIABLE_ALIAS', id: 'black' },
            },
          },
          base: {
            id: 'base',
            name: '-> background/utility/base-1',
            variableCollectionId: 'tier2',
            resolvedType: 'COLOR',
            valuesByMode: {
              light: { r: 1, g: 1, b: 1, a: 1 },
              dark: { r: 0, g: 0, b: 0, a: 1 },
            },
          },
          typography: {
            id: 'typography',
            name: 'typography/font-family/body',
            variableCollectionId: 'tier2',
            resolvedType: 'STRING',
            valuesByMode: { light: 'Inter', dark: 'Inter' },
          },
          orphan: {
            id: 'orphan',
            name: '-> text/utility/orphan',
            variableCollectionId: 'tier2',
            resolvedType: 'COLOR',
            deletedButReferenced: true,
            valuesByMode: {
              light: { type: 'VARIABLE_ALIAS', id: 'white' },
              dark: { type: 'VARIABLE_ALIAS', id: 'black' },
            },
          },
        },
      },
    };

    // mirrors core-dark-tokens.json, where tier 2 tokens live under eds.dark.theme
    const getLocalDarkTheme = () => ({
      eds: {
        color: {
          neutral: {
            white: { value: '#FFFFFF' },
            black: { value: '#000000' },
          },
        },
        dark: {
          theme: {
            color: {
              text: {
                utility: { inverse: { value: '{eds.color.neutral.white}' } },
              },
              background: {
                utility: { base: { 1: { value: '#FFFFFF' } } },
              },
            },
          },
        },
      },
    });

    // mirrors app-theme-dark.json (from theme-base-dark.json), which only has the dark theme tokens
    const getAppDarkTheme = () => ({
      eds: {
        dark: {
          theme: {
            color: {
              text: { utility: { inverse: { value: '#FFFFFF' } } },
              background: {
                utility: { base: { 1: { value: '#FFFFFF' } } },
              },
            },
          },
        },
      },
    });

    const getLogger = () => ({
      warn: vi.fn(),
      fail: vi.fn(),
      succeed: vi.fn(),
      text: '',
    });

    const applyDark = (options) =>
      utils.applyFigmaVariablesToTheme({
        figmaApiReader: new utils.FigmaAPIReader(darkModeData),
        collectionId: 'tier2',
        tier1ModeId: 't1',
        tier2ModeId: 'dark',
        tier1CollectionName: 'Render',
        themePath: utils.FigmaVariable.DARK_THEME_PATH,
        ...options,
      });

    describe('FigmaVariable', () => {
      it('defaults the token path to the theme', () => {
        const variable = new utils.FigmaVariable(
          darkModeData.meta.variables.inverse,
          't1',
          'light',
          'Render',
          new utils.FigmaAPIReader(darkModeData),
        );

        expect(variable.getTokenPath()).toEqual(
          'eds.theme.color.text.utility.inverse',
        );
      });

      it('uses the dark theme path for token paths', () => {
        const reader = new utils.FigmaAPIReader(darkModeData);
        const color = new utils.FigmaVariable(
          darkModeData.meta.variables.base,
          't1',
          'dark',
          'Render',
          reader,
          utils.FigmaVariable.DARK_THEME_PATH,
        );
        const string = new utils.FigmaVariable(
          darkModeData.meta.variables.typography,
          't1',
          'dark',
          'Render',
          reader,
          utils.FigmaVariable.DARK_THEME_PATH,
        );

        expect(color.getTokenPath()).toEqual(
          'eds.dark.theme.color.background.utility.base.1',
        );
        expect(string.getTokenPath()).toEqual(
          'eds.dark.theme.typography.font.family.body',
        );
      });

      it('resolves values and refs using the dark mode', () => {
        const variable = new utils.FigmaVariable(
          darkModeData.meta.variables.inverse,
          't1',
          'dark',
          'Render',
          new utils.FigmaAPIReader(darkModeData),
          utils.FigmaVariable.DARK_THEME_PATH,
        );

        expect(variable.value).toEqual('#000000');
        expect(variable.valueRef).toEqual('eds.color.neutral.black');
      });

      it('uses the dark theme path for refs to tier 2 tokens', () => {
        const reader = new utils.FigmaAPIReader(darkModeData);
        // alias a tier 2 token that holds a literal value
        const variable = new utils.FigmaVariable(
          {
            ...darkModeData.meta.variables.inverse,
            valuesByMode: { dark: { type: 'VARIABLE_ALIAS', id: 'base' } },
          },
          't1',
          'dark',
          'Render',
          reader,
          utils.FigmaVariable.DARK_THEME_PATH,
        );

        expect(variable.valueRef).toEqual(
          'eds.dark.theme.color.background.utility.base.1',
        );
      });
    });

    describe('findDarkMode', () => {
      const modes = darkModeData.meta.variableCollections.tier2.modes;

      it('prefers the dark mode matching the theme name', () => {
        expect(utils.findDarkMode(modes, 'brand')).toEqual({
          modeId: 'brandDark',
          name: 'Brand Dark',
        });
        expect(utils.findDarkMode(modes, 'light')).toEqual({
          modeId: 'dark',
          name: 'EDS Dark',
        });
      });

      it('falls back to any mode with dark in the name', () => {
        expect(
          utils.findDarkMode(
            [
              { modeId: 'a', name: 'Theme A' },
              { modeId: 'b', name: 'dark' },
            ],
            'a',
          ),
        ).toEqual({ modeId: 'b', name: 'dark' });
      });

      it('ignores "light" when matching theme names', () => {
        expect(
          utils.findDarkMode(
            [
              { modeId: 'x', name: 'Other Dark' },
              { modeId: 'a', name: 'Brand Light' },
              { modeId: 'b', name: 'Brand Dark' },
            ],
            'a',
          ),
        ).toEqual({ modeId: 'b', name: 'Brand Dark' });
      });

      it('does not suggest the selected theme mode', () => {
        expect(
          utils.findDarkMode([{ modeId: 'a', name: 'Dark' }], 'a'),
        ).toBeUndefined();
      });

      it('returns undefined when there is no dark mode', () => {
        expect(
          utils.findDarkMode(
            [
              { modeId: 'a', name: 'Theme A' },
              { modeId: 'b', name: 'Theme B' },
            ],
            'a',
          ),
        ).toBeUndefined();
      });
    });

    describe('applyFigmaVariablesToTheme', () => {
      it('writes token references to core-dark-tokens.json in local mode', () => {
        const theme = getLocalDarkTheme();
        const stats = applyDark({ theme, isLocal: true, logger: getLogger() });

        expect(theme.eds.dark.theme.color.text.utility.inverse.value).toEqual(
          '{eds.color.neutral.black}',
        );
        expect(
          theme.eds.dark.theme.color.background.utility.base[1].value,
        ).toEqual('#000000');
        expect(stats.updated).toHaveLength(2);
      });

      it('writes resolved values to app-theme-dark.json in non-local mode', () => {
        const theme = getAppDarkTheme();
        const stats = applyDark({ theme, logger: getLogger() });

        expect(theme.eds.dark.theme.color.text.utility.inverse.value).toEqual(
          '#000000',
        );
        expect(
          theme.eds.dark.theme.color.background.utility.base[1].value,
        ).toEqual('#000000');
        expect(stats.updated).toHaveLength(2);
      });

      it('leaves light theme tokens alone when writing dark values', () => {
        const theme = {
          eds: {
            ...getAppDarkTheme().eds,
            theme: {
              color: {
                text: { utility: { inverse: { value: '#FFFFFF' } } },
              },
            },
          },
        };
        applyDark({ theme, logger: getLogger() });

        expect(theme.eds.theme.color.text.utility.inverse.value).toEqual(
          '#FFFFFF',
        );
        expect(theme.eds.dark.theme.color.text.utility.inverse.value).toEqual(
          '#000000',
        );
      });

      it('does not write in dry-run mode', () => {
        const theme = getLocalDarkTheme();
        const logger = getLogger();
        const stats = applyDark({
          theme,
          isLocal: true,
          canWrite: false,
          logger,
        });

        expect(theme).toEqual(getLocalDarkTheme());
        expect(stats.updated).toHaveLength(2);
        expect(logger.succeed).toHaveBeenCalledWith(
          'Write: eds.color.neutral.black to eds.dark.theme.color.text.utility.inverse.value',
        );
      });

      it('skips typography and orphaned variables', () => {
        const logger = getLogger();
        const stats = applyDark({ theme: getAppDarkTheme(), logger });

        expect(stats.total).toHaveLength(4);
        expect(stats.skipped.map((variable) => variable.name)).toEqual([
          '-> text/utility/orphan',
        ]);
        expect(logger.warn).toHaveBeenCalledWith(
          expect.stringContaining('orphaned'),
        );
      });

      it('errors when the token is missing from the dark theme file', () => {
        const theme = getAppDarkTheme();
        delete theme.eds.dark.theme.color.background;
        const logger = getLogger();
        const stats = applyDark({ theme, logger });

        expect(stats.errored.map((variable) => variable.name)).toEqual([
          '-> background/utility/base-1',
        ]);
        expect(logger.fail).toHaveBeenCalledWith(
          expect.stringContaining('Name format violation'),
        );
      });

      it('errors when a local reference is missing from the dark theme file', () => {
        const theme = getLocalDarkTheme();
        delete theme.eds.color.neutral.black;
        const logger = getLogger();
        const stats = applyDark({ theme, isLocal: true, logger });

        expect(stats.errored.map((variable) => variable.name)).toEqual([
          '-> text/utility/inverse',
        ]);
        expect(theme.eds.dark.theme.color.text.utility.inverse.value).toEqual(
          '{eds.color.neutral.white}',
        );
      });

      describe('edge cases', () => {
        // a reader with the tier 1 variables, plus only the given tier 2 variables
        const readerWith = (variables) => {
          const { white, black } = darkModeData.meta.variables;
          return new utils.FigmaAPIReader({
            meta: {
              ...darkModeData.meta,
              variables: { white, black, ...variables },
            },
          });
        };

        const unknownType = {
          id: 'unknown',
          name: '-> text/utility/unknown',
          variableCollectionId: 'tier2',
          resolvedType: 'BOOLEAN',
          valuesByMode: { dark: true },
        };

        beforeEach(() => {
          vi.spyOn(console, 'warn').mockImplementation(() => {});
          vi.spyOn(console, 'error').mockImplementation(() => {});
        });

        afterEach(() => {
          vi.restoreAllMocks();
        });

        it('writes to root tokens that use an at-symbol', () => {
          const theme = getAppDarkTheme();
          theme.eds.dark.theme.color.text.utility.inverse = {
            '@': { value: '#FFFFFF' },
            hover: { value: '#EEEEEE' },
          };
          applyDark({ theme, logger: getLogger() });

          expect(theme.eds.dark.theme.color.text.utility.inverse).toEqual({
            '@': { value: '#000000' },
            hover: { value: '#EEEEEE' },
          });
        });

        it('skips variables without a token path', () => {
          const logger = getLogger();
          const stats = applyDark({
            figmaApiReader: readerWith({ unknownType }),
            theme: getAppDarkTheme(),
            logger,
          });

          expect(stats.skipped.map((variable) => variable.name)).toEqual([
            '-> text/utility/unknown',
          ]);
          expect(logger.warn).toHaveBeenCalledWith(
            expect.stringContaining('no write path'),
          );
          expect(logger.fail).not.toHaveBeenCalled();
          expect(console.warn).not.toHaveBeenCalled();
        });

        it('logs details for variables without a token path in verbose mode', () => {
          const logger = getLogger();
          applyDark({
            figmaApiReader: readerWith({ unknownType }),
            theme: getAppDarkTheme(),
            isVerbose: true,
            logger,
          });

          expect(logger.fail).toHaveBeenCalledWith(
            expect.stringContaining('unknown resolved type'),
          );
          expect(console.error).toHaveBeenCalled();
          expect(console.warn).toHaveBeenCalled();
        });

        it('logs details for orphaned variables in verbose mode', () => {
          const { orphan } = darkModeData.meta.variables;
          applyDark({
            figmaApiReader: readerWith({ orphan }),
            theme: getAppDarkTheme(),
            isVerbose: true,
            logger: getLogger(),
          });

          expect(console.warn).toHaveBeenCalledWith(
            'Variable details:',
            expect.objectContaining({ name: '-> text/utility/orphan' }),
          );
        });

        it('logs each resolved value written in verbose mode', () => {
          const logger = getLogger();
          applyDark({ theme: getAppDarkTheme(), isVerbose: true, logger });

          expect(logger.succeed).toHaveBeenCalledWith(
            'Write: #000000 to eds.dark.theme.color.text.utility.inverse.value',
          );
        });

        it('logs details for errored variables in verbose mode', () => {
          const theme = getAppDarkTheme();
          delete theme.eds.dark.theme.color.background;
          applyDark({ theme, isVerbose: true, logger: getLogger() });

          expect(console.error).toHaveBeenCalledWith(
            'Variable details:',
            expect.objectContaining({ name: '-> background/utility/base-1' }),
          );
        });
      });
    });
  });
});
