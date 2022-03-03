// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/design-tokens/tokens.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import React from 'react';

export const decorators = [
  (Story) => (
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
