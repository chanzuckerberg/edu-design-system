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

import { storybookViewports } from '../src/util/viewports';

export const decorators = [
  (Story: Story) => (
    <div dir="ltr">
      <Story />
    </div>
  ),
];

function createPaperReleaseConfig(usingLabel: string) {
  return {
    [usingLabel]: {
      styles: {
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        color: '#000000',
      },
      title: `${usingLabel}+`,
      tooltip: {
        title: `Introduced in /paper ${usingLabel}`,
        desc: `This component was introduced in /paper ${usingLabel}`,
      },
    },
  };
}

export const parameters = {
  viewport: {
    viewports: storybookViewports,
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
  badgesConfig: {
    ...createPaperReleaseConfig('1.3'),
    ...createPaperReleaseConfig('1.2'),
    ...createPaperReleaseConfig('1.1'),
    ...createPaperReleaseConfig('1.0'),
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
