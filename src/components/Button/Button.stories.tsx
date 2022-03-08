import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Props } from './Button';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { text: 'Button' };

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = { text: 'Button', disabled: true };

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', text: 'Primary Button' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  text: 'Primary Button',
  disabled: true,
};

export const PrimaryInverted = InvertedTemplate.bind({});
PrimaryInverted.args = {
  variant: 'primary',
  inverted: true,
  text: 'Primary Button',
};

export const BareIcon = Template.bind({});
BareIcon.args = {
  variant: 'bare',
  'aria-label': 'Close',
  iconName: 'x',
  iconPosition: 'before',
};

export const BareIconInverted = InvertedTemplate.bind({});
BareIconInverted.args = {
  inverted: true,
  variant: 'bare',
  'aria-label': 'Close',
  iconName: 'x',
  iconPosition: 'before',
};

export const TextLink = Template.bind({});
TextLink.args = { variant: 'link', text: 'Text Link Button' };

export const UtilityError = Template.bind({});
UtilityError.args = { variant: 'error', text: 'Button' };

export const Small = Template.bind({});
Small.args = { size: 'sm', text: 'Small Button' };

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true, text: 'Button' };

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  disabled: true,
  text: 'Loading Button',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  variant: 'primary',
  loading: true,
  disabled: true,
  text: 'Primary Loading Button',
};
