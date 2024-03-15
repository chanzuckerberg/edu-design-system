import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { NumberIcon } from './NumberIcon-v2';

export default {
  title: 'Components/V2/NumberIcon',
  component: NumberIcon,
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
  args: {
    'aria-label': 'number icon example',
    number: 1,
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof NumberIcon>;
type Story = StoryObj<Args>;

export const Default: Story = {};

export const Sizes: Story = {
  args: {
    status: 'default',
  },
  render: (args) => {
    return (
      <>
        <NumberIcon number={2} size="md" {...args} />
        <NumberIcon number={3} size="lg" {...args} />
      </>
    );
  },
  decorators: [
    (Story) => <div className="flex flex-wrap gap-1">{Story()}</div>,
  ],
};

export const Completed: Story = {
  args: {
    ...Sizes.args,
    status: 'completed',
  },
  render: Sizes.render,
  decorators: Sizes.decorators,
};

export const Incomplete: Story = {
  args: {
    ...Sizes.args,
    status: 'incomplete',
  },
  render: Sizes.render,
  decorators: Sizes.decorators,
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
    badges: ['intro-1.0', 'current-2.0', 'implementationExample'],
  },
  render: () => (
    <div className="flex flex-wrap gap-1">
      <NumberIcon aria-label="Item 1" number={1} size="md" />
      <NumberIcon aria-label="Item 2" number={2} size="md" />
      <NumberIcon aria-label="Item 3" number={3} size="md" />
      <NumberIcon aria-label="Item 4" number={4} size="md" />
      <NumberIcon aria-label="Item 5" number={5} size="md" />
      <NumberIcon aria-label="Item 6" number={6} size="md" />
    </div>
  ),
};
