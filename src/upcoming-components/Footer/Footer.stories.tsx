import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Footer, Props } from './Footer';

export default {
  title: 'Organisms/Global/Footer',
  component: Footer,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Footer {...args}>Footer content</Footer>
);

export const Default = Template.bind({});
Default.args = {};
