import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Meta } from '@storybook/react';
import React from 'react';

import { NavContainer } from './NavContainer';
import PrimaryNav from '../PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';
import UtilityNav from '../UtilityNav';
import UtilityNavItem from '../UtilityNavItem';

export default {
  title: 'Molecules/Global/NavContainer',
  component: NavContainer,
  parameters: {
    badges: [BADGE.BETA],
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

export const Default = () => (
  <NavContainer>
    <PrimaryNav>
      <PrimaryNavItem href="#" text="Nav Item" />
      <PrimaryNavItem href="#" isActive={true} text="Nav Item" />
      <PrimaryNavItem href="#" text="Nav Item" />
    </PrimaryNav>
    <UtilityNav>
      <UtilityNavItem text="Utility Nav"></UtilityNavItem>
    </UtilityNav>
  </NavContainer>
);
