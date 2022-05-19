import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { InlineNotification, VARIANTS } from './InlineNotification';

export default {
  title: 'Example/InlineNotification',
  component: InlineNotification,
  args: {
    text: 'Inline notifications lorem ipsum text',
    variant: 'success' as const,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: VARIANTS,
      },
    },
  },
  parameters: {
    badges: [BADGE.BETA],
  },
};

type Args = React.ComponentProps<typeof InlineNotification>;

export const Success: StoryObj<Args> = {};
export const Score: StoryObj<Args> = {
  args: {
    score: '9/10',
  },
};

export const LongText: StoryObj<Args> = {
  args: {
    text: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

export const SubtleVariants: StoryObj<Args> = {
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {VARIANTS.map((variant) => {
        return (
          <InlineNotification
            key={variant}
            {...args}
            text={`${variant} inline notification lorem ipsum`}
            variant={variant}
          />
        );
      })}
    </div>
  ),
};

export const StrongVariants: StoryObj<Args> = {
  render: (args) => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {VARIANTS.map((variant) => {
        return (
          <InlineNotification
            {...args}
            isStrong
            key={variant}
            text={`${variant} inline notification lorem ipsum`}
            variant={variant}
          />
        );
      })}
    </div>
  ),
};
