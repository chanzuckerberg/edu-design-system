import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Header, Props } from './Header';

export default {
  title: 'Organisms/Global/Header',
  component: Header,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Header {...args}>
    <div className="fpo">Header children</div>
  </Header>
);

export const Default = Template.bind({});
Default.args = {};
