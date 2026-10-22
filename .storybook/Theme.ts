import { create } from 'storybook/theming';
import * as tokens from '../src/tokens-dist/ts/colors';
import * as darkTokens from '../src/tokens-dist/ts/colors-dark';

/**
 * Storybook theme values have to be literal colors: Storybook runs color math (e.g., `opacify`)
 * on some of them, which throws on `var()` or `light-dark()`. So there is one theme per scheme,
 * built from the generated token values, and `DocsContainer` picks between them.
 */
type ThemeTokens = {
  textPrimary: string;
  textSecondary: string;
  textInverse: string;
  backgroundBase: string;
  barBackground: string;
  barText: string;
  borderLowEmphasis: string;
  borderMediumEmphasis: string;
};

// Docs: https://storybook.js.org/docs/configure/user-interface/theming
function createEdsTheme(base: 'light' | 'dark', t: ThemeTokens) {
  return create({
    base,
    brandTitle: 'Education Design System',
    brandUrl: 'https://github.com/chanzuckerberg/edu-design-system',
    brandTarget: '_blank',

    // UI Fonts
    fontBase: 'Arial, sans-serif',
    fontCode: '"Consolas", monospace',

    // Primary scale colors
    colorPrimary: t.textPrimary,
    colorSecondary: t.textSecondary,

    // App Chrome
    appBg: t.backgroundBase,
    appContentBg: t.backgroundBase,
    appPreviewBg: t.backgroundBase,
    appBorderColor: t.borderLowEmphasis,
    appBorderRadius: 0,

    // Text Colors
    textColor: t.textPrimary,
    textInverseColor: t.textInverse,

    // Toolbar default and active colors
    barTextColor: t.barText,
    barSelectedColor: t.barText,
    barBg: t.barBackground,

    // Form Colors
    buttonBg: t.backgroundBase,
    buttonBorder: t.borderMediumEmphasis,
    inputBg: t.backgroundBase,
    inputBorder: t.borderMediumEmphasis,
    inputTextColor: t.textPrimary,
    inputBorderRadius: 2,
  });
}

export const lightTheme = createEdsTheme('light', {
  textPrimary: tokens.EdsThemeColorTextUtilityDefaultPrimary,
  textSecondary: tokens.EdsThemeColorTextUtilityDefaultSecondary,
  textInverse: tokens.EdsThemeColorTextUtilityInverse,
  backgroundBase: tokens.EdsThemeColorBackgroundUtilityBase1,
  barBackground: tokens.EdsThemeColorBackgroundUtilityDefaultMediumEmphasis,
  barText: tokens.EdsThemeColorTextUtilityInverse,
  borderLowEmphasis: tokens.EdsThemeColorBorderUtilityDefaultLowEmphasis,
  borderMediumEmphasis: tokens.EdsThemeColorBorderUtilityDefaultMediumEmphasis,
});

export const darkTheme = createEdsTheme('dark', {
  textPrimary: darkTokens.EdsDarkThemeColorTextUtilityDefaultPrimary,
  textSecondary: darkTokens.EdsDarkThemeColorTextUtilityDefaultSecondary,
  textInverse: darkTokens.EdsDarkThemeColorTextUtilityInverse,
  backgroundBase: darkTokens.EdsDarkThemeColorBackgroundUtilityBase1,
  // Medium emphasis turns light in dark mode, so the toolbar uses low emphasis to stay dark
  barBackground:
    darkTokens.EdsDarkThemeColorBackgroundUtilityDefaultLowEmphasis,
  barText: darkTokens.EdsDarkThemeColorTextUtilityDefaultPrimary,
  borderLowEmphasis:
    darkTokens.EdsDarkThemeColorBorderUtilityDefaultLowEmphasis,
  borderMediumEmphasis:
    darkTokens.EdsDarkThemeColorBorderUtilityDefaultMediumEmphasis,
});
