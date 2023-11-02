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
type Story = StoryObj<Args>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const SuccessSmall: Story = {
  args: {
    size: 'sm',
    variant: 'success',
  },
};

/**
 * When `incomplete` is defined and there is a `numberIconTitle` on the circle icon, then this will render
 * the proper icon with the incomplete text provided foro that component instance.
 */
export const Incomplete: Story = {
  args: {
    size: 'sm',
    incomplete: true,
    number: undefined,
    numberIconTitle: 'Incomplete',
  },
};

/**
 * `NumberIcon` supports individual digits, with a maximum of two digits. By default,
 * they are positioned as block-level elements. use `flex` or `display` to update positioning.
 */
export const DifferentNumbers: Story = {
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
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 32, 43, 54, 65, 76, 87, 98].map(
        (number) => (
          <NumberIcon
            key={number}
            {...args}
            aria-label={`Step ${number}`}
            number={number}
          />
        ),
      )}
    </div>
  ),
};

/**
 * This Implementation example shows how to use Number Icon to build a stepper-like component.
 *
 * - incomplete rows are aligned with each number icon to show progress
 */
export const NumberIconList: Story = {
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
