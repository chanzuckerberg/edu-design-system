import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TextInput, Props } from './TextInput';

export default {
  title: 'Atoms/Forms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
