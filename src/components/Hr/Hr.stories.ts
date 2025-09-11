import type { StoryObj, Meta } from '@storybook/react';

import { Hr } from './Hr';

export default {
  title: 'Components/Hr',
  component: Hr,
  parameters: {
    layout: 'centered',
    badges: ['api-1.3', 'theme-2.0'],
  },
  args: {
    className: 'w-[384px]',
  },
  argTypes: {
    size: {
      control: false,
    },
    variant: {
      control: false,
    },
  },
} as Meta<typeof Hr>;

type Story = StoryObj<typeof Hr>;

export const Default: Story = {};
