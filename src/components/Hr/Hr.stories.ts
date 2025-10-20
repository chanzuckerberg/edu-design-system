import type { StoryObj, Meta } from '@storybook/react';

import { Hr } from './Hr';

export default {
  title: 'Components/Hr',
  component: Hr,
  parameters: {
    layout: 'centered',
  },
  args: {
    className: 'w-[384px]',
  },
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs', 'version:1.3'],
} as Meta<typeof Hr>;

type Story = StoryObj<typeof Hr>;

export const Default: Story = {};
