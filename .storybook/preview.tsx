// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/tailwind.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import type { Preview, StoryFn } from '@storybook/react-webpack5';
import React from 'react';

import Theme from './Theme';
import * as tokens from '../src/tokens-dist/ts/colors';
import { storybookViewports } from '../src/util/viewports';

export const decorators = [
  (Story: StoryFn) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

export const parameters: Preview['parameters'] = {
  a11y: {
    test: 'error',
  },
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
        value: tokens.EdsThemeColorBackgroundUtilityDefaultHighEmphasis,
      },

      'background-utility-inverse-high-emphasis': {
        name: 'background-utility-inverse-high-emphasis',
        value: tokens.EdsThemeColorBackgroundUtilityInverseHighEmphasis,
      },
    },
  },
};

export const tags = ['autodocs'];
