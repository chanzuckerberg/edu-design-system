import { Meta } from '@storybook/react';
import React from 'react';
import { NavContainer } from './NavContainer';
import { PrimaryNav } from '../PrimaryNav/PrimaryNav';
import { PrimaryNavItem } from '../PrimaryNavItem/PrimaryNavItem';
import { UtilityNav } from '../UtilityNav/UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Molecules/Global/NavContainer',
  component: NavContainer,
} as Meta;

export const Default = () => (
  <NavContainer>
    <PrimaryNav>
      <PrimaryNavItem href="#" text="Nav Item" />
      <PrimaryNavItem href="#" text="Nav Item" isActive={true} />
      <PrimaryNavItem href="#" text="Nav Item" />
    </PrimaryNav>
    <UtilityNav>
      <UtilityNavItem text="Utility Nav"></UtilityNavItem>
    </UtilityNav>
  </NavContainer>
);
