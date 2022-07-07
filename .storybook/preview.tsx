// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';
import '../src/design-tokens/tier-1-definitions/fonts.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

// Import theme
import headStyles from 'THEME/head.scss';

import type { Story } from '@storybook/react';
import React from 'react';

export const decorators = [
  (Story: Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

export const parameters = {
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
};

// Theming logic
let cachedTheme = 'nameoftheme';
try {
  cachedTheme = require('!!raw-loader!../node_modules/.cache/storybook-theme/theme');
} catch (err) {}

const headStyleElement = document.createElement('style');
headStyleElement.innerHTML = headStyles;
document.head.appendChild(headStyleElement);

// Update the storybook toolbar with any custom buttons you want to add
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Brand theme',
    defaultValue: cachedTheme,
    toolbar: {
      icon: 'paintbrush',
      items: ['nameoftheme', 'additionaltheme', 'onemoretheme'],
      showName: false,
    },
  },
};

const channel = addons.getChannel();
channel.addListener(UPDATE_GLOBALS, ({ globals }) => {
  if (globals.theme && fetch) {
    fetch('/set-theme?theme=' + globals.theme);
  }
});
