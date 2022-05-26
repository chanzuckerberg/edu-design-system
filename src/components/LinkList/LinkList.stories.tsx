import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LinkList, Props } from './LinkList';
import LinkListItem from '../LinkListItem';

export default {
  title: 'Molecules/Navigation/LinkList',
  component: LinkList,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <LinkList {...args}>
    <LinkListItem href="#" text="Link List Item 1" />
    <LinkListItem href="#" text="Link List Item 2" />
    <LinkListItem href="#" text="Link List Item 3" />
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
      href="#"
      iconName="chevron-right"
      iconPosition="after"
      text="Link List Item 1"
    />
    <LinkListItem
      href="#"
      iconName="chevron-right"
      iconPosition="after"
      text="Link List Item 2"
    />
    <LinkListItem
      href="#"
      iconName="chevron-right"
      iconPosition="after"
      text="Link List Item 3"
    />
  </LinkList>
);
export const Inverted = () => (
  <div style={{ backgroundColor: 'black' }}>
    <LinkList inverted={true}>
      <LinkListItem href="#" text="Link List Item 1" />
      <LinkListItem href="#" text="Link List Item 2" />
      <LinkListItem href="#" text="Link List Item 3" />
    </LinkList>
  </div>
);
