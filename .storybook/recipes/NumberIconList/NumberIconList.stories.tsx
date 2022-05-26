
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NumberIconList, Props } from './NumberIconList';

export default {
	title: 'Recipes/NumberIconList',
	component: NumberIconList,
} as Meta;

const Template: Story<Props> = (args) => <NumberIconList {...args} />;

export const Default = Template.bind({});
Default.args = {
};;
