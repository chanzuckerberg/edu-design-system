import type { Config } from 'tailwindcss';
import { eds as edsTokens } from './lib/tokens/json/css-variables-nested.json';

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
    fontSize: {
      // provide values for both font-size and line-height
      body: [edsTokens['font-size']['16'], '1.5'],
      h1: [edsTokens['font-size']['40'], '1.2'],
      h2: [edsTokens['font-size']['32'], '1.25'],
      h3: [edsTokens['font-size']['24'], '1.333'],
      h4: [edsTokens['font-size']['18'], '1.333'],
      h5: [edsTokens['font-size']['16'], '1.5'],
      h6: [edsTokens['font-size']['14'], '1.57'],
      h7: [edsTokens['font-size']['12'], '1.666'],
      sm: [edsTokens['font-size']['14'], '1.57'],
      xs: [edsTokens['font-size']['12'], '1.666'],
      caption: [edsTokens['font-size']['12'], '1.666'],
    },
    fontWeight: {
      normal: edsTokens['font-weight'].light,
      medium: edsTokens['font-weight'].medium,
      bold: edsTokens['font-weight'].bold,
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
