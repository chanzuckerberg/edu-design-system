import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Meta, Story, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import clsx from 'clsx';
import React from 'react';
import { Tooltip } from './Tooltip';
import styles from './Tooltip.stories.module.css';
import { Button } from '../Button/Button';

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
  title: 'Molecules/Messaging/Tooltip',
  component: Tooltip,
  args: defaultArgs,
  parameters: {
    chromatic: {
      delay: 900,
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

export const Interactive: StoryObj<Args> = {
  args: {
    // reset prop values defined in defaultArgs
    duration: undefined,
    visible: undefined,
    children: (
      <Button className={clsx(styles['trigger--spacing'])} variant="primary">
        Hover here to see tooltip after clicking somewhere outside.
      </Button>
    ),
  },
  decorators: [
    (Story: Story) => (
      <div>
        <p>
          Click somewhere in this area to dismiss the tooltip, then hover over
          the button to make it reappear.
        </p>
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: {
      disableSnapshot: true,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByRole('button');
    await userEvent.hover(trigger);
  },
};
