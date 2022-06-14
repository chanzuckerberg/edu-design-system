import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav } from './PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';

export default {
  title: 'Molecules/Navigation/PrimaryNav',
  component: PrimaryNav,
  subcomponents: { PrimaryNavItem },
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
  args: {
    children: (
      <>
        <PrimaryNav.Item href="#" text="Nav Item" />
        <PrimaryNav.Item href="#" isActive={true} text="Nav Item" />
        <PrimaryNav.Item href="#" text="Nav Item" />
      </>
    ),
  },
} as Meta;

type Args = React.ComponentProps<typeof PrimaryNav>;

export const Default: StoryObj<Args> = {};
