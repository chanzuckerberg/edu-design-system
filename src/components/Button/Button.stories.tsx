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

export const Outline = Template.bind({});
Outline.args = { variant: 'outline', text: 'Outline Button' };

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  variant: 'outline',
  text: 'Outline Button',
  disabled: true,
};

export const TextLink = Template.bind({});
TextLink.args = { variant: 'link', text: 'Text Link Button' };

export const TextLinkDisabled = Template.bind({});
TextLinkDisabled.args = {
  variant: 'link',
  text: 'Text Link Button',
  disabled: true,
};

export const PlainButton = Template.bind({});
PlainButton.args = { variant: 'plain', text: 'Plain Button' };

export const PlainButtonDisabled = Template.bind({});
PlainButtonDisabled.args = {
  variant: 'plain',
  text: 'Plain Button',
  disabled: true,
};

export const Medium = Template.bind({});
Medium.args = { size: 'md', text: 'Medium Button' };

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
