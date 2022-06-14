import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { PopoverExample } from './PopoverExample';

export default {
  title: 'Organisms/Interactive/Popover',
  component: PopoverExample,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
};

type Args = React.ComponentProps<typeof PopoverExample>;

export const Default: StoryObj<Args> = {};

export const TopLeft: StoryObj<Args> = {
  args: {
    position: 'top-left',
  },
};

export const BottomLeft: StoryObj<Args> = {
  args: {
    position: 'bottom-left',
  },
};

export const BottomRight: StoryObj<Args> = {
  args: {
    position: 'bottom-right',
  },
};
