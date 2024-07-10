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

function createInitialReleaseConfig(usingLabel: string) {
  return {
    [`intro-${usingLabel}`]: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: `Introduced: ${usingLabel}`,
      tooltip: {
        title: `Introduced in v${usingLabel}`,
        desc: `This component was introduced in EDS Design version ${usingLabel}`,
      },
    },
  };
}

function createCurrentReleaseConfig(usingLabel: string) {
  return {
    [`current-${usingLabel}`]: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: `Current: ${usingLabel}`,
      tooltip: {
        title: `Current version v${usingLabel}`,
        desc: `This component corresponds to EDS Design version ${usingLabel}`,
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
    ...createInitialReleaseConfig('2.0'),
    ...createInitialReleaseConfig('1.3'),
    ...createInitialReleaseConfig('1.2'),
    ...createInitialReleaseConfig('1.1'),
    ...createInitialReleaseConfig('1.0'),
    ...createCurrentReleaseConfig('1.3'),
    ...createCurrentReleaseConfig('2.0'),
    ...createCurrentReleaseConfig('2.1'),
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
