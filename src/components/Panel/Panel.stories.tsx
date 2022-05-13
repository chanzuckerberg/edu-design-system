import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Panel, Props } from './Panel';

export default {
  title: 'Molecules/Layout and Containers/Panel',
  component: Panel,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Panel {...args}>A Panel is a generic bordered container for content.</Panel>
);

export const Default = Template.bind({});
Default.args = {};

export const Flush = Template.bind({});
Flush.args = { flush: true };

export const Squared = Template.bind({});
Squared.args = { variant: 'squared' };

export const Centered = Template.bind({});
Centered.args = { align: 'center' };
