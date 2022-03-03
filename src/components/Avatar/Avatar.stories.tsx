import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Avatar, Props } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
