import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Panel, Props } from './Panel';

export default {
  title: 'Molecules/Layout and Containers/Panel',
  component: Panel,
} as Meta;

const Template: Story<Props> = (args) => (
  <Panel {...args}>A Panel is a generic bordered container for content.</Panel>
);

export const Default = Template.bind({});
Default.args = {};

export const Centered = Template.bind({});
Centered.args = { align: 'center' };
