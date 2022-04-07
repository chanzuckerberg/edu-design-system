import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Props } from './Button';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const DefaultWithIconBefore = Template.bind({});
DefaultWithIconBefore.args = {
  children: (
    <>
      <Icon purpose="decorative" name="chevron-left" />
      Button
    </>
  ),
};

export const DefaultWithIconAfter = Template.bind({});
DefaultWithIconAfter.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="chevron-right" />
    </>
  ),
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = { children: 'Button', disabled: true };

export const Primary = Template.bind({});
Primary.args = { variant: 'primary', children: 'Primary Button' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  variant: 'primary',
  children: 'Primary Button',
  disabled: true,
};

export const BareIcon = Template.bind({});
BareIcon.args = {
  variant: 'icon',
  children: <Icon purpose="informative" title="Close" name="close" />,
};

export const TextLink = Template.bind({});
TextLink.args = { variant: 'link', children: 'Text Link Button' };

export const UtilityError = Template.bind({});
UtilityError.args = { variant: 'error', children: 'Button' };

export const Medium = Template.bind({});
Medium.args = { size: 'md', children: 'Medium Button' };

export const Small = Template.bind({});
Small.args = { size: 'sm', children: 'Small Button' };

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true, children: 'Button' };

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  disabled: true,
  children: 'Loading Button',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  variant: 'primary',
  loading: true,
  disabled: true,
  children: 'Primary Loading Button',
};
