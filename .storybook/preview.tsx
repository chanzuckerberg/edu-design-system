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

import type { Preview, StoryFn } from '@storybook/react';
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

function createComponentVersion(usingLabel: string) {
  return {
    [`api-${usingLabel}`]: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: `Component API Version: ${usingLabel}`,
      tooltip: {
        title: `Code / API v${usingLabel}`,
        desc: `This component's API version is at ${usingLabel}`,
      },
    },
  };
}

function createThemeVersion(usingLabel: string) {
  return {
    [`theme-${usingLabel}`]: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: `Theme Version: ${usingLabel}`,
      tooltip: {
        title: `Current Theme version v${usingLabel}`,
        desc: `This component's theme corresponds to Edu Design System Version is at ${usingLabel}`,
      },
    },
  };
}

export const parameters: Preview['parameters'] = {
  viewport: {
    viewports: storybookViewports,
  },
  docs: {
    theme: Theme,
  },
  backgrounds: {
    values: [
      {
        name: 'background-utility-default-high-emphasis',
        value: '#0F2163',
      },
      {
        name: 'background-utility-inverse-high-emphasis',
        value: '#FFFFFF',
      },
    ],
  },
  badgesConfig: {
    ...createComponentVersion('3.0'),
    ...createComponentVersion('2.0'),
    ...createComponentVersion('1.3'),
    ...createComponentVersion('1.2'),
    ...createComponentVersion('1.1'),
    ...createComponentVersion('1.0'),
    ...createThemeVersion('1.0'),
    ...createThemeVersion('2.0'),
    ...createThemeVersion('2.0.1'),
    ...createThemeVersion('2.1'),
    implementationExample: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: 'Implementation Example',
      tooltip: {
        title: `About Implementation Examples`,
        desc: 'Implementation examples show how you might compose existing EDS components',
      },
    },
  },
};
export const tags = ['autodocs'];
