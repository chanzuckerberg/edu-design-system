import type { StoryObj, Meta } from '@storybook/react';

import { Hr } from './Hr';

export default {
  title: 'Components/Hr',
  component: Hr,
  parameters: {
    layout: 'centered',
    badges: ['api-1.3', 'theme-1.0'],
  },
  args: {
    className: 'w-96',
  },
  argTypes: {
    size: {
      control: 'radio',
    },
    variant: {
      control: 'radio',
    },
  },
} as Meta<typeof Hr>;

type Story = StoryObj<typeof Hr>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Brand: Story = {
  args: {
    variant: 'brand',
  },
};
