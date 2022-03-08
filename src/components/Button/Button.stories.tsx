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

export const TextLink = Template.bind({});
TextLink.args = { variant: 'link', text: 'Text Link Button' };

export const UtilityError = Template.bind({});
UtilityError.args = { variant: 'error', text: 'Button' };

export const Small = Template.bind({});
Small.args = { size: 'sm', text: 'Small Button' };
