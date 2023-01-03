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
        name: 'white',
        value: '#ffffff',
      },
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
