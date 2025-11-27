// Import base-level styles
import '../src/design-tokens/css/base/reset.css';
import '../src/design-tokens/css/base/tailwind.css';
import '../src/design-tokens/css/base/body.css';
import '../src/design-tokens/css/base/media.css';

// Import theme tokens
import '../src/tokens-dist/css/variables.css';
import '../src/tokens-dist/css/variables-dark.css';

// Import storybook-specific CSS
import './css/styleguide-only.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type {
  Preview,
  StoryFn,
  ReactRenderer,
} from '@storybook/react-webpack5';
import React from 'react';

import Theme from './Theme';
import * as tokens from '../src/tokens-dist/ts/colors';
import { storybookViewports } from '../src/util/viewports';

// TODO: where is this imported?
export const decorators = [
  (Story: StoryFn) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

// TODO: where is this imported?
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
  // TODO-AH: remove this in favor of using a mode-compliant token for all backgrounds
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

// TODO: where is this imported?
export const tags = ['autodocs'];

const preview: Preview = {
  decorators: [
    (Story: StoryFn) => (
      <div dir="ltr">
        <Story />
      </div>
    ),
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: '',
      attributeName: 'data-theme',
    }),
  ],
  parameters,
  tags,
};

// eslint-disable-next-line @chanzuckerberg/stories/no-components-without-story
export default preview;
