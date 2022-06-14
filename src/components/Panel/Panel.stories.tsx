import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { Panel } from './Panel';

export default {
  title: 'Molecules/Layout and Containers/Panel',
  component: Panel,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: 'A Panel is a generic bordered container for content.',
  },
};

type Args = React.ComponentProps<typeof Panel>;

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
