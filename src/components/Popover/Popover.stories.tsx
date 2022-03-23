import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PopoverExample, Props } from './PopoverExample';

export default {
  title: 'Organisms/Interactive/Popover',
  component: PopoverExample,
} as Meta;

const Template: Story<Props> = (args) => <PopoverExample {...args} />;

export const Default = Template.bind({});
Default.args = {};
