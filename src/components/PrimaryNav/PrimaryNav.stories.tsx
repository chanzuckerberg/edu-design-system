import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PrimaryNav, Props } from './PrimaryNav';
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
} as Meta;

const Template: Story<Props> = (args) => (
  <PrimaryNav {...args}>
    <PrimaryNav.Item href="#" text="Nav Item" />
    <PrimaryNav.Item href="#" isActive={true} text="Nav Item" />
    <PrimaryNav.Item href="#" text="Nav Item" />
  </PrimaryNav>
);

export const Default = Template.bind({});
Default.args = {};
