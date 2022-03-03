import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Tags, Props } from './Tags';
import { TagsItem } from '../TagsItem/TagsItem';

export default {
  title: 'Molecules/Messaging/Tags',
  component: Tags,
} as Meta;

const Template: Story<Props> = (args) => (
  <Tags {...args}>
    <TagsItem text="Tag 1"></TagsItem>
    <TagsItem text="Tag 2"></TagsItem>
    <TagsItem text="Tag 3"></TagsItem>
  </Tags>
);

export const Default = Template.bind({});
Default.args = {};

export const Dismissible = (args) => {
  return (
    <Tags {...args}>
      <TagsItem dismissible={true} text="Tag 1"></TagsItem>
      <TagsItem dismissible={true} text="Tag 2"></TagsItem>
      <TagsItem dismissible={true} text="Tag 3"></TagsItem>
    </Tags>
  );
};
