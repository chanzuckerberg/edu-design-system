import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { NavContainer } from './NavContainer';
import PrimaryNav from '../PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';

export default {
  title: 'Components/NavContainer',
  component: NavContainer,
  subcomponents: { PrimaryNav },
  args: {
    children: (
      <PrimaryNav>
        <PrimaryNavItem href="#" text="Nav Item" />
        <PrimaryNavItem href="#" isActive={true} text="Nav Item" />
        <PrimaryNavItem href="#" text="Nav Item" />
      </PrimaryNav>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000000' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof NavContainer>;

export const Default: StoryObj<Args> = {};
