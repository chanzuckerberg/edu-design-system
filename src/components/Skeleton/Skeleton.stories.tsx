import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'background-utility-inverse-high-emphasis',
    },
  },
  tags: ['autodocs', 'version:1.4'],
} as Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

/**
 * The default shape for a skeleton is a Rounded rectangle with an optional animation.
 */
export const Default: Story = {
  args: {
    width: 100,
    height: 100,
  },
};

/**
 * It's also possible to use a fully-rounded circle for components like `Avatar`. Only `width` is defined for `.Circle`.
 */
export const Circle: StoryObj<typeof Skeleton.Circle> = {
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
export const Text: StoryObj<typeof Skeleton.Text> = {
  args: {
    width: '30ch',
    height: '24px',
  },
  render: (args) => {
    return <Skeleton.Text {...args} />;
  },
};
