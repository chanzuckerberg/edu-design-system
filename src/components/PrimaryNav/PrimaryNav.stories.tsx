import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav, Props } from './PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';

export default {
  title: 'Molecules/Navigation/PrimaryNav',
  component: PrimaryNav,
} as Meta;

const Template: Story<Props> = (args) => (
  <PrimaryNav {...args}>
    <PrimaryNavItem href="#" text="Nav Item" />
    <PrimaryNavItem href="#" isActive={true} text="Nav Item" />
    <PrimaryNavItem href="#" text="Nav Item" />
  </PrimaryNav>
);

export const Default = Template.bind({});
Default.args = {};
