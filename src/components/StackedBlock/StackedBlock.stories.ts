import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { StackedBlock } from './StackedBlock';

export default {
  title: 'Components/StackedBlock',
  component: StackedBlock,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = ComponentProps<typeof StackedBlock>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'This is a link',
    children: 'This is a stacked block description',
  },
};
