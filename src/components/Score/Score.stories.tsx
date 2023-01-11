import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Score } from './Score';

export default {
  title: 'Components/Score',
  component: Score,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Score>;

export const Success: StoryObj<Args> = {
  args: {
    text: '91 / 100',
    variant: 'success',
  },
};

export const Error: StoryObj<Args> = {
  args: {
    text: '6 / 10',
    variant: 'error',
  },
};

export const Table: StoryObj<Args> = {
  args: {
    text: '6 / 10',
    variant: 'table',
  },
  decorators: [
    (Story) => (
      <div>
        <p>Score has transparent border for use in Table component</p>
        <Story />
      </div>
    ),
  ],
};
