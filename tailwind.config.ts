import type { Config } from 'tailwindcss';
import { eds as edsTokens } from './lib/tokens/json/tailwind-utility-config.json';

const {
  background: backgroundColorTokens,
  border: borderColorTokens,
  text: textColorTokens,
  ...colorTokens
} = edsTokens.theme.color;

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
  ],
  theme: {
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
        // We pull the spacing tokens and format them such that names are like 'size-${name} = ${value}px'
        ...Object.keys(edsTokens.size)
          .map((sizeKey) => {
            return { [`size-${sizeKey}`]: `${edsTokens.size[sizeKey]}px` };
          })
          .reduce((accumulate, current) => {
            const entry = Object.entries(current)[0];
            accumulate[entry[0]] = entry[1];
            return accumulate;
          }, {}),
      },
    },
    fontWeight: {
      normal: edsTokens['font-weight'].light,
      medium: edsTokens['font-weight'].medium,
      bold: edsTokens['font-weight'].bold,
    },
    fontFamily: {
      // provide values for the configured font family tokens
      // Useful when your app imports '@chanzuckerberg/eds/fonts.css' or
      // if you have custom token values for primary and secondary fonts
      primary: edsTokens['font-family'].primary,
      secondary: edsTokens['font-family'].secondary,
    },
    // sync with src/design-tokens/tier-1-definitions/breakpoints.js
    // Docs: https://tailwindcss.com/docs/responsive-design#customizing-your-theme
    screens: {
      xs: '0px', // TODO-AH: reconcile the difference in the grid to be mobile first
      sm: '600px',
      md: '768px',
      lg: '1040px',
      xl: '1440px',
    },
  },
} satisfies Config;
