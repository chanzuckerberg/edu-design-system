import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Tag text',
  },
  argTypes: {
    hasOutline: {
      table: {
        disable: true,
      },
    },
    text: {
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
  tags: ['autodocs', 'version:2.0'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tag>;
type Story = StoryObj<Args>;

export const Default: Story = {
  render: (args) => (
    <div className="flex gap-spacing-size-2">
      <Tag {...args} status="informational" />
      <Tag {...args} status="favorable" />
      <Tag {...args} status="warning" />
      <Tag {...args} status="critical" />
    </div>
  ),
};

/**
 * Icons can be added to the left side of the text in the tag.
 */
export const WithIcon: Story = {
  ...Default,
  args: {
    icon: 'star-filled',
  },
};
