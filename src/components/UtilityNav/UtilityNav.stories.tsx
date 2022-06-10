import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { UtilityNav, Props } from './UtilityNav';
import { UtilityNavItem } from '../UtilityNavItem/UtilityNavItem';

export default {
  title: 'Molecules/Navigation/UtilityNav',
  component: UtilityNav,
  subcomponents: { UtilityNavItem },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <div style={{ background: '#000' }}>
    <UtilityNav {...args}>
      <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
      <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
      <UtilityNav.Item href="#" text="Utility nav"></UtilityNav.Item>
    </UtilityNav>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
