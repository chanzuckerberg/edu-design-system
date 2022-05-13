
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SuperAwesomeComponent, Props } from './SuperAwesomeComponent';

export default {
	title: 'Example/SuperAwesomeComponent',
	component: SuperAwesomeComponent,
} as Meta;

const Template: Story<Props> = (args) => <SuperAwesomeComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
};;
