import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Panel } from './Panel';

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    badges: ['1.0', BADGE.DEPRECATED],
  },
  args: {
    children: 'A Panel is a generic bordered container for content.',
  },
} as Meta<Args>;

type Args = ComponentProps<typeof Panel>;

export const Default: StoryObj<Args> = {};

export const Flush: StoryObj<Args> = {
  args: {
    flush: true,
  },
};

export const Squared: StoryObj<Args> = {
  args: {
    variant: 'squared',
  },
};

export const Centered: StoryObj<Args> = {
  args: {
    align: 'center',
  },
};
