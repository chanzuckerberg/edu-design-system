import { Story, Meta } from '@storybook/react';
import React from 'react';

import { InlineForm, Props } from './InlineForm';

export default {
  title: 'Organisms/Forms/InlineForm',
  component: InlineForm,
} as Meta;

const Template: Story<Props> = (args) => <InlineForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Search',
  method: 'post',
  action: 'http://google.com',
  placeholder: 'Placeholder',
  buttonText: 'Action',
};
