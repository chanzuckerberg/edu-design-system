import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Tooltip } from './Tooltip-v2';

// diminishing the threshold of this component to avoid sub-pixel jittering
// https://www.chromatic.com/docs/threshold
const diffThreshold = 0.75;
const defaultArgs = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat eu augue consequat eleifend non vel sem. Praesent efficitur mauris ac leo semper accumsan.',
  children: <div className="fpo p-1">Target Component</div>,
  placement: 'right',
  // most stories show a visible, non-interactive tooltip.
  // this turns animation off to ensure stable visual snapshots
  duration: 0,
  visible: true,
};

export default {
  title: 'Components/V2/Tooltip',
  component: Tooltip,
  args: defaultArgs,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
    placement: {
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },
  parameters: {
    layout: 'centered',
    badges: ['intro-1.0', 'current-2.0'],
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tooltip>;
type Story = StoryObj<Args>;

/**
 * The following stories demonstrate how `Tooltip` can be made to appear on different sides of the trigger.
 * Each story name denotes a value pased to `placement`.
 */
export const LeftPlacement: Story = {
  args: {
    placement: 'left',
    children: <div className="fpo p-1">Target Component</div>,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const TopPlacement: Story = {
  args: {
    placement: 'top',
    children: <div className="fpo p-1">Target Component</div>,
  },
};

export const BottomPlacement: Story = {
  args: {
    placement: 'bottom',
    children: <div className="fpo p-1">Target Component</div>,
  },
};

export const LongText: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a erat eu augue consequat eleifend non vel sem. Praesent efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum. Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id nulla id, laoreet facilisis est.',
  },
};

export const LongTriggerText: Story = {
  args: {
    children: <div className="fpo p-1">Longer text to test placement</div>,
  },
  parameters: {
    // Sets the delay (in milliseconds) for a specific story.
    chromatic: { delay: 300 },
  },
};

/**
 * Hover over the button to make the tooltip appear.
 */
export const Interactive: Story = {
  args: {
    // reset prop values defined in defaultArgs
    duration: undefined,
    visible: undefined,
    children: <button className="fpo p-1">Target Component</button>,
  },
};

/**
 * Hover over the button to make the tooltip appear.
 */
export const InteractiveDisabled: Story = {
  args: {
    duration: undefined,
  },
  render: (args) => (
    <Tooltip
      childNotInteractive
      duration={args.duration}
      placement="top"
      text={defaultArgs.text}
    >
      <div className="fpo p-1">Target Component</div>
    </Tooltip>
  ),
};
