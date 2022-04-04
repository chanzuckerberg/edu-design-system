import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Toast, Props } from './Toast';

export default {
  title: 'Molecules/Messaging/Toast',
  component: Toast,
} as Meta;

const Template: Story<Props> = (args) => (
  <Toast {...args}>{`You've got toast!`}</Toast>
);

export const Default = Template.bind({});
Default.args = { iconName: 'info' };

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  iconName: 'check-circle',
  title: 'This is a title',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  iconName: 'error',
  title: 'This is a title',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  iconName: 'cancel',
  title: 'This is a title',
};

export const NotDismissible = Template.bind({});
NotDismissible.args = {
  dismissible: false,
  iconName: 'info',
  title: 'This is a title',
};
