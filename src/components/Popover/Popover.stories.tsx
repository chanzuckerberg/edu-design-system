import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PopoverExample, Props } from './PopoverExample';

export default {
  title: 'Organisms/Interactive/Popover',
  component: PopoverExample,
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <PopoverExample {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const TopLeft = Template.bind({});
TopLeft.args = {
  position: 'top-left',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  position: 'bottom-left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  position: 'bottom-right',
};
