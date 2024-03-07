import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    badges: ['intro-1.2'],
    layout: 'centered',
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Skeleton>;

/**
 * The default shape for a skeleton is a Rounded rectangle with an optional animation.
 */
export const Default: StoryObj<Args> = {
  args: {
    width: 100,
    height: 100,
  },
};

/**
 * It's also possible to use a fully-rounded circle for components like `Avatar`. Only `width` is defined for `.Circle`.
 */
export const Circle: StoryObj<React.ComponentProps<typeof Skeleton.Circle>> = {
  args: {
    width: 100,
  },
  render: (args) => {
    return <Skeleton.Circle {...args} />;
  },
};

/**
 * You can also use a specific variant for handling text. It is recommended to use charactor spacing units,
 * representing the length in a way that mimics expected/maximum character length.
 */
export const Text: StoryObj<React.ComponentProps<typeof Skeleton.Text>> = {
  args: {
    width: '30ch',
    height: '1.5rem',
  },
  render: (args) => {
    return <Skeleton.Text {...args} />;
  },
};
