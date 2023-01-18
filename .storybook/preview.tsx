// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/tailwind.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';
import '../src/design-tokens/tier-1-definitions/fonts.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import type { Story } from '@storybook/react';
import React from 'react';

import viewports from './util/viewports';

export const decorators = [
  (Story: Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds: {
    values: [
      {
        name: 'eds-color-neutral-white',
        value: '#ffffff',
      },
      {
        name: 'eds-color-neutral-100',
        value: '#f4f6f8',
      },
      {
        name: 'eds-color-neutral-700',
        value: '#21272D',
      },
    ],
  },
};
