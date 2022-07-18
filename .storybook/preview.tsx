// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';
import '../src/design-tokens/tier-1-definitions/fonts.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import type { Story } from '@storybook/react';
import React from 'react';

/**
 * From BM theming from here down
 */

let cachedTheme = 'theme-1';
// Update the storybook toolbar with any custom buttons you want to add
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Brand theme',
    defaultValue: cachedTheme,
    toolbar: {
      icon: 'paintbrush',
      items: ['theme-1', 'theme-2'],
      showName: false,
    },
  },
};

// Add in a decorator to render the proper theme properties
const withThemeContainer = (Story: any, context: any) => {
  const css =
    require(`!css-loader!../src/design-tokens/${context.globals.theme}/tokens.css`).default;

  if (!document.getElementById('ds-styles')) {
    const style = document.createElement('style');
    style.id = 'ds-styles';
    document.head.appendChild(style);
  }

  // Add the CSS in to the head
  // @ts-ignore
  document.getElementById('ds-styles').innerHTML = css;

  return Story();
};

export const decorators = [
  // From EDS
  (Story: Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
  // From BM theming
  withThemeContainer,
];

//Parameters for storybook addons
export const parameters = {
  // From EDS
  backgrounds: {
    values: [
      {
        name: 'gray',
        value: '#f3f3f3',
      },
      {
        name: 'dark',
        value: '#21272D', // eds-color-neutral-700
      },
    ],
  },
  // From BM theming
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Import all design-system related files
import '../src/design-tokens/theme-1/head.scss';

// Import all storybook-specific CSS
import './css/styleguide-only.scss';
