import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { LoadingIndicator } from './LoadingIndicator';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
    badges: ['1.2', BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof LoadingIndicator>;

export const Default: StoryObj<Args> = {};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Medium: StoryObj<Args> = {
  args: {
    size: 'md',
  },
};

export const Large: StoryObj<Args> = {
  args: {
    size: 'lg',
  },
};

export const Invisible: StoryObj<Args> = {
  args: {
    visible: false,
  },
};

export const WithAriaLabel: StoryObj<Args> = {
  args: {
    ariaLabel: 'Loading, Please Wait',
  },
};
