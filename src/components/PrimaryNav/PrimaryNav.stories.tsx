import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav, Props } from './PrimaryNav';

export default {
  title: 'Molecules/Navigation/PrimaryNav',
  component: PrimaryNav,
} as Meta;

const Template: Story<Props> = (args) => (
  <PrimaryNav {...args}>
    <PrimaryNav.Item href="#" text="Nav Item" />
    <PrimaryNav.Item href="#" isActive={true} text="Nav Item" />
    <PrimaryNav.Item href="#" text="Nav Item" />
  </PrimaryNav>
);

export const Default = Template.bind({});
Default.args = {};
