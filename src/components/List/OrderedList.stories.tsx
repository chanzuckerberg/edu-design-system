import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { OrderedList } from './List';

export default {
  title: 'Components/OrderedList',
  component: OrderedList,
  parameters: {
    layout: 'centered',
  },
  args: {
    markerType: 'default',
    children: (
      <>
        <OrderedList.ListItem>test 1</OrderedList.ListItem>
        <OrderedList.ListItem>test 2</OrderedList.ListItem>
        <OrderedList.ListItem>test 3</OrderedList.ListItem>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
      description:
        'Content of the list (essentially the series of `.ListItem`s within the list)',
    },
  },
  tags: ['autodocs', 'version:1.0'],
} as Meta<typeof OrderedList>;

type Story = StoryObj<typeof OrderedList>;

export const Default: Story = {};

export const None: Story = {
  args: {
    markerType: 'none',
  },
};

export const XSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

/**
 * List can be nested to one depth
 */
export const Nested: Story = {
  render: (args) => (
    <OrderedList {...args}>
      <OrderedList.ListItem>test 1</OrderedList.ListItem>
      <OrderedList.ListItem>test 2</OrderedList.ListItem>
      <OrderedList.ListItem>
        test 3
        <OrderedList {...args}>
          <OrderedList.ListItem>test 1</OrderedList.ListItem>
          <OrderedList.ListItem>test 2</OrderedList.ListItem>
        </OrderedList>
      </OrderedList.ListItem>
    </OrderedList>
  ),
};
