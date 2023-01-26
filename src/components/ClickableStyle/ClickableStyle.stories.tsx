import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { ClickableStyle, STATUSES, VARIANTS } from './ClickableStyle';

export default {
  title: 'Components/ClickableStyle',
  component: ClickableStyle,
  args: {
    status: 'brand',
    variant: 'primary',
    as: 'a',
  },
  parameters: {
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
