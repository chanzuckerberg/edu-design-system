import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PopoverListItem } from './PopoverListItem';

export default {
  title: 'Components/PopoverListItem',
  component: PopoverListItem,
  parameters: {
    badges: ['intro-1.2'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof PopoverListItem>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'Default list item',
  },
};

export const WithAnIcon: StoryObj<Args> = {
  render: () => (
    <PopoverListItem icon="add-circle">Test with Icon</PopoverListItem>
  ),
};

export const Disabled: StoryObj<Args> = {
  render: () => <PopoverListItem disabled>Disabled</PopoverListItem>,
};

export const Active: StoryObj<Args> = {
  render: () => (
    <PopoverListItem active icon="check">
      Active Row with Icon
    </PopoverListItem>
  ),
};
