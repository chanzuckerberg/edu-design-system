import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import {UtilityNavItem} from '../UtilityNavItem/UtilityNavItem';
import {UtilityNav} from './UtilityNav';

export default {
  title: 'Molecules/Navigation/UtilityNav',
  component: UtilityNav,
  subcomponents: {UtilityNavItem},
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
      <div style={{background: '#000'}}>
        <Story />
      </div>
    ),
  ],
} as Meta;

type Args = React.ComponentProps<typeof UtilityNav>;

export const Default: StoryObj<Args> = {};
