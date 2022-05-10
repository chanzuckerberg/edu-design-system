import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FooterNav, Props } from './FooterNav';
import FooterNavItem from '../FooterNavItem';

export default {
  title: 'Molecules/Navigation/FooterNav',
  component: FooterNav,
  subcomponents: { FooterNavItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <FooterNav>
    <FooterNav.Item href="#" text="Footer Nav Item 1" />
    <FooterNav.Item href="#" text="Footer Nav Item 2" />
    <FooterNav.Item href="#" text="Footer Nav Item 3" />
    <FooterNav.Item href="#" text="Footer Nav Item 4" />
  </FooterNav>
);

export const Default = Template.bind({});
Default.args = {};
