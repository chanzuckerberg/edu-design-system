
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StandardsCoverage, Props } from './StandardsCoverage';

export default {
	title: 'Recipes/StandardsCoverage',
	component: StandardsCoverage,
} as Meta;

const Template: Story<Props> = (args) => <StandardsCoverage {...args} />;

export const Default = Template.bind({});
Default.args = {
};;
