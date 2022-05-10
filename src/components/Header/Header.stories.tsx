import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Header, Props } from './Header';
import Logo from '../Logo';
import NavContainer from '../NavContainer';
import PrimaryNav from '../PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';
import UtilityNav from '../UtilityNav';
import UtilityNavItem from '../UtilityNavItem';

export default {
  title: 'Organisms/Global/Header',
  component: Header,
} as Meta;

const Template: Story<Props> = (args) => (
  <Header {...args}>
    <Logo href="#" />
    <NavContainer>
      <PrimaryNav>
        <PrimaryNavItem href="#" text="Nav Item" />
        <PrimaryNavItem href="#" text="Nav Item" />
        <PrimaryNavItem href="#" text="Nav Item" />
      </PrimaryNav>
      <UtilityNav>
        <UtilityNavItem href="#" text="Utility Nav"></UtilityNavItem>
      </UtilityNav>
    </NavContainer>
  </Header>
);

export const Default = Template.bind({});
Default.args = {};
