import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import { ClickableStyle, SIZES, STATUSES, VARIANTS } from './ClickableStyle';
import Icon from '../Icon';

export default {
  title: 'Components/ClickableStyle',
  component: ClickableStyle,
  args: {
    status: 'brand',
    variant: 'primary',
    as: 'a',
    children: 'example text',
  },
  parameters: {
    badges: ['1.0'],
    layout: 'centered',
    controls: { expand: true },
  },
  argTypes: {
    status: {
      options: STATUSES,
      control: { type: 'radio' },
    },
    variant: {
      options: VARIANTS,
      control: { type: 'radio' },
    },
    as: {
      options: ['a', 'button'],
      control: { type: 'radio' },
    },
    size: {
      control: {
        type: 'select',
      },
      options: SIZES,
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof ClickableStyle>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'link',
  },
};

type ExampleProps = {
  to: string;
};
const CustomElement = ({ to, ...rest }: ExampleProps) => (
  <button
    onClick={() => {
      console.log(`trigger route to ${to}`);
    }}
    {...rest}
  >
    Example Component
  </button>
);

export const WithCustomElement: StoryObj<Args> = {
  args: {
    children: 'using custom element',
    as: CustomElement,
    to: '/home',
  },
  argTypes: {
    as: {
      control: false,
    },
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

export const TertiaryDisabled: StoryObj<Args> = {
  args: {
    status: 'neutral',
    disabled: true,
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

export const Link: StoryObj<Args> = {
  args: { variant: 'link' },
};

export const LinkDisabled: StoryObj<Args> = {
  args: { variant: 'link', disabled: true },
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
