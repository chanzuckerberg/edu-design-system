import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Textarea, Props } from './Textarea';

export default {
  title: 'Atoms/Forms/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};
