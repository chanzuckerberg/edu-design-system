import { StoryObj } from '@storybook/react';
import React from 'react';

import { NumberIcon } from './NumberIcon';

export default {
  title: 'Atoms/Icons/NumberIcon',
  component: NumberIcon,
  args: {
    'aria-label': '1',
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
      <NumberIcon {...args} aria-label="0" number={0} />
      <NumberIcon {...args} aria-label="1" number={1} />
      <NumberIcon {...args} aria-label="2" number={2} />
      <NumberIcon {...args} aria-label="3" number={3} />
      <NumberIcon {...args} aria-label="4" number={4} />
      <NumberIcon {...args} aria-label="5" number={5} />
      <NumberIcon {...args} aria-label="6" number={6} />
      <NumberIcon {...args} aria-label="7" number={7} />
      <NumberIcon {...args} aria-label="8" number={8} />
      <NumberIcon {...args} aria-label="9" number={9} />
      <NumberIcon {...args} aria-label="10" number={10} />
      <NumberIcon {...args} aria-label="21" number={21} />
      <NumberIcon {...args} aria-label="32" number={32} />
      <NumberIcon {...args} aria-label="43" number={43} />
      <NumberIcon {...args} aria-label="54" number={54} />
      <NumberIcon {...args} aria-label="65" number={65} />
      <NumberIcon {...args} aria-label="76" number={76} />
      <NumberIcon {...args} aria-label="87" number={87} />
      <NumberIcon {...args} aria-label="98" number={98} />
    </div>
  ),
};
