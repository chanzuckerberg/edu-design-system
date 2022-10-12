import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { Hr } from './Hr';

export default {
  title: 'Atoms/Text/Hr',
  component: Hr,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Hr>;

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
