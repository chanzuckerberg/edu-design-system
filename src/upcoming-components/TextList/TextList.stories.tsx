import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextList, Props } from './TextList';
import TextListItem from '../TextListItem';

export default {
  title: 'Molecules/Lists/TextList',
  component: TextList,
} as Meta;

const Template: Story<Props> = (args) => (
  <TextList {...args}>
    <TextListItem>Text list item 1</TextListItem>
    <TextListItem>Text list item 2</TextListItem>
    <TextListItem>Text list item 3</TextListItem>
    <TextListItem>Text list item 4</TextListItem>
  </TextList>
);

export const Default = Template.bind({});
Default.args = {};

export const Inverted = () => (
  <div className="u-padding-sm" style={{ background: '#000000' }}>
    <TextList inverted={true}>
      <TextListItem>Text list item 1</TextListItem>
      <TextListItem>Text list item 2</TextListItem>
      <TextListItem>Text list item 3</TextListItem>
      <TextListItem>Text list item 4</TextListItem>
    </TextList>
  </div>
);

export const OrderedList = Template.bind({});
OrderedList.args = { as: 'ol' };

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Inline = Template.bind({});
Inline.args = { variant: 'inline' };
