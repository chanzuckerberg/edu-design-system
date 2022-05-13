import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Tags, Props } from './Tags';
import TagsItem, { TagsItemProps } from '../TagsItem';

export default {
  title: 'Molecules/Messaging/Tags',
  component: Tags,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

export const Default: StoryObj<Props & TagsItemProps> = {
  render: ({ dismissible, ...args }) => (
    <Tags {...args}>
      <TagsItem dismissible={dismissible} text="Tag 1"></TagsItem>
      <TagsItem dismissible={dismissible} text="Tag 2"></TagsItem>
      <TagsItem dismissible={dismissible} text="Tag 3"></TagsItem>
    </Tags>
  ),
};

export const Dismissible = {
  ...Default,
  args: {
    dismissible: true,
  },
};
