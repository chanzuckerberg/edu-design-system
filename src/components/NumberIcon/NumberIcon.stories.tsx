import { StoryObj } from '@storybook/react';
import React from 'react';

import { NumberIcon } from './NumberIcon';

export default {
  title: 'Atoms/Icons/NumberIcon',
  component: NumberIcon,
  args: {
    'aria-label': 'Step 1',
    number: '1',
  },
};

type Args = React.ComponentProps<typeof NumberIcon>;

export const Default: StoryObj<Args> = {};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const SuccessLarge: StoryObj<Args> = {
  args: {
    size: 'lg',
    variant: 'success',
  },
};

export const SuccessSmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    variant: 'success',
  },
};

/**
 * 1) Disables controls for args that have no affect on this story
 */
export const DifferentNumbers: StoryObj<Args> = {
  /* 1 */
  argTypes: {
    number: {
      table: {
        disable: true,
      },
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    'aria-labelledby': {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <div>
      <NumberIcon {...args} aria-label="Step 0" number={0} />
      <NumberIcon {...args} aria-label="Step 1" number={1} />
      <NumberIcon {...args} aria-label="Step 2" number={2} />
      <NumberIcon {...args} aria-label="Step 3" number={3} />
      <NumberIcon {...args} aria-label="Step 4" number={4} />
      <NumberIcon {...args} aria-label="Step 5" number={5} />
      <NumberIcon {...args} aria-label="Step 6" number={6} />
      <NumberIcon {...args} aria-label="Step 7" number={7} />
      <NumberIcon {...args} aria-label="Step 8" number={8} />
      <NumberIcon {...args} aria-label="Step 9" number={9} />
      <NumberIcon {...args} aria-label="Step 10" number={10} />
      <NumberIcon {...args} aria-label="Step 21" number={21} />
      <NumberIcon {...args} aria-label="Step 32" number={32} />
      <NumberIcon {...args} aria-label="Step 43" number={43} />
      <NumberIcon {...args} aria-label="Step 54" number={54} />
      <NumberIcon {...args} aria-label="Step 65" number={65} />
      <NumberIcon {...args} aria-label="Step 76" number={76} />
      <NumberIcon {...args} aria-label="Step 87" number={87} />
      <NumberIcon {...args} aria-label="Step 98" number={98} />
    </div>
  ),
};
