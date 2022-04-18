import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ClickableStyle } from './ClickableStyle';
import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/ClickableStyle',
  component: ClickableStyle,
  args: {
    children: 'Clickable Style',
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

type Args = React.ComponentProps<typeof ClickableStyle>;

const Template: Story<Args> = (args: Args) => (
  <ClickableStyle {...args} as="button" />
);

export const Primary = Template.bind({});

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
PrimaryMedium.args = { size: 'md' };

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { size: 'sm' };

export const Secondary = Template.bind({});
Secondary.args = { variant: 'secondary' };

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
  children: 'Clickable Style',
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralLeftIcon = Template.bind({});
SecondaryNeutralLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
  variant: 'secondary',
  status: 'neutral',
};

export const SecondaryNeutralRightIcon = Template.bind({});
SecondaryNeutralRightIcon.args = {
  children: (
    <>
      Clickable Style
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
Link.args = { variant: 'link' };

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
  status: 'error',
  variant: 'primary',
};

export const PrimaryErrorLeftIcon = Template.bind({});
PrimaryErrorLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Clickable Style
    </>
  ),
  status: 'error',
  variant: 'primary',
};

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };

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
      Clickable Style
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
      Clickable Style
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
      Clickable Style
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
      Clickable Style
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
