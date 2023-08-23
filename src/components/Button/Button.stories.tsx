import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { SIZES, STATUSES, VARIANTS } from '../ClickableStyle';

import Icon from '../Icon';

export default {
  title: 'Components/Button',
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
    loading: {
      control: 'boolean',
    },
  },
  parameters: {
    badges: ['1.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Button>;

export const Default: StoryObj<Args> = {
  args: {
    variant: 'secondary',
  },
};

export const Primary: StoryObj<Args> = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryDisabled: StoryObj<Args> = {
  args: {
    disabled: true,
    variant: 'primary',
  },
};

export const PrimaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
    variant: 'primary',
  },
};

export const PrimaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Button
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'primary',
  },
};

export const PrimaryMedium: StoryObj<Args> = {
  args: {
    size: 'md',
    variant: 'primary',
  },
};

export const PrimarySmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    variant: 'primary',
  },
};

export const SecondaryDisabled: StoryObj<Args> = {
  args: {
    disabled: true,
  },
};

export const SecondaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
  },
};

export const SecondaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Button
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
  },
};

export const SecondaryMedium: StoryObj<Args> = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondarySmall: StoryObj<Args> = {
  args: { variant: 'secondary', size: 'sm' },
};

export const Tertiary: StoryObj<Args> = {
  args: {
    status: 'neutral',
  },
};

export const TertiaryDisabled: StoryObj<Args> = {
  args: {
    status: 'neutral',
    disabled: true,
  },
};

export const TertiaryLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
    status: 'neutral',
  },
};

export const TertiaryRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Button
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

export const IconButtonLeftIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
    variant: 'icon',
  },
};

export const IconButtonDisabled: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
    variant: 'icon',
    disabled: true,
  },
};

export const IconButtonRightIcon: StoryObj<Args> = {
  args: {
    children: (
      <>
        Button
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'icon',
  },
};

export const IconButtonIconOnly: StoryObj<Args> = {
  args: {
    children: <Icon name="arrow-back" purpose="informative" title="go back" />,
    variant: 'icon',
  },
};

export const IconButtonLeftIconSmall: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Icon name="arrow-back" purpose="decorative" />
        Button
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const IconButtonRightIconSmall: StoryObj<Args> = {
  args: {
    children: (
      <>
        Button
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    variant: 'icon',
    size: 'sm',
  },
};

export const IconButtonIconOnlySmall: StoryObj<Args> = {
  args: {
    children: <Icon name="arrow-back" purpose="informative" title="go back" />,
    variant: 'icon',
    size: 'sm',
  },
};

export const Link: StoryObj<Args> = {
  args: { variant: 'link' },
};

export const LinkDisabled: StoryObj<Args> = {
  args: { variant: 'link', disabled: true },
};

export const LinkRightIcon: StoryObj<Args> = {
  args: {
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
  },
};

export const LinkNeutral: StoryObj<Args> = {
  args: {
    status: 'neutral',
    variant: 'link',
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
        Button
      </>
    ),
    status: 'error',
    variant: 'primary',
  },
};

export const FullWidth: StoryObj<Args> = {
  args: { fullWidth: true },
};

export const Loading: StoryObj<Args> = {
  args: {
    loading: true,
    disabled: true,
  },
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
        Button
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
        Button
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
        Button
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
        Button
        <Icon name="arrow-forward" purpose="decorative" />
      </>
    ),
    status: 'error',
    variant: 'icon',
  },
};
