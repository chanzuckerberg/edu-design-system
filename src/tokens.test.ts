import { describe, expect, it } from 'vitest';
import { tokens } from './tokens';
import * as colors from './tokens-dist/ts/colors';

describe('tokens', () => {
  it('exports the color tokens', () => {
    expect(tokens.colors).toBe(colors);
  });
});
