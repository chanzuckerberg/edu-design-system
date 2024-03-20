import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Button } from './Button-v2';
import { SIZES } from '../ClickableStyle';

// TODO-AH: add documentation to each story

export default {
  title: 'Components/V2/Button',
  component: Button,
  args: {
    children: 'Button',
    isFullWidth: false,
    size: 'lg',
    isLoading: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: SIZES,
    },
    isFullWidth: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
  parameters: {
    badges: ['intro-1.0', 'current-2.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Button>;

export const Default: StoryObj<Args> = {
  args: {
    children: 'Default',
  },
};

export const DefaultRanks: StoryObj<Args> = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex gap-1">
        <Button {...args} rank="primary">
          Primary
        </Button>
        <Button {...args} rank="secondary">
          Secondary
        </Button>
        <Button {...args} rank="tertiary">
          Tertiary
        </Button>
      </div>
    );
  },
};

export const Disabled: StoryObj<Args> = {
  args: {
    ...DefaultRanks.args,
    isDisabled: true,
  },
  render: DefaultRanks.render,
};

export const TertiaryStandalone: StoryObj<Args> = {
  args: {
    rank: 'tertiary',
    context: 'standalone',
  },
};

export const CriticalRanks: StoryObj<Args> = {
  args: {
    ...DefaultRanks.args,
    variant: 'critical',
  },
  render: DefaultRanks.render,
};

export const InverseRanks: StoryObj<Args> = {
  args: {
    ...DefaultRanks.args,
    variant: 'inverse',
  },
  render: DefaultRanks.render,
  // TODO-AH: find a cleaner way to decorate with unavailable tokens using parameters:backgounds:
  decorators: [
    (Story) => (
      <div className="bg-[var(--eds-color-blue-850)] p-1">{Story()}</div>
    ),
  ],
};

export const Sizes: StoryObj<Args> = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-1">
        <Button {...args} size="lg">
          Large
        </Button>
        <Button {...args} size="md">
          Medium
        </Button>
        <Button {...args} size="sm">
          Small
        </Button>
      </div>
    );
  },
};

export const FullWidths: StoryObj<Args> = {
  args: {
    ...Sizes.args,
    isFullWidth: true,
  },
  render: Sizes.render,
};

export const LoadingStates: StoryObj<Args> = {
  args: {
    ...Sizes.args,
    isLoading: true,
  },
  render: Sizes.render,
};

/**
 * `iconLayout` lets you place the icons adjacent to button text, or as the only visible element.
 * When using `"icon-only"`, you **must** include a label (e.g., via `aria-label`).
 */
export const IconLayouts: StoryObj<Args> = {
  args: {
    ...Default.args,
  },
  render: (args) => {
    return (
      <div className="flex items-center gap-1">
        <Button {...args} iconLayout="left">
          Left
        </Button>
        <Button {...args} iconLayout="right">
          Right
        </Button>
        <Button
          {...args}
          aria-label="Label must be applied with icon-only layout"
          iconLayout="icon-only"
        >
          Icon Only (text not visible)
        </Button>
      </div>
    );
  },
};
