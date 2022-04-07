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
        purpose="informative"
        title="opens in a new tab"
        name="open-in-new"
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
      <Icon purpose="decorative" name="arrow-back" />
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
      <Icon purpose="decorative" name="arrow-forward" />
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
      <Icon purpose="decorative" name="arrow-back" />
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
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { children: 'Link', variant: 'secondary', size: 'md' };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { children: 'Link', variant: 'secondary', size: 'sm' };

export const Teritary = Template.bind({});
Teritary.args = { children: 'Link', variant: 'tertiary' };

export const TeritaryLeftIcon = Template.bind({});
TeritaryLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Link
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryRightIcon = Template.bind({});
TeritaryRightIcon.args = {
  children: (
    <>
      Link
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'tertiary',
};

export const TeritaryMedium = Template.bind({});
TeritaryMedium.args = { children: 'Link', variant: 'tertiary', size: 'md' };

export const TeritarySmall = Template.bind({});
TeritarySmall.args = { children: 'Link', variant: 'tertiary', size: 'sm' };

export const IconLinkLeftIcon = Template.bind({});
IconLinkLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
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
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
};

export const IconLinkIconOnly = Template.bind({});
IconLinkIconOnly.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
};

export const IconLinkLeftIconSmall = Template.bind({});
IconLinkLeftIconSmall.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
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
      <Icon purpose="decorative" name="arrow-forward" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconLinkIconOnlySmall = Template.bind({});
IconLinkIconOnlySmall.args = {
  children: <Icon purpose="informative" title="go back" name="arrow-back" />,
  variant: 'icon',
  size: 'sm',
};

export const Destructive = Template.bind({});
Destructive.args = { children: 'Link', variant: 'destructive' };

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon purpose="decorative" name="arrow-back" />
      Link
    </>
  ),
  variant: 'destructive',
};
