import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Hr } from './Hr';

export default {
  title: 'Components/Hr',
  component: Hr,
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-1.3'],
  },
  args: {
    className: 'w-96',
  },
} as Meta<Args>;

type Args = ComponentProps<typeof Hr>;

export const Default: StoryObj<Args> = {};

export const Large: StoryObj<Args> = {
  args: {
    size: 'lg',
  },
};

export const Brand: StoryObj<Args> = {
  args: {
    variant: 'brand',
  },
};
