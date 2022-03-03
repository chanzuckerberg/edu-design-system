import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from './Header';
import { Logo } from '../Logo/Logo';
import { NavContainer } from '../NavContainer/NavContainer';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { PrimaryNavItem } from '../PrimaryNavItem/PrimaryNavItem';
import { UtilityNav } from '../UtilityNav/UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Organisms/Global/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => (
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
