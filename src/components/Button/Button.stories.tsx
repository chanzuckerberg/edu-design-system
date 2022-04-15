import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
} as Meta;

type Args = React.ComponentProps<typeof Button>;

const Template: Story<Args> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: 'Button' };

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = { children: 'Button', disabled: true };

export const PrimaryLeftIcon = Template.bind({});
PrimaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
};

export const PrimaryRightIcon = Template.bind({});
PrimaryRightIcon.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = { children: 'Button', size: 'md' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { children: 'Button', size: 'sm' };

export const Secondary = Template.bind({});
Secondary.args = { children: 'Button', variant: 'secondary' };

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
      <Icon name="arrow-back" purpose="decorative" />
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
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'secondary',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = { children: 'Button', variant: 'secondary', size: 'md' };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { children: 'Button', variant: 'secondary', size: 'sm' };

export const SecondaryNeutral = Template.bind({});
SecondaryNeutral.args = {
  children: 'Button',
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralDisabled = Template.bind({});
SecondaryNeutralDisabled.args = {
  children: 'Button',
  variant: 'secondary',
  status: 'neutral',
  disabled: true,
};

export const SecondaryNeutralLeftIcon = Template.bind({});
SecondaryNeutralLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Button
    </>
  ),
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralRightIcon = Template.bind({});
SecondaryNeutralRightIcon.args = {
  children: (
    <>
      Button
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralMedium = Template.bind({});
SecondaryNeutralMedium.args = {
  children: 'Button',
  variant: 'secondary',
  status: 'neutral',
  size: 'md',
};

export const SecondaryNeutralSmall = Template.bind({});
SecondaryNeutralSmall.args = {
  children: 'Button',
  variant: 'secondary',
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
Link.args = { children: 'Button', variant: 'link' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { children: 'Button', variant: 'link', disabled: true };

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

export const PrimaryError = Template.bind({});
PrimaryError.args = {
  children: 'Button',
  status: 'error',
  variant: 'primary',
};

export const PrimaryErrorLeftIcon = Template.bind({});
PrimaryErrorLeftIcon.args = {
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
FullWidth.args = { children: 'Button', fullWidth: true };

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
  disabled: true,
};

export const SecondarySuccess = Template.bind({});
SecondarySuccess.args = {
  children: 'Button',
  status: 'success',
  variant: 'secondary',
};

export const SecondaryWarning = Template.bind({});
SecondaryWarning.args = {
  children: 'Button',
  status: 'warning',
  variant: 'secondary',
};

export const SecondaryError = Template.bind({});
SecondaryError.args = {
  children: 'Button',
  status: 'error',
  variant: 'secondary',
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
  children: 'Button',
  status: 'neutral',
  variant: 'link',
};

export const LinkSuccess = Template.bind({});
LinkSuccess.args = {
  children: 'Button',
  status: 'success',
  variant: 'link',
};

export const LinkWarning = Template.bind({});
LinkWarning.args = {
  children: 'Button',
  status: 'warning',
  variant: 'link',
};

export const LinkError = Template.bind({});
LinkError.args = {
  children: 'Button',
  status: 'error',
  variant: 'link',
};
