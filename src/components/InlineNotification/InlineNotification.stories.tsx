import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { InlineNotification, VARIANTS } from './InlineNotification';

export default {
  title: 'Components/InlineNotification',
  component: InlineNotification,
  parameters: {
    badges: ['1.0'],
  },
  args: {
    text: 'Inline notifications lorem ipsum text',
    variant: 'success' as const,
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: VARIANTS,
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof InlineNotification>;

export const Success: StoryObj<Args> = {};

export const LongText: StoryObj<Args> = {
  args: {
    text: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

const getVariants = (optionalArgs: Omit<Args, 'text' | 'variant'> = {}) =>
  VARIANTS.map((variant) => {
    return (
      <InlineNotification
        key={variant}
        {...optionalArgs}
        text={`${variant} inline notification lorem ipsum`}
        variant={variant}
      />
    );
  });

export const SubtleVariants: StoryObj<Args> = {
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {getVariants()}
    </div>
  ),
};

export const StrongVariants: StoryObj<Args> = {
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {getVariants({ isStrong: true })}
    </div>
  ),
};

export const FullWidthSuccess: StoryObj<Args> = {
  args: {
    isFullWidth: true,
  },
};

export const FullWidthLongText: StoryObj<Args> = {
  args: {
    isFullWidth: true,
    text: 'Long text inline notification. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

export const FullWidthVariants: StoryObj<Args> = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {getVariants({ isFullWidth: true })}
    </div>
  ),
};

export const FullWidthStrongVariants: StoryObj<Args> = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
      }}
    >
      {getVariants({ isFullWidth: true, isStrong: true })}
    </div>
  ),
};
