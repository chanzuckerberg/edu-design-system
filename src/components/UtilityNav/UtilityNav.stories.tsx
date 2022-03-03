import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UtilityNav, Props } from './UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Molecules/Navigation/UtilityNav',
  component: UtilityNav,
} as Meta;

const Template: Story<Props> = (args) => (
  <UtilityNav {...args}>
    <UtilityNavItem href="#" text="Utility nav"></UtilityNavItem>
    <UtilityNavItem href="#" text="Utility nav"></UtilityNavItem>
    <UtilityNavItem href="#" text="Utility nav"></UtilityNavItem>
  </UtilityNav>
);

export const Default = Template.bind({});
Default.args = {};
