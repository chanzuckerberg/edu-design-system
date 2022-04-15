import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ClickableStyle } from './ClickableStyle';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/ClickableStyle',
  component: ClickableStyle,
} as Meta;

type Args = React.ComponentProps<typeof ClickableStyle>;

const Template: Story<Args> = (args) => (
  <ClickableStyle {...args} as="button" />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Clickable Style',
  status: 'brand',
  variant: 'primary',
};

export const PrimaryAlert = Template.bind({});
PrimaryAlert.args = {
  children: 'Clickable Style',
  status: 'alert',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Clickable Style',
  status: 'brand',
  variant: 'secondary',
};

export const SecondaryNeutral = Template.bind({});
SecondaryNeutral.args = {
  children: 'Clickable Style',
  status: 'neutral',
  variant: 'secondary',
};

export const SecondarySuccess = Template.bind({});
SecondarySuccess.args = {
  children: 'Clickable Style',
  status: 'success',
  variant: 'secondary',
};

export const SecondaryWarning = Template.bind({});
SecondaryWarning.args = {
  children: 'Clickable Style',
  status: 'warning',
  variant: 'secondary',
};

export const SecondaryAlert = Template.bind({});
SecondaryAlert.args = {
  children: 'Clickable Style',
  status: 'alert',
  variant: 'secondary',
};

export const IconBrand = Template.bind({});
IconBrand.args = {
  children: 'Clickable Style',
  status: 'brand',
  variant: 'icon',
};

export const IconNeutral = Template.bind({});
IconNeutral.args = {
  children: 'Clickable Style',
  status: 'neutral',
  variant: 'icon',
};

export const IconSuccess = Template.bind({});
IconSuccess.args = {
  children: 'Clickable Style',
  status: 'success',
  variant: 'icon',
};

export const IconWarning = Template.bind({});
IconWarning.args = {
  children: 'Clickable Style',
  status: 'warning',
  variant: 'icon',
};

export const IconAlert = Template.bind({});
IconAlert.args = {
  children: 'Clickable Style',
  status: 'alert',
  variant: 'icon',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Clickable Style',
  status: 'brand',
  variant: 'link',
};

export const LinkNeutral = Template.bind({});
LinkNeutral.args = {
  children: 'Clickable Style',
  status: 'neutral',
  variant: 'link',
};

export const LinkSuccess = Template.bind({});
LinkSuccess.args = {
  children: 'Clickable Style',
  status: 'success',
  variant: 'link',
};

export const LinkWarning = Template.bind({});
LinkWarning.args = {
  children: 'Clickable Style',
  status: 'warning',
  variant: 'link',
};

export const LinkAlert = Template.bind({});
LinkAlert.args = {
  children: 'Clickable Style',
  status: 'alert',
  variant: 'link',
};
