import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Props } from './Button';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', backgroundColor: '#000' }}>
    {' '}
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { text: 'Button' };

export const DefaultWithIconBefore = Template.bind({});
DefaultWithIconBefore.args = {
  text: 'Button',
  iconPosition: 'before',
  iconName: 'chevron-left',
};

export const DefaultWithIconAfter = Template.bind({});
DefaultWithIconAfter.args = {
  text: 'Button',
  iconPosition: 'after',
  iconName: 'chevron-right',
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = { text: 'Button', disabled: true };

export const DefaultInverted = InvertedTemplate.bind({});
DefaultInverted.args = { inverted: true, text: 'Button' };

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
  text: 'Close',
  iconName: 'x',
  iconPosition: 'before',
  hideText: true,
};

export const BareIconInverted = InvertedTemplate.bind({});
BareIconInverted.args = {
  inverted: true,
  variant: 'bare',
  text: 'Close',
  iconName: 'x',
  iconPosition: 'before',
  hideText: true,
};

export const TextLink = Template.bind({});
TextLink.args = { variant: 'link', text: 'Text Link Button' };

export const TextLinkInverted = InvertedTemplate.bind({});
TextLinkInverted.args = {
  variant: 'link',
  inverted: true,
  text: 'Text Link Button',
};

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
  text: 'Loading...',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  variant: 'primary',
  iconPosition: 'before',
  iconName: 'spinner',
  loading: true,
  disabled: true,
  text: 'Loading...',
};
