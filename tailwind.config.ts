import type { Config } from 'tailwindcss';
import { eds as edsTokens } from './lib/tokens/json/tailwind-utility-config.json';

/**
 * Convert a series of objects with one key-value pair into a combined object
 *
 * @param accumulate object each key/value pair is being written to
 * @param current current entry that is being put into the object
 * @returns object-ized version of the sequence of key value pairs
 */
function objArrayToObject(accumulate, current) {
  const entry = Object.entries(current)[0];
  accumulate[entry[0]] = entry[1];
  return accumulate;
}

/**
 * Convert the token config values into a tailwind 3.x compatible format
 *
 * @param tokenConfig EDS-compatible JSON config, mapping the structure of the known tokens
 * @returns Tailwind-compatible mapping of the keys and values to the right part of the tailwind config structure
 */
export function applyTailwindConfig(
  tokenConfig: typeof edsTokens,
): Config['theme'] {
  const {
    background: backgroundColorTokens,
    border: borderColorTokens,
    text: textColorTokens,
    ...colorTokens
  } = tokenConfig.theme.color;

  const movements: { [x: string]: string } = tokenConfig.anim.move;
  const spacings: { [x: string]: string } = tokenConfig.spacing.size;

  /**
   * Take each set of unitless key/value pairs, and convert them so they become unit-ized equivalents.
   *
   * Adjust two degrees of freedom:
   * - resulting key name
   * - unit to add to each value
   *
   * To modify each one using map/reduce, convert into an array, modify, then convert back into an object.
   *
   * Tailwind needs units on these so that the right CSS gets applied.
   */
  const movementTokens = {
    ...Object.keys(movements)
      .map((movement) => {
        return { [movement]: `${movements[movement]}s` };
      })
      .reduce(objArrayToObject, {}),
  };

  const spacingTokens = {
    ...Object.keys(spacings)
      .map((spacing) => {
        return { [`spacing-size-${spacing}`]: `${spacings[spacing]}px` };
      })
      .reduce(objArrayToObject, {}),
  };

  return {
    colors: {
      ...colorTokens,
    },
    extend: {
      backgroundColor: {
        ...backgroundColorTokens,
      },
      borderColor: {
        ...borderColorTokens,
      },
      textColor: {
        ...textColorTokens,
      },
      spacing: {
        ...spacingTokens,
      },
      transitionDuration: {
        ...movementTokens,
      },
    },
    fontWeight: {
      ...edsTokens.typography.fontWeight,
    },
    fontFamily: {
      // provide values for the configured font family tokens
      // Useful when your app imports '@chanzuckerberg/eds/fonts.css' or
      // if you have custom token values for primary and secondary fonts
      1: edsTokens.typography.fontFamily[1],
      2: edsTokens.typography.fontFamily[2],
    },
    // sync with src/design-tokens/tier-1-definitions/breakpoints.js
    // Docs: https://tailwindcss.com/docs/responsive-design#customizing-your-theme
    screens: {
      xs: '0px',
      sm: '600px',
      md: '768px',
      lg: '1040px',
      xl: '1440px',
    },
  };
}

export default {
  /**
   * The main value in TW utility classes is for Storybook stories, etc..
   * We avoid using them in component styles to reduce chance of conflict with other libraries.
   * Please configure downstream Tailwind config purge to include app files if necessary.
   */
  content: [
    './src/components/**/*.stories.{ts,tsx}',
    './src/components/**/*Example.tsx',
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/components/Table/StackedCardsToTable.tsx',
  ],
  theme: { ...applyTailwindConfig(edsTokens) },
} satisfies Config;
