import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Link } from './Link';
import { SIZES, STATUSES, VARIANTS } from '../ClickableStyle';

import Icon from '../Icon';

export default {
  title: 'Components/Link',
  component: Link,
  args: {
    children: 'Link',
    variant: 'secondary',
    status: 'brand',
    fullWidth: false,
    size: 'lg',
    href: 'https://go.czi.team/eds',
    // stop link from navigating to another page so we can click the link for testing
    onClick: (event: any) => event.preventDefault(),
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: VARIANTS,
    },
    status: {
      control: {
        type: 'select',
      },
      options: STATUSES,
    },
    size: {
      control: {
        type: 'select',
      },
      options: SIZES,
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Link>;

export const Default: StoryObj<Args> = {
  args: { variant: 'link' },
};

export const LinkRightIcon: StoryObj<Args> = {
  args: {
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
  },
};

export const LinkNeutral: StoryObj<Args> = {
  args: {
    status: 'neutral',
    variant: 'link',
  },
};

export const Primary: StoryObj<Args> = {
  args: { variant: 'primary' },
};

export const PrimaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
    variant: 'primary',
  },
};

export const PrimaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'primary',
  },
};

export const PrimaryMedium: StoryObj<Args> = {
  args: { size: 'md', variant: 'primary' },
};

export const PrimarySmall: StoryObj<Args> = {
  args: { size: 'sm', variant: 'primary' },
};

export const Secondary: StoryObj<Args> = {};

export const SecondaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
  },
};

export const SecondaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
  },
};

export const SecondaryMedium: StoryObj<Args> = {
  args: {
    size: 'md',
  },
};

export const SecondarySmall: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Tertiary: StoryObj<Args> = {
  args: {
    status: 'neutral',
  },
};

export const TertiaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
    status: 'neutral',
  },
};

export const TertiaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'neutral',
  },
};

export const TertiaryMedium: StoryObj<Args> = {
  args: {
    status: 'neutral',
    size: 'md',
  },
};

export const TertiarySmall: StoryObj<Args> = {
  args: {
    status: 'neutral',
    size: 'sm',
  },
};

export const IconClickableStyleLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
    variant: 'icon',
  },
};

export const IconClickableStyleRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'icon',
  },
};

export const IconClickableStyleIconOnly: StoryObj<Args> = {
  args: {
    children: <Icon name="arrow-back" purpose="informative" title="go back" />,
    variant: 'icon',
  },
};

export const IconClickableStyleLeftIconSmall: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const IconClickableStyleRightIconSmall: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const IconClickableStyleIconOnlySmall: StoryObj<Args> = {
  args: {
    children: <Icon name="arrow-back" purpose="informative" title="go back" />,
    variant: 'icon',
    size: 'sm',
  },
};

export const Destructive: StoryObj<Args> = {
  args: {
    status: 'error',
    variant: 'primary',
  },
};

export const DestructiveLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Link
      </>
    ),
    status: 'error',
    variant: 'primary',
  },
};

export const FullWidth: StoryObj<Args> = {
  args: { fullWidth: true, variant: 'secondary' },
};

export const SecondarySuccess: StoryObj<Args> = {
  args: {
    status: 'success',
  },
};

export const SecondaryWarning: StoryObj<Args> = {
  args: {
    status: 'warning',
  },
};

export const SecondaryError: StoryObj<Args> = {
  args: {
    status: 'error',
  },
};

export const IconNeutral: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'neutral',
    variant: 'icon',
  },
};

export const IconSuccess: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'success',
    variant: 'icon',
  },
};

export const IconWarning: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'warning',
    variant: 'icon',
  },
};

export const IconError: StoryObj<Args> = {
  args: {
    children: (
      <>
        Link
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'error',
    variant: 'icon',
  },
};

export const LinkInParagraphContext = {
  render: () => (
    <div>
      Lorem ipsum dolor sit amet,{' '}
      <Link href="https://go.czi.team/eds">consectetur adipiscing elit</Link>.
      Morbi porta at ante quis molestie. Nam scelerisque id diam at iaculis.
      Nullam sit amet iaculis erat. Nulla id tellus ante.{' '}
      <Link href="https://go.czi.team/eds">
        Aliquam pellentesque ipsum sagittis, commodo neque at, ornare est.
        Maecenas a malesuada sem, vitae euismod erat. Nullam molestie nunc non
        dui dignissim fermentum.
      </Link>{' '}
      Aliquam id volutpat nulla, sed auctor orci. Fusce cursus leo nisi. Fusce
      vehicula vitae nisl nec ultricies. Cras ut enim nec magna semper egestas.
      Sed sed quam id nisl bibendum convallis. Proin suscipit, odio{' '}
      <Link href="https://go.czi.team/eds">vel pulvinar</Link> euismod, risus
      eros ullamcorper lectus, non blandit nulla dui eget massa.
    </div>
  ),
};
