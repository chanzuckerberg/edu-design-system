import { describe, expect, it } from 'vitest';
import { tokens } from './tokens';
import * as colors from './tokens-dist/ts/colors';
import * as darkColors from './tokens-dist/ts/colors-dark';

describe('tokens', () => {
  it('exports the color tokens', () => {
    expect(tokens.colors).toBe(colors);
  });

  it('exports the dark color tokens', () => {
    expect(tokens.darkColors).toBe(darkColors);
  });
});
