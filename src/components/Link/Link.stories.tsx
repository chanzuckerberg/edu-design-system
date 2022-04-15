import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Link, Props } from './Link';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Link',
  component: Link,
} as Meta;

const Template: Story<Props> = (args) => (
  <Link
    href="/"
    // stop link from navigating to another page so we can click the link for testing
    onClick={(event) => event.preventDefault()}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = { children: 'Link', variant: 'link' };

export const LinkRightIcon = Template.bind({});
LinkRightIcon.args = {
  children: (
    <>
      Link
      <Icon
        name="open-in-new"
        purpose="informative"
        title="opens in a new tab"
      />
    </>
  ),
  variant: 'link',
};

export const Primary = Template.bind({});
Primary.args = { children: 'Link', variant: 'primary' };

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'primary',
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'primary',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { children: 'Link', size: 'md', variant: 'primary' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { children: 'Link', size: 'sm', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Link', variant: 'secondary' };

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'secondary',
};

export const SecondaryRightIcon = Template.bind({});
SecondaryRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { children: 'Link', variant: 'secondary', size: 'md' };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { children: 'Link', variant: 'secondary', size: 'sm' };

export const Tertiary = Template.bind({});
Tertiary.args = { children: 'Link', variant: 'tertiary' };

export const TertiaryLeftIcon = Template.bind({});
TertiaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'tertiary',
};

export const TertiaryRightIcon = Template.bind({});
TertiaryRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'tertiary',
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = { children: 'Link', variant: 'tertiary', size: 'md' };

export const TertiarySmall = Template.bind({});
TertiarySmall.args = { children: 'Link', variant: 'tertiary', size: 'sm' };

export const IconLinkLeftIcon = Template.bind({});
IconLinkLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'icon',
};

export const IconLinkRightIcon = Template.bind({});
IconLinkRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
};

export const IconLinkIconOnly = Template.bind({});
IconLinkIconOnly.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
};

export const IconLinkLeftIconSmall = Template.bind({});
IconLinkLeftIconSmall.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconLinkRightIconSmall = Template.bind({});
IconLinkRightIconSmall.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconLinkIconOnlySmall = Template.bind({});
IconLinkIconOnlySmall.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
  size: 'sm',
};

export const Destructive = Template.bind({});
Destructive.args = { children: 'Link', variant: 'destructive' };

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'destructive',
};
