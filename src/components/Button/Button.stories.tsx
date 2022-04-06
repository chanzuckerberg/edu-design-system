import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button, Props } from './Button';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const PrimaryNoIcon = Template.bind({});
PrimaryNoIcon.args = { children: 'Button' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { children: 'Button', disabled: true };

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { children: 'Button', size: 'md' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { children: 'Button', size: 'sm' };

export const SecondaryNoIcon = Template.bind({});
SecondaryNoIcon.args = { children: 'Button', variant: 'secondary' };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  disabled: true,
};

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'secondary',
};

export const SecondaryRightIcon = Template.bind({});
SecondaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { children: 'Button', variant: 'secondary', size: 'md' };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { children: 'Button', variant: 'secondary', size: 'sm' };

export const TeritaryNoIcon = Template.bind({});
TeritaryNoIcon.args = { children: 'Button', variant: 'tertiary' };

export const TeritaryDisabled = Template.bind({});
TeritaryDisabled.args = {
  children: 'Button',
  variant: 'tertiary',
  disabled: true,
};

export const TeritaryLeftIcon = Template.bind({});
TeritaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryRightIcon = Template.bind({});
TeritaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryMedium = Template.bind({});
TeritaryMedium.args = { children: 'Button', variant: 'tertiary', size: 'md' };

export const TeritarySmall = Template.bind({});
TeritarySmall.args = { children: 'Button', variant: 'tertiary', size: 'sm' };

export const IconButtonLeftIcon = Template.bind({});
IconButtonLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'icon',
};

export const IconButtonDisabled = Template.bind({});
IconButtonDisabled.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'icon',
  disabled: true,
};

export const IconButtonRightIcon = Template.bind({});
IconButtonRightIcon.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
};

export const IconButtonIconOnly = Template.bind({});
IconButtonIconOnly.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
};

export const IconButtonLeftIconSmall = Template.bind({});
IconButtonLeftIconSmall.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconButtonRightIconSmall = Template.bind({});
IconButtonRightIconSmall.args = {
  children: (
    <>
      Button
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconButtonIconOnlySmall = Template.bind({});
IconButtonIconOnlySmall.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
  size: 'sm',
};

export const LinkNoIcon = Template.bind({});
LinkNoIcon.args = { children: 'Button', variant: 'link' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { children: 'Button', variant: 'link', disabled: true };

export const LinkRightIcon = Template.bind({});
LinkRightIcon.args = {
  children: (
    <>
      Button
      <Icon
        purpose="informative"
        title="opens in a new tab"
        name="open-in-new"
      />
    </>
  ),
  variant: 'link',
};

export const DestructiveNoIcon = Template.bind({});
DestructiveNoIcon.args = { children: 'Button', variant: 'destructive' };

export const DestructiveDisabled = Template.bind({});
DestructiveDisabled.args = {
  children: 'Button',
  variant: 'destructive',
  disabled: true,
};

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Button
    </>
  ),
  variant: 'destructive',
};

export const FullWidth = Template.bind({});
FullWidth.args = { children: 'Button', fullWidth: true };

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
  disabled: true,
};
