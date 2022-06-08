import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { Label } from './Label';

export default {
  title: 'Atoms/Forms/Label',
  component: Label,
  parameters: {
    badges: [BADGE.BETA],
  },
};

type Args = React.ComponentProps<typeof Label>;

export const Default: StoryObj<Args> = {
  args: {
    text: 'Label',
    required: true,
  },
};

export const Optional: StoryObj<Args> = {
  args: {
    text: 'Label',
    required: false,
  },
};

export const Inverted: StoryObj<Args> = {
  args: {
    inverted: true,
    text: 'Label',
    required: true,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '1rem', background: '#000' }}>
        <Story />
      </div>
    ),
  ],
};
