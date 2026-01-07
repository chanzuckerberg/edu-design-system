import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { VisualPageIndicator } from './VisualPageIndicator';

export default {
  title: 'Components/VisualPageIndicator',
  component: VisualPageIndicator,
  tags: ['autodocs', 'version:1.0'],
  parameters: {
    layout: 'centered',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof VisualPageIndicator>;

export const Default: StoryObj<Args> = {
  args: {
    activePage: 0,
    totalPageCount: 6,
  },
};

export const MinimumPages: StoryObj<Args> = {
  args: {
    activePage: 1,
    totalPageCount: 2,
  },
};

export const FivePages: StoryObj<Args> = {
  args: {
    activePage: 2,
    totalPageCount: 5,
  },
};
