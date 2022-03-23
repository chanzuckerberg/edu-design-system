import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Popover, Props } from './Popover';

export default {
  title: 'Molecules/Layout and Containers/Popover',
  component: Popover,
} as Meta;

const Template: Story<Props> = (args) => <Popover {...args} />;

export const Default = Template.bind({});
Default.args = {};
