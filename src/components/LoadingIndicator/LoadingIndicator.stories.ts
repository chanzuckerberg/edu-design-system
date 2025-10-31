import type { StoryObj, Meta } from '@storybook/react-webpack5';
import type React from 'react';

import { LoadingIndicator } from './LoadingIndicator';

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'version:2.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof LoadingIndicator>;

export const Default: StoryObj<Args> = {};

export const ExtraSmall: StoryObj<Args> = {
  args: {
    size: 'xs',
  },
};

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
    isVisible: false,
  },
};

export const WithAriaLabel: StoryObj<Args> = {
  args: {
    ariaLabel: 'Loading, Please Wait',
  },
};
