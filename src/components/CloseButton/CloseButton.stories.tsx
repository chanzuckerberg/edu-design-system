import { StoryObj } from '@storybook/react';
import React from 'react';
import CloseButton from './CloseButton';

export default {
  title: 'Molecules/Buttons/CloseButton',
  component: CloseButton,
  args: {
    color: 'brand',
  },
};

type Args = React.ComponentProps<typeof CloseButton>;

export const Default: StoryObj<Args> = {};

export const Brand: StoryObj<Args> = {
  ...Default,
  args: {
    variant: 'brand',
  },
};

export const Success: StoryObj<Args> = {
  ...Default,
  args: {
    variant: 'success',
  },
};

export const Alert: StoryObj<Args> = {
  ...Default,
  args: {
    variant: 'alert',
  },
};

export const Warninig: StoryObj<Args> = {
  ...Default,
  args: {
    variant: 'warning',
  },
};

/* TODO(Icon): uncomment after Icon component is done */
// export const SmallerSize: StoryObj<Args> = {
//   ...Default,
//   args: {
//     iconSize: '1rem',
//   },
// };

export const CustomAriaLabel: StoryObj<Args> = {
  ...Default,
  args: {
    'aria-label': 'close modal',
  },
  parameters: {
    chromatic: {
      // This story is just for jest snapshot tests.
      disableSnapshot: true,
    },
  },
};
