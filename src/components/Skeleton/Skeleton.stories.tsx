import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  subcomponents: {
    'Skeleton.Circle': Skeleton.Circle,
    'Skeleton.Rect': Skeleton.Rect,
    'Skeleton.Text': Skeleton.Text,
  },
  parameters: {
    badges: ['1.2'],
    layout: 'centered',
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Skeleton>;

export const Default: StoryObj<Args> = {
  args: {
    width: 100,
    height: 100,
  },
};

export const Rect: StoryObj<Args> = {
  args: {
    width: 50,
    height: 50,
  },
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
  render: (args) => {
    return <Skeleton.Rect {...args} />;
  },
};

export const Circle: StoryObj<React.ComponentProps<typeof Skeleton.Circle>> = {
  args: {
    width: 100,
  },
  render: (args) => {
    return <Skeleton.Circle {...args} />;
  },
};

export const Text: StoryObj<React.ComponentProps<typeof Skeleton.Text>> = {
  args: {
    width: '30ch',
    height: '1.5rem',
  },
  render: (args) => {
    return <Skeleton.Text {...args} />;
  },
};
