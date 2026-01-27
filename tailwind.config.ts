import type { Config } from 'tailwindcss';
import { eds as edsTokens } from './lib/tokens/json/tailwind-utility-config.json';

//
// Util functions
//

/**
 * Reduce a set of key/value pairs into a collection object of such pairs.
 *
 * e.g., [{x: 1}, {y: 2}, {z: 3}] => { x: 1, y: 2, z: 3 }
 *
 * @param tokenCollection already-collected set of key/value pairs
 * @param token new key/value pair to add to the set
 * @returns object containing tokens to use in the tailwind config
 */
function combineTokens(
  tokenCollection: { [x: string]: string },
  token: { [x: string]: string },
) {
  return Object.assign(tokenCollection, token);
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
  // Select the theme (tier 2) color tokens and map them to be added to the tailwind config
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
  const borderRadii: { [x: string]: string } = tokenConfig.border.radius;
  const borderRadiusTokens = {
    ...Object.keys(borderRadii)
      .map((borderRadius) => {
        return { [borderRadius]: `${borderRadii[borderRadius]}px` };
      })
      .reduce(combineTokens, {}),
  };

  const borderSurfacesRadii: { [x: string]: string } =
    tokenConfig.theme.border.radius.surfaces;
  const borderSurfaceRadiusTokens = {
    ...Object.keys(borderSurfacesRadii)
      .map((borderRadius) => {
        return {
          [`surfaces-${borderRadius}`]: `${borderSurfacesRadii[borderRadius]}px`,
        };
      })
      .reduce(combineTokens, {}),
  };

  const borderObjectsRadii: { [x: string]: string } =
    tokenConfig.theme.border.radius.objects;
  const borderObjectRadiusTokens = {
    ...Object.keys(borderObjectsRadii)
      .map((borderRadius) => {
        return {
          [`objects-${borderRadius}`]: `${borderObjectsRadii[borderRadius]}px`,
        };
      })
      .reduce(combineTokens, {}),
  };

  // special case where there's only one action, and not a t-shirt sized map
  const borderActionsRadii: { [x: string]: string } = {
    actions: `${tokenConfig.theme.border.radius.actions}px`,
  };

  const movementTokens = {
    ...Object.keys(movements)
      .map((movement) => {
        return { [movement]: `${movements[movement]}s` };
      })
      .reduce(combineTokens, {}),
  };

  const spacingTokens = {
    ...Object.keys(spacings)
      .map((spacing) => {
        return { [`spacing-size-${spacing}`]: `${spacings[spacing]}px` };
      })
      .reduce(combineTokens, {}),
  };

  return {
    colors: {
      ...colorTokens,
    },
    extend: {
      backgroundColor: {
        ...backgroundColorTokens, // Tier 2 background color tokens
      },
      borderColor: {
        ...borderColorTokens, // Tier 2 border color tokens
      },
      textColor: {
        ...textColorTokens, // Tier 2 text color tokens
      },
      borderRadius: {
        ...borderRadiusTokens, // Tier 1 border radius tokens
        ...borderSurfaceRadiusTokens, // Tier 2 border radius tokens (surfaces, ohjects, actions)
        ...borderObjectRadiusTokens,
        ...borderActionsRadii,
      },
      spacing: {
        ...spacingTokens, // Tier 1 spacing tokens
      },
      transitionDuration: {
        ...movementTokens, // Tier 1 movement tokens
      },
    },
    fontWeight: {
      ...edsTokens.typography.fontWeight, // Tier 1 font weight tokens
    },
    fontFamily: {
      // See README.md for info on how to set up local / vendor font with EDS
      1: edsTokens.typography.fontFamily[1],
      2: edsTokens.typography.fontFamily[2],
      3: edsTokens.typography.fontFamily[3],
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
