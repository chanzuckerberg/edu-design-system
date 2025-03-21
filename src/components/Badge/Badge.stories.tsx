import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  subcomponents: {
    'Badge.Dot': Badge.Dot,
    'Badge.Icon': Badge.Icon,
    'Badge.Text': Badge.Text,
  },
  parameters: {
    layout: 'centered',
    badges: ['api-1.3', 'theme-1.0', BADGE.DEPRECATED],
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Dot: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has notification"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Dot />
      </>
    ),
  },
};

export const SmallNumber: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has 1 notification"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Text>1</Badge.Text>
      </>
    ),
  },
};

export const LargeNumber: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has 999 notifications"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Text>999</Badge.Text>
      </>
    ),
  },
};

export const OverNineThousand: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has more than 99 notifications"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Text>99+</Badge.Text>
      </>
    ),
  },
};

export const IconBadge: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava alert"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Icon icon="alarm" />
      </>
    ),
  },
};

export const IconBadgeUsingIcon: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava alert"
          className="fpo flex h-8 w-8 items-center justify-center"
        >
          Ava
        </div>
        <Badge.Icon icon="alarm" />
      </>
    ),
  },
};

export const LargeBadgeableObject: Story = {
  args: {
    children: (
      <>
        <div
          aria-label="Badge-able Obj has 10 notifications"
          className="fpo flex h-96 w-96 items-center justify-center"
        >
          Badge-able Obj
        </div>
        <Badge.Text>10</Badge.Text>
      </>
    ),
  },
};
