import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'secondary',
    status: 'brand',
    fullWidth: false,
    size: 'lg',
    loading: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'icon', 'link'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['brand', 'neutral', 'success', 'warning', 'error'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    fullWidth: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} as Meta;

type Args = React.ComponentProps<typeof Button>;

const Template: Story<Args> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { variant: 'secondary' };

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  disabled: true,
  variant: 'primary',
};

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
  variant: 'primary',
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'primary',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { size: 'md', variant: 'primary' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { size: 'sm', variant: 'primary' };

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  disabled: true,
};

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
};

export const SecondaryRightIcon = Template.bind({});
SecondaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { variant: 'secondary', size: 'md' };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { variant: 'secondary', size: 'sm' };

export const Tertiary = Template.bind({});
Tertiary.args = {
  status: 'neutral',
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  status: 'neutral',
  disabled: true,
};

export const TertiaryLeftIcon = Template.bind({});
TertiaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
  status: 'neutral',
};

export const TertiaryRightIcon = Template.bind({});
TertiaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  status: 'neutral',
};

export const TertiaryMedium = Template.bind({});
TertiaryMedium.args = {
  status: 'neutral',
  size: 'md',
};

export const TertiarySmall = Template.bind({});
TertiarySmall.args = {
  status: 'neutral',
  size: 'sm',
};

export const IconButtonLeftIcon = Template.bind({});
IconButtonLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
  variant: 'icon',
};

export const IconButtonDisabled = Template.bind({});
IconButtonDisabled.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
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
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
};

export const IconButtonIconOnly = Template.bind({});
IconButtonIconOnly.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
};

export const IconButtonLeftIconSmall = Template.bind({});
IconButtonLeftIconSmall.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
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
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconButtonIconOnlySmall = Template.bind({});
IconButtonIconOnlySmall.args = {
  children: <Icon name="arrow-back" purpose="informative" title="go back" />,
  variant: 'icon',
  size: 'sm',
};

export const Link = Template.bind({});
Link.args = { variant: 'link' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { variant: 'link', disabled: true };

export const LinkRightIcon = Template.bind({});
LinkRightIcon.args = {
  children: (
    <>
      Button
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
  status: 'error',
  variant: 'primary',
};

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
  status: 'error',
  variant: 'primary',
};

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  disabled: true,
};

export const SecondarySuccess = Template.bind({});
SecondarySuccess.args = {
  status: 'success',
};

export const SecondaryWarning = Template.bind({});
SecondaryWarning.args = {
  status: 'warning',
};

export const SecondaryError = Template.bind({});
SecondaryError.args = {
  status: 'error',
};

export const IconNeutral = Template.bind({});
IconNeutral.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  status: 'neutral',
  variant: 'icon',
};

export const IconSuccess = Template.bind({});
IconSuccess.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  status: 'success',
  variant: 'icon',
};

export const IconWarning = Template.bind({});
IconWarning.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  status: 'warning',
  variant: 'icon',
};

export const IconError = Template.bind({});
IconError.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  status: 'error',
  variant: 'icon',
};

export const LinkNeutral = Template.bind({});
LinkNeutral.args = {
  status: 'neutral',
  variant: 'link',
};

export const LinkSuccess = Template.bind({});
LinkSuccess.args = {
  status: 'success',
  variant: 'link',
};

export const LinkWarning = Template.bind({});
LinkWarning.args = {
  status: 'warning',
  variant: 'link',
};

export const LinkError = Template.bind({});
LinkError.args = {
  status: 'error',
  variant: 'link',
};
