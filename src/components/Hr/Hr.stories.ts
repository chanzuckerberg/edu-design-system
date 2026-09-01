import type { StoryObj, Meta } from '@storybook/react-vite' with {
  'resolution-mode': 'import',
};

import { Hr } from './Hr';

export default {
  title: 'Components/Hr',
  component: Hr,
  parameters: {
    docs: {
      subtitle:
        'Horizontal rule component to present a horizontal line separating content.',
    },
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
