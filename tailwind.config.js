const variableTokens = require('./lib/tokens/json/css-variables-nested.json');
const staticTokens = require('./lib/tokens/json/variables-nested.json');

module.exports = {
  /**
   * The main value in TW utility classes is for Storybook stories & recipes.
   * We avoid using them in component styles to reduce chance of conflict with other libraries.
   * Please configure downstream Tailwind config purge to include app files if necessary.
   */
  content: [
    './src/components/**/*.stories.{ts,tsx}',
    './src/components/**/*Example.tsx',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    /**
     * Disable Tailwind's preflight (CSS reset) styles.
     * We're only using Tailwind for stories/recipes, and some of those
     * (esp. documentation pages) depend on browser default styles.
     *
     * Remove this setting if we are turning on Tailwind for component styles,
     * so we will better match consuming apps.
     */
    preflight: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      ...variableTokens.eds.color,
    },
    fontSize: {
      // provide values for both font-size and line-height
      // sync with src/design-tokens/tier-1-definitions/typography-presets.css
      body: [staticTokens.eds['font-size']['16'], '1.5'],
      h1: [staticTokens.eds['font-size']['40'], '1.2'],
      h2: [staticTokens.eds['font-size']['32'], '1.25'],
      h3: [staticTokens.eds['font-size']['24'], '1.333'],
      h4: [staticTokens.eds['font-size']['18'], '1.333'],
      h5: [staticTokens.eds['font-size']['16'], '1.5'],
      h6: [staticTokens.eds['font-size']['14'], '1.57'],
      h7: [staticTokens.eds['font-size']['12'], '1.666'],
      sm: [staticTokens.eds['font-size']['14'], '1.57'],
      xs: [staticTokens.eds['font-size']['12'], '1.666'],
      caption: [staticTokens.eds['font-size']['12'], '1.666'],
    },
    fontWeight: {
      normal: staticTokens.eds['font-weight'].light,
      medium: staticTokens.eds['font-weight'].medium,
      bold: staticTokens.eds['font-weight'].bold,
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
};
