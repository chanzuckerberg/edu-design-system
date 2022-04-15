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

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { children: 'Clickable Style', size: 'md' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { children: 'Clickable Style', size: 'sm' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Clickable Style', variant: 'secondary' };

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
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
      <Icon name="arrow-forward" purpose="decorative" />
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

export const Tertiary = Template.bind({});
Tertiary.args = { children: 'Clickable Style', variant: 'tertiary' };

export const TertiaryLeftIcon = Template.bind({});
TertiaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
  variant: 'tertiary',
};

export const TertiaryRightIcon = Template.bind({});
TertiaryRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'tertiary',
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  children: 'Clickable Style',
  variant: 'tertiary',
  size: 'md',
};

export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  children: 'Clickable Style',
  variant: 'tertiary',
  size: 'sm',
};

export const IconClickableStyleLeftIcon = Template.bind({});
IconClickableStyleLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
  variant: 'icon',
};

export const IconClickableStyleRightIcon = Template.bind({});
IconClickableStyleRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
};

export const IconClickableStyleIconOnly = Template.bind({});
IconClickableStyleIconOnly.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
};

export const IconClickableStyleLeftIconSmall = Template.bind({});
IconClickableStyleLeftIconSmall.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
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
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconClickableStyleIconOnlySmall = Template.bind({});
IconClickableStyleIconOnlySmall.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
  size: 'sm',
};

export const Link = Template.bind({});
Link.args = { children: 'Clickable Style', variant: 'link' };

export const LinkRightIcon = Template.bind({});
LinkRightIcon.args = {
  children: (
    <>
      Clickable Style
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
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

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
  variant: 'destructive',
};

export const FullWidth = Template.bind({});
FullWidth.args = { children: 'Clickable Style', fullWidth: true };
