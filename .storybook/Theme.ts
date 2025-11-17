import { create } from 'storybook/theming';
import * as tokens from '../src/tokens-dist/ts/colors';

// Docs: https://storybook.js.org/docs/configure/user-interface/theming
export default create({
  base: 'light',
  brandTitle: 'Education Design System',
  brandUrl: 'https://github.com/chanzuckerberg/edu-design-system',
  brandTarget: '_blank',

  // UI Fonts
  fontBase: 'Arial, sans-serif',
  fontCode: '"Consolas", monospace',

  // Primary scale colors
  colorPrimary: tokens.EdsThemeColorTextUtilityDefaultPrimary,
  colorSecondary: tokens.EdsThemeColorTextUtilityDefaultSecondary,

  // App Chrome
  appBg: tokens.EdsThemeColorBodyBackground,
  appContentBg: tokens.EdsThemeColorBodyBackground,
  appPreviewBg: tokens.EdsThemeColorBodyBackground,
  appBorderColor: tokens.EdsThemeColorBorderUtilityDefaultLowEmphasis,
  appBorderRadius: 0,

  // Text Colors
  textColor: tokens.EdsThemeColorTextUtilityDefaultPrimary,
  textInverseColor: tokens.EdsThemeColorTextUtilityInverse,

  // Toolbar default and active colors
  barTextColor: tokens.EdsColorWhite,
  barSelectedColor: tokens.EdsColorWhite,
  barBg: tokens.EdsThemeColorBackgroundUtilityDefaultMediumEmphasis,

  // Form Colors
  buttonBg: tokens.EdsColorWhite,
  buttonBorder: tokens.EdsThemeColorBorderUtilityDefaultMediumEmphasis,
  inputBg: tokens.EdsColorWhite,
  inputBorder: tokens.EdsThemeColorBorderUtilityDefaultMediumEmphasis,
  inputTextColor: tokens.EdsThemeColorTextUtilityDefaultPrimary,
  inputBorderRadius: 2,
});
