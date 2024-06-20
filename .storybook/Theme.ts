import { create } from '@storybook/theming/create';

// Docs: https://storybook.js.org/docs/7.6/configure/theming
// Keys from https://github.com/storybookjs/storybook/blob/next/code/lib/theming/src/themes/light.ts
export default create({
  base: 'light',
  brandTitle: 'Education Design System',
  brandUrl: 'https://github.com/chanzuckerberg/edu-design-system',
  // brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_blank',

  // UI Fonts
  fontBase: '"Graphik", sans-serif',
  fontCode: '"Consolas", monospace',

  // Primary scale colors
  // colorPrimary: '#254EAC', // TODO not sure where this applies : eds-color-blue-650
  colorSecondary: '#6C6967', // Selection and other colors : color-neutral-550

  // App Chrome
  appBg: '#FDF9F8', // Sidebar : color-neutral-025
  appContentBg: '#FFFFFF', // Main documentation container : eds-color-white
  appPreviewBg: '#FFFFFF', // Story Preview container : eds-color-white
  appBorderColor: '#EEE7E4', // neutral-100
  appBorderRadius: 0, //

  // Text Colors
  textColor: '#212121', // NOTE: zeroheight's default color
  textInverseColor: '#FFFFFF', // text-utility-inverse

  // Toolbar default and active colors
  barTextColor: '#FFFFFF', // eds-color-white
  barSelectedColor: '#FFFFFF', // eds-color-white
  barBg: '#0F2163', // Content panel bar : color-blue-850

  // Form Colors
  buttonBg: '#FFFFFF', // eds-color-white
  buttonBorder: '#0F2163', // color-background-utility-interactive-high-emphasis
  inputBg: '#FFFFFF',
  inputBorder: '#6C6967', // color-border-utility-default-medium-emphasis
  inputTextColor: '#0F2163', // color-text-utility-default-primary
  inputBorderRadius: 2, // border-radius-sm
});
