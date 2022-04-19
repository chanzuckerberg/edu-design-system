import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Link, Props } from './Link';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Link',
  component: Link,
  args: {
    children: 'Link',
    variant: 'primary',
    status: 'brand',
    fullWidth: false,
    size: 'lg',
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
  },
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
Default.args = { variant: 'link' };

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
Primary.args = { variant: 'primary' };

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
PrimaryMedium.args = { size: 'md', variant: 'primary' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { size: 'sm', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

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
SecondaryMedium.args = {
  variant: 'secondary',
  size: 'md',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'sm',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Link',
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralLeftIcon = Template.bind({});
SecondaryNeutralLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralRightIcon = Template.bind({});
SecondaryNeutralRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralMedium = Template.bind({});
SecondaryNeutralMedium.args = {
  variant: 'secondary',
  status: 'neutral',
  size: 'md',
};

export const SecondaryNeutralSmall = Template.bind({});
SecondaryNeutralSmall.args = {
  variant: 'secondary',
  status: 'neutral',
  size: 'sm',
};

export const IconClickableStyleLeftIcon = Template.bind({});
IconClickableStyleLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  variant: 'icon',
};

export const IconClickableStyleRightIcon = Template.bind({});
IconClickableStyleRightIcon.args = {
  children: (
    <>
      Link
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
      Link
    </>
  ),
  variant: 'icon',
  size: 'sm',
};

export const IconClickableStyleRightIconSmall = Template.bind({});
IconClickableStyleRightIconSmall.args = {
  children: (
    <>
      Link
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

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Link',
  status: 'error',
  variant: 'primary',
};

export const PrimaryErrorLeftIcon = Template.bind({});
PrimaryErrorLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  status: 'error',
  variant: 'primary',
};

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true, variant: 'primary' };

export const SecondarySuccess = Template.bind({});
SecondarySuccess.args = {
  status: 'success',
  variant: 'secondary',
};

export const SecondaryWarning = Template.bind({});
SecondaryWarning.args = {
  status: 'warning',
  variant: 'secondary',
};

export const SecondaryError = Template.bind({});
SecondaryError.args = {
  status: 'error',
  variant: 'secondary',
};

export const IconNeutral = Template.bind({});
IconNeutral.args = {
  children: (
    <>
      Link
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
      Link
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
      Link
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
      Link
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
