import type { StoryObj, Meta } from '@storybook/react-webpack5';
import React, { useState } from 'react';

import { Counter } from './Counter';
import Input from '../Input';

/**
 * Drives the counter from a live field, the way the field components do, so the count can be
 * watched as it changes and crosses its total. `count` comes from the field rather than the
 * story args here.
 */
const InteractiveCounter = ({ count, ...other }: Args) => {
  const [value, setValue] = useState('Some initial text');

  return (
    <div className="flex w-[384px] flex-col gap-spacing-size-1">
      <Input
        aria-label="Type to change the count"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <Counter count={value.length} {...other} />
    </div>
  );
};

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    docs: {
      subtitle:
        'A current count against its total, as a fraction or a percentage. Internal to the components that show a counting construction; not exported from the package.',
    },
    layout: 'centered',
  },
  args: {
    count: 3,
    total: 10,
  },
  tags: ['autodocs', 'beta', 'ai', 'version:1.0.0'],
};

export default meta;

type Args = React.ComponentProps<typeof Counter>;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {};

/**
 * A count of zero is still shown, so the total is visible before the user types anything.
 */
export const EmptyCount: Story = {
  args: {
    count: 0,
  },
};

/**
 * Reaching the total is a valid state, so the count keeps the default treatment.
 */
export const AtTotal: Story = {
  args: {
    count: 10,
  },
};

/**
 * Once the count goes past the total, the count switches to the critical treatment. The total
 * stays as-is; it is the limit being violated, not the thing in error. Fields allow this when
 * they use `recommendedMaxLength`, which lets the user keep typing past the count shown.
 */
export const OverTotal: Story = {
  args: {
    count: 12,
  },
};

/**
 * A total of zero leaves every count above it invalid. Fields avoid this by hiding the counter
 * when no length is set, but the counter still renders it consistently.
 */
export const ZeroTotal: Story = {
  args: {
    count: 3,
    total: 0,
  },
};

/**
 * A negative total is not a state a field can reach. The counter renders what it is given and
 * logs a development warning rather than guessing at a correction.
 */
export const NegativeTotal: Story = {
  args: {
    count: 3,
    total: -10,
  },
};

/**
 * The count updates as the user types, and picks up the critical treatment as soon as it passes
 * the total.
 */
export const CountChanging: Story = {
  render: (args) => <InteractiveCounter {...args} />,
  args: {
    total: 20,
  },
};

/**
 * The same `count` and `total` can be reported as a share of the total instead of a fraction,
 * using the whole-percentage format `ProgressBar` uses.
 */
export const Percentage: Story = {
  args: {
    variant: 'percentage',
  },
};

/**
 * Percentages carry no decimals, so a count that doesn't divide evenly rounds to the nearest
 * whole number (here, 1 of 3 reads as `33%`).
 */
export const PercentageRounded: Story = {
  args: {
    count: 1,
    total: 3,
    variant: 'percentage',
  },
};

/**
 * Going over the total reads as more than 100%, and takes the same critical treatment as the
 * fraction variant.
 */
export const PercentageOverTotal: Story = {
  args: {
    count: 12,
    variant: 'percentage',
  },
};

/**
 * There is no percentage to report against a total of zero, so the counter logs a development
 * error and reads `0%` rather than rendering a non-finite value. Pass a total greater than zero
 * whenever you ask for this variant.
 */
export const PercentageZeroTotal: Story = {
  args: {
    total: 0,
    variant: 'percentage',
  },
};

/**
 * The percentage climbs as the user types, crossing 100% at the same point the fraction variant
 * goes over its total.
 */
export const PercentageChanging: Story = {
  render: (args) => <InteractiveCounter {...args} />,
  args: {
    total: 20,
    variant: 'percentage',
  },
};
