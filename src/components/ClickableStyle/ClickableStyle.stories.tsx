import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ClickableStyle, ClickableStyleProps } from './ClickableStyle';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/ClickableStyle',
  component: ClickableStyle,
} as Meta;

const Template: Story<ClickableStyleProps<React.ElementType>> = (args) => (
  <ClickableStyle {...args} as="button" />
);

export const Primary = Template.bind({});
Primary.args = { children: 'Clickable Style' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { children: 'Clickable Style', disabled: true };

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { children: 'Clickable Style', size: 'md' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { children: 'Clickable Style', size: 'sm' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Clickable Style', variant: 'secondary' };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Clickable Style',
  variant: 'secondary',
  disabled: true,
};

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'secondary',
};

export const SecondaryRightIcon = Template.bind({});
SecondaryRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  children: 'Clickable Style',
  variant: 'secondary',
  size: 'md',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  children: 'Clickable Style',
  variant: 'secondary',
  size: 'sm',
};

export const Teritary = Template.bind({});
Teritary.args = { children: 'Clickable Style', variant: 'tertiary' };

export const TeritaryDisabled = Template.bind({});
TeritaryDisabled.args = {
  children: 'Clickable Style',
  variant: 'tertiary',
  disabled: true,
};

export const TeritaryLeftIcon = Template.bind({});
TeritaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryRightIcon = Template.bind({});
TeritaryRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryMedium = Template.bind({});
TeritaryMedium.args = {
  children: 'Clickable Style',
  variant: 'tertiary',
  size: 'md',
};

export const TeritarySmall = Template.bind({});
TeritarySmall.args = {
  children: 'Clickable Style',
  variant: 'tertiary',
  size: 'sm',
};

export const IconClickableStyleLeftIcon = Template.bind({});
IconClickableStyleLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'icon',
};

export const IconClickableStyleDisabled = Template.bind({});
IconClickableStyleDisabled.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'icon',
  disabled: true,
};

export const IconClickableStyleRightIcon = Template.bind({});
IconClickableStyleRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
};

export const IconClickableStyleIconOnly = Template.bind({});
IconClickableStyleIconOnly.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
};

export const IconClickableStyleLeftIconSmall = Template.bind({});
IconClickableStyleLeftIconSmall.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconClickableStyleRightIconSmall = Template.bind({});
IconClickableStyleRightIconSmall.args = {
  children: (
    <>
      Clickable Style
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconClickableStyleIconOnlySmall = Template.bind({});
IconClickableStyleIconOnlySmall.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
  size: 'sm',
};

export const Link = Template.bind({});
Link.args = { children: 'Clickable Style', variant: 'link' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  children: 'Clickable Style',
  variant: 'link',
  disabled: true,
};

export const LinkRightIcon = Template.bind({});
LinkRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon
        purpose="informative"
        title="opens in a new tab"
        name="open-in-new"
      />
    </>
  ),
  variant: 'link',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Clickable Style',
  variant: 'destructive',
};

export const DestructiveDisabled = Template.bind({});
DestructiveDisabled.args = {
  children: 'Clickable Style',
  variant: 'destructive',
  disabled: true,
};

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Clickable Style
    </>
  ),
  variant: 'destructive',
};

export const FullWidth = Template.bind({});
FullWidth.args = { children: 'Clickable Style', fullWidth: true };

export const Loading = Template.bind({});
Loading.args = {
  children: 'Clickable Style',
  loading: true,
  disabled: true,
};
