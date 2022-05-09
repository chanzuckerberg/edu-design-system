
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { OverflowListItem, Props } from './OverflowListItem';

export default {
	title: 'Example/OverflowListItem',
	component: OverflowListItem,
} as Meta;

const Template: Story<Props> = (args) => <OverflowListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
};;
