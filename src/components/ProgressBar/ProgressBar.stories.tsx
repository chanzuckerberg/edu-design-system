import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/ProgressBar',
  component: ProgressBar,
  args: {
    label: 'Lorem ipsum',
    max: 100,
    segmentCount: 2,
    segmentValue: 10,
  },
  parameters: {
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'white', padding: '0.5rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProgressBar>;

export const Default: StoryObj<Args> = {};
