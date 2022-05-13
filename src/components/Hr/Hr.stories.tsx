import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Hr, Props } from './Hr';

export default {
  title: 'Atoms/Text/Hr',
  component: Hr,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <Hr {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
};
