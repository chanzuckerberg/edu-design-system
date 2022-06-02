import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Link, LinkProps } from './Link';
import getRandomUrl from '../../util/getRandomUrl';
import '../../util/removeRandomizedUrlJestSerializer';

import Icon from '../Icon';

export default {
  title: 'Molecules/Buttons/Link',
  component: Link,
  args: {
    children: 'Link',
    variant: 'secondary',
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

const Template: Story<LinkProps> = (args) => (
  <Link
    // Use a randomized valid href so the link will be in an unvisited state when you load the page,
    // and you can click the link to see the visited state.
    href={getRandomUrl()}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = { variant: 'link' };

export const LinkNeutral = Template.bind({});
LinkNeutral.args = {
  status: 'neutral',
  variant: 'link',
};

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

export const LinkInBodyText = () => (
  <>
    Lorem ipsum dolor sit amet, <Link href={getRandomUrl()}>consectetur</Link>{' '}
    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation{' '}
    <Link href={getRandomUrl()}>ullamco laboris</Link> nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt{' '}
    <Link href={getRandomUrl()}>mollitanim</Link> id est laborum.
  </>
);

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

export const SecondaryLeftIcon = Template.bind({});
SecondaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
};

export const SecondaryRightIcon = Template.bind({});
SecondaryRightIcon.args = {
  children: (
    <>
      Link
      <Icon name="arrow-forward" purpose="decorative" />
    </>
  ),
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  size: 'md',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  size: 'sm',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  status: 'neutral',
};

export const TertiaryLeftIcon = Template.bind({});
TertiaryLeftIcon.args = {
  children: (
    <>
      <Icon name="arrow-back" purpose="decorative" />
      Link
    </>
  ),
  status: 'neutral',
};

export const TertiaryRightIcon = Template.bind({});
TertiaryRightIcon.args = {
  children: (
    <>
      Link
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
  status: 'error',
  variant: 'primary',
};

export const DestructiveLeftIcon = Template.bind({});
DestructiveLeftIcon.args = {
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
FullWidth.args = { fullWidth: true, variant: 'secondary' };

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
