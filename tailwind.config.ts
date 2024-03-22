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
    screens: {
      xs: '375px',
      sm: '560px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1400px',
    },
  },
} satisfies Config;
