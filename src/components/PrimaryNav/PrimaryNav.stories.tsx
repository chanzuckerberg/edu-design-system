import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav } from './PrimaryNav';
import PrimaryNavItem from '../PrimaryNavItem';

export default {
  title: 'Components/PrimaryNav',
  component: PrimaryNav,
  subcomponents: { PrimaryNavItem },
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof PrimaryNav>;

export const Default: StoryObj<Args> = {};
