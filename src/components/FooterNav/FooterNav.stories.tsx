import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FooterNav, Props } from './FooterNav';
import FooterNavItem from '../FooterNavItem';

export default {
  title: 'Molecules/Navigation/FooterNav',
  component: FooterNav,
} as Meta;

const Template: Story<Props> = (args) => (
  <FooterNav>
    <FooterNavItem href="#" text="Footer Nav Item 1" />
    <FooterNavItem href="#" text="Footer Nav Item 2" />
    <FooterNavItem href="#" text="Footer Nav Item 3" />
    <FooterNavItem href="#" text="Footer Nav Item 4" />
  </FooterNav>
);

export const Default = Template.bind({});
Default.args = {};
