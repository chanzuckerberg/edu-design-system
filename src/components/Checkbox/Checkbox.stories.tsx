import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Checkbox, Props } from './Checkbox';

export default {
  title: 'Atoms/Forms/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const Indeterminate = Template.bind({});
Indeterminate.args = { checked: true, indeterminate: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
