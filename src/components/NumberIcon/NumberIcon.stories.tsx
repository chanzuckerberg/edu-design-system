import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { NumberIcon } from './NumberIcon';

export default {
  title: 'Components/NumberIcon',
  component: NumberIcon,
  parameters: {
    badges: ['1.0'],
  },
  args: {
    'aria-label': 'Step 1',
    number: 1,
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof NumberIcon>;

export const Default: StoryObj<Args> = {};

export const Small: StoryObj<Args> = {
  args: {
    size: 'sm',
  },
};

export const Success: StoryObj<Args> = {
  args: {
    variant: 'success',
  },
};

export const SuccessSmall: StoryObj<Args> = {
  args: {
    size: 'sm',
    variant: 'success',
  },
};

export const DifferentNumbers: StoryObj<Args> = {
  /**
   * Disables controls for args that have no affect on this story
   */
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

export const NumberIconList: StoryObj<Args> = {
  parameters: {
    badges: ['1.0', 'implementationExample'],
  },
  render: () => (
    <div className="flex flex-wrap gap-1">
      <NumberIcon aria-label="Item 1" number={1} size="sm" />
      <NumberIcon
        aria-label="Item 2"
        incomplete
        number={2}
        numberIconTitle="incomplete step 2"
        size="sm"
      />
      <NumberIcon aria-label="Item 3" number={3} size="sm" />
      <NumberIcon
        aria-label="Item 4"
        incomplete
        number={4}
        numberIconTitle="incomplete step 4"
        size="sm"
      />
      <NumberIcon
        aria-label="Item 5"
        incomplete
        number={5}
        numberIconTitle="incomplete step 5"
        size="sm"
      />
      <NumberIcon
        aria-label="Item 6"
        incomplete
        number={6}
        numberIconTitle="incomplete step 6"
        size="sm"
      />
    </div>
  ),
};
