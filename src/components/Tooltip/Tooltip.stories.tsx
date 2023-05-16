import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Meta, Story, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';
import styles from './Tooltip.stories.module.css';

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
  children: (
    <Button className={clsx(styles['trigger--spacing'])} variant="primary">
      Tooltip trigger
    </Button>
  ),
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
    badges: ['1.0'],
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
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
    children: (
      <Button
        className={clsx(
          styles['trigger--spacing-top'],
          styles['trigger--spacing-bottom'],
          styles['trigger--spacing-left-large'],
        )}
        variant="primary"
      >
        Tooltip trigger
      </Button>
    ),
  },
};

export const TopPlacement: StoryObj<Args> = {
  args: {
    align: 'top',
    children: (
      <Button
        className={clsx(
          styles['trigger--spacing-top'],
          styles['trigger--spacing-left'],
        )}
        variant="primary"
      >
        Tooltip trigger
      </Button>
    ),
  },
};

export const BottomPlacement: StoryObj<Args> = {
  args: {
    align: 'bottom',
    children: (
      <Button
        className={clsx(
          styles['trigger--spacing-bottom'],
          styles['trigger--spacing-left'],
        )}
        variant="primary"
      >
        Tooltip trigger
      </Button>
    ),
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

export const LongButtonText: StoryObj<Args> = {
  args: {
    children: (
      <Button
        className={clsx(styles['trigger--spacing-top'])}
        variant="primary"
      >
        Tooltip trigger with longer text to test placement
      </Button>
    ),
  },
};

export const DisabledButton: StoryObj<Args> = {
  render: () => (
    <div
      className={clsx(
        styles['trigger--spacing-top'],
        styles['trigger--spacing-left'],
      )}
    >
      <Tooltip align="top" childNotInteractive text={defaultArgs.text} visible>
        <Button disabled variant="primary">
          Tooltip trigger
        </Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    chromatic: {
      diffThreshold,
      diffIncludeAntiAliasing: false,
    },
  },
};

export const TextChild: StoryObj<Args> = {
  render: () => (
    <div
      className={clsx(
        styles['trigger--spacing-top'],
        styles['trigger--spacing-left'],
      )}
    >
      <Tooltip align="top" childNotInteractive text={defaultArgs.text} visible>
        <span>Tooltip trigger</span>
      </Tooltip>
    </div>
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
    id: 'id-for-testing',
    // reset prop values defined in defaultArgs
    duration: undefined,
    visible: undefined,
    children: (
      <Button className={clsx(styles['trigger--spacing'])} variant="primary">
        Tooltip trigger
      </Button>
    ),
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

export const InteractiveDisabledButton: StoryObj<Args> = {
  args: {
    duration: undefined,
  },
  render: (args) => (
    <div
      className={clsx(
        styles['trigger--spacing-top'],
        styles['trigger--spacing-left'],
      )}
    >
      <Tooltip
        align="top"
        childNotInteractive
        duration={args.duration}
        text={defaultArgs.text}
      >
        <Button disabled variant="primary">
          Tooltip trigger
        </Button>
      </Tooltip>
    </div>
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
