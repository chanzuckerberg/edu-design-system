import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FooterNav, Props } from './FooterNav';
import { FooterNavItem } from '../FooterNavItem/FooterNavItem';

export default {
  title: 'Molecules/Navigation/FooterNav',
  component: FooterNav,
} as Meta;

const Template: Story<Props> = (args) => (
  <FooterNav>
    <FooterNavItem text="Footer Nav Item 1" href="#" />
    <FooterNavItem text="Footer Nav Item 2" href="#" />
    <FooterNavItem text="Footer Nav Item 3" href="#" />
    <FooterNavItem text="Footer Nav Item 4" href="#" />
  </FooterNav>
);

export const Default = Template.bind({});
Default.args = {};
