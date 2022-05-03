import { Story, Meta } from '@storybook/react';
import React from 'react';

import { OverflowList, Props } from './OverflowList';

export default {
  title: 'Example/OverflowList',
  component: OverflowList,
} as Meta;

const Template: Story<Props> = (args) => <OverflowList {...args} />;

export const Default = Template.bind({});
Default.args = {};
