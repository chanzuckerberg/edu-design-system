import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Band, Props } from './Band';

export default {
  title: 'Molecules/Layout and Containers/Band',
  component: Band,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <Band {...args}>Hello World</Band>;

export const Default = Template.bind({});

Default.args = {};

export const Brand = Template.bind({});
Brand.args = { variant: 'brand' };
