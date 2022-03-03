import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Legend, Props } from './Legend';

export default {
  title: 'Atoms/Forms/Legend',
  component: Legend,
} as Meta;

const Template: Story<Props> = (args) => <Legend {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Legend', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Legend', required: false };
