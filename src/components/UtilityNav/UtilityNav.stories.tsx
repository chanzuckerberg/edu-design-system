import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { UtilityNav } from './UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Components/UtilityNav',
  component: UtilityNav,
  subcomponents: { UtilityNavItem },
  args: {
    children: (
      <>
        <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
        <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
        <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#000' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

type Args = React.ComponentProps<typeof UtilityNav>;

export const Default: StoryObj<Args> = {};
