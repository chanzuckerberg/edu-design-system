import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Meta, Story, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';

// diminishing the threshold of this component to avoid sub-pixel jittering
// https://www.chromatic.com/docs/threshold
const diffThreshold = 0.5;
const defaultArgs = {
  text: (
    <span data-testid="tooltip-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent
      efficitur mauris ac leo semper accumsan.
    </span>
  ),
  children: <div className="fpo w-3 p-1">&bull;</div>,
  align: 'right',
  // most stories show a visible, non-interactive tooltip.
  // this turns animation off to ensure stable visual snapshots
  duration: 0,
  visible: true,
};

export default {
  title: 'Components/Tooltip',
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
  },
  parameters: {
    layout: 'centered',
    badges: ['1.0'],
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
  decorators: [
    (Story: Story) => (
      <div className="p-16">
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Tooltip>;

export const LightVariant: StoryObj<Args> = {};

export const DarkVariant: StoryObj<Args> = {
  args: {
    variant: 'dark',
  },
  parameters: {
    badges: [BADGE.DEPRECATED],
  },
};

export const LeftPlacement: StoryObj<Args> = {
  args: {
    align: 'left',
    children: <div className="fpo w-3 p-1">&bull;</div>,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const TopPlacement: StoryObj<Args> = {
  args: {
    align: 'top',
    children: <div className="fpo w-3 p-1">&bull;</div>,
  },
};

export const BottomPlacement: StoryObj<Args> = {
  args: {
    align: 'bottom',
    children: <div className="fpo w-3 p-1">&bull;</div>,
  },
};

export const LongText: StoryObj<Args> = {
  args: {
    text: (
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        <b>Donec a erat eu augue consequat eleifend non vel sem.</b> Praesent
        efficitur mauris ac leo semper accumsan. Donec posuere semper fermentum.
        Vivamus venenatis laoreet venenatis. Sed consectetur, dolor sed
        tristique vehicula, sapien nulla convallis odio, et tempus urna mi eu
        leo. Phasellus a venenatis sapien. Cras massa lectus, sollicitudin id
        nulla id, laoreet facilisis est.
      </span>
    ),
  },
};

export const LongTriggerText: StoryObj<Args> = {
  args: {
    children: <div className="fpo p-1">Longer text to test placement</div>,
  },
};

export const TextChild: StoryObj<Args> = {
  render: () => (
    <Tooltip align="top" childNotInteractive text={defaultArgs.text} visible>
      <span>Tooltip trigger</span>
    </Tooltip>
  ),
  parameters: {
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
};

export const Interactive: StoryObj<Args> = {
  args: {
    // reset prop values defined in defaultArgs
    duration: undefined,
    visible: undefined,
    children: <button className="fpo w-3 p-1">&bull;</button>,
  },
  decorators: [
    (Story: Story) => (
      <div>
        <p>Hover over the button to make the tooltip appear.</p>
        <Story />
      </div>
    ),
  ],
};

export const InteractiveDisabled: StoryObj<Args> = {
  args: {
    duration: undefined,
  },
  render: (args) => (
    <Tooltip
      align="top"
      childNotInteractive
      duration={args.duration}
      text={defaultArgs.text}
    >
      <div className="fpo  p-1">&bull;</div>
    </Tooltip>
  ),
  parameters: {
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
  decorators: [
    (Story: Story) => (
      <div>
        <p>Hover over the button to make the tooltip appear.</p>
        <Story />
      </div>
    ),
  ],
};
