import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Toast, Props } from './Toast';
import { TextPassage } from '../TextPassage/TextPassage';
import { LayoutLinelengthContainer } from '../LayoutLinelengthContainer/LayoutLinelengthContainer';
import { Heading } from '../Heading/Heading';
import { Button } from '../Button/Button';

export default {
  title: 'Molecules/Messaging/Toast',
  component: Toast,
} as Meta;

const Template: Story<Props> = (args) => (
  <Toast {...args}>You've got toast!</Toast>
);

export const Default = Template.bind({});
Default.args = { iconName: 'information-circle' };

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
  iconName: 'exclamation-circle',
  title: 'This is a title',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  iconName: 'x-circle',
  title: 'This is a title',
};

export const NotDismissible = Template.bind({});
NotDismissible.args = {
  dismissible: false,
  iconName: 'information-circle',
  title: 'This is a title',
};
