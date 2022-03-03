import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LinkList, Props } from './LinkList';
import { LinkListItem } from '../LinkListItem/LinkListItem';

export default {
  title: 'Molecules/Navigation/LinkList',
  component: LinkList,
} as Meta;

const Template: Story<Props> = (args) => (
  <LinkList {...args}>
    <LinkListItem text="Link List Item 1" href="#" />
    <LinkListItem text="Link List Item 2" href="#" />
    <LinkListItem text="Link List Item 3" href="#" />
  </LinkList>
);

export const Default = Template.bind({});
Default.args = {};

export const Lined = Template.bind({});
Lined.args = {
  variant: 'lined',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  behavior: 'horizontal',
};

export const Responsive = Template.bind({});
Responsive.args = {
  behavior: 'responsive',
};

export const IconAfterText = () => (
  <LinkList>
    <LinkListItem
      text="Link List Item 1"
      href="#"
      iconPosition="after"
      iconName="chevron-right"
    />
    <LinkListItem
      text="Link List Item 2"
      href="#"
      iconPosition="after"
      iconName="chevron-right"
    />
    <LinkListItem
      text="Link List Item 3"
      href="#"
      iconPosition="after"
      iconName="chevron-right"
    />
  </LinkList>
);
export const Inverted = () => (
  <div style={{ backgroundColor: 'black' }}>
    <LinkList inverted={true}>
      <LinkListItem text="Link List Item 1" href="#" />
      <LinkListItem text="Link List Item 2" href="#" />
      <LinkListItem text="Link List Item 3" href="#" />
    </LinkList>
  </div>
);
