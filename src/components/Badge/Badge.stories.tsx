import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Molecules/Messaging/Badge',
  component: Badge,
  subcomponents: {
    'Badge.Dot': Badge.Dot,
    'Badge.Icon': Badge.Icon,
    'Badge.Text': Badge.Text,
  },
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Badge>;

export const Dot: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has notification"
          className="fpo flex items-center justify-center h-8 w-8"
        >
          Ava
        </div>
        <Badge.Dot />
      </>
    ),
  },
};

export const SmallNumber: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has 1 notification"
          className="fpo flex items-center justify-center h-8 w-8"
        >
          Ava
        </div>
        <Badge.Text>1</Badge.Text>
      </>
    ),
  },
};

export const LargeNumber: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has 999 notifications"
          className="fpo flex items-center justify-center h-8 w-8"
        >
          Ava
        </div>
        <Badge.Text>999</Badge.Text>
      </>
    ),
  },
};

export const OverNineThousand: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava has more than 99 notifications"
          className="fpo flex items-center justify-center h-8 w-8"
        >
          Ava
        </div>
        <Badge.Text>99+</Badge.Text>
      </>
    ),
  },
};

export const IconBadge: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Ava alert"
          className="fpo flex items-center justify-center h-8 w-8"
        >
          Ava
        </div>
        <Badge.Icon name="alarm" />
      </>
    ),
  },
};

export const LargeBadgeableObject: StoryObj<Args> = {
  args: {
    children: (
      <>
        <div
          aria-label="Badge-able Obj has 10 notifications"
          className="fpo flex items-center justify-center w-96 h-96"
        >
          Badge-able Obj
        </div>
        <Badge.Text>10</Badge.Text>
      </>
    ),
  },
};
