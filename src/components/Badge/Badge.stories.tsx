import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, Props } from './Badge';

export default {
  title: 'Molecules/Messaging/Badge',
  component: Badge,
} as Meta;

const Template: Story<Props> = (args) => <Badge text="Badge" {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Warning = Template.bind({});
Warning.args = { variant: 'warning' };

export const Error = Template.bind({});
Error.args = { variant: 'error' };

export const Success = Template.bind({});
Success.args = { variant: 'success' };
