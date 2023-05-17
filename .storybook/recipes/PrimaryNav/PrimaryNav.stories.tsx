import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav } from './PrimaryNav';

export default {
  title: 'Recipes/PrimaryNav',
  component: PrimaryNav,
  subcomponents: { 'PrimaryNav.Item': PrimaryNav.Item },
  decorators: [(Story) => <div style={{ background: '#000' }}>{Story()}</div>],
  args: {
    children: (
      <>
        <PrimaryNav.Item href="#" text="Nav Item" />
        <PrimaryNav.Item href="#" isActive text="Nav Item" />
        <PrimaryNav.Item href="#" text="Nav Item" />
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof PrimaryNav>;

export const Default: StoryObj<Args> = {};
