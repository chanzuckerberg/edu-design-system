import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Radio } from './Radio';

export default {
  title: 'Atoms/Forms/Radio',
  component: Radio,
  args: {
    label: 'Option 1',
  },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Radio>;

export const Default: StoryObj<Args> = {};
