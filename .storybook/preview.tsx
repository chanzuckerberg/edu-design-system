// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/tailwind.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';
// TODO: change how this works so that local fonts can be imported and preloaded locally
import '../src/design-tokens/tier-1-definitions/fonts.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import type { Preview, StoryFn } from '@storybook/react-webpack5';
import React from 'react';

import Theme from './Theme';
import { storybookViewports } from '../src/util/viewports';

export const decorators = [
  (Story: StoryFn) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

export const parameters: Preview['parameters'] = {
  viewport: {
    options: storybookViewports,
  },
  docs: {
    theme: Theme,
  },
  backgrounds: {
    options: {
      'background-utility-default-high-emphasis': {
        name: 'background-utility-default-high-emphasis',
        value: '#0F2163',
      },

      'background-utility-inverse-high-emphasis': {
        name: 'background-utility-inverse-high-emphasis',
        value: '#FFFFFF',
      },
    },
  },
};

export const tags = ['autodocs'];
