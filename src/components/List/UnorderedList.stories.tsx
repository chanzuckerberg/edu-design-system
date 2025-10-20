import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { UnorderedList } from './List';

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList,
  parameters: {
    layout: 'centered',
  },
  args: {
    markerType: 'default',
    children: (
      <>
        <UnorderedList.ListItem>test 1</UnorderedList.ListItem>
        <UnorderedList.ListItem>test 2</UnorderedList.ListItem>
        <UnorderedList.ListItem>test 3</UnorderedList.ListItem>
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
} as Meta<typeof UnorderedList>;

type Story = StoryObj<typeof UnorderedList>;

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
 * You can add custom markers to any list item by specifying a `list-style-type` value for the given row.
 *
 * This example uses TailwindCSS to specify a utility class with custom characters
 */
export const CustomMarker: Story = {
  args: {
    children: (
      <>
        <UnorderedList.ListItem className="list-['+']">
          test 1
        </UnorderedList.ListItem>
        <UnorderedList.ListItem className="list-['–']">
          test 2
        </UnorderedList.ListItem>
        <UnorderedList.ListItem className="list-['*']">
          test 3
        </UnorderedList.ListItem>
      </>
    ),
  },
};

/**
 * List can be nested to one depth
 */
export const Nested: Story = {
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.ListItem>test 1</UnorderedList.ListItem>
      <UnorderedList.ListItem>test 2</UnorderedList.ListItem>
      <UnorderedList.ListItem>
        test 3
        <UnorderedList {...args}>
          <UnorderedList.ListItem>test 1</UnorderedList.ListItem>
          <UnorderedList.ListItem>test 2</UnorderedList.ListItem>
        </UnorderedList>
      </UnorderedList.ListItem>
    </UnorderedList>
  ),
};
