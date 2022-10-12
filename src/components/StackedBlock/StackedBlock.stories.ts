import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { StackedBlock } from './StackedBlock';

export default {
  title: 'Molecules/Blocks/StackedBlock',
  component: StackedBlock,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof StackedBlock>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'This is a link',
    children: 'This is a stacked block description',
  },
};
