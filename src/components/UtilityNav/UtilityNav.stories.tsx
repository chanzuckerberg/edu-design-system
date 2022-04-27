import { Story, Meta } from '@storybook/react';
import React from 'react';

import { UtilityNav, Props } from './UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Molecules/Navigation/UtilityNav',
  component: UtilityNav,
  subcomponents: { UtilityNavItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <UtilityNav {...args}>
    <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
    <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
    <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
  </UtilityNav>
);

export const Default = Template.bind({});
Default.args = {};
