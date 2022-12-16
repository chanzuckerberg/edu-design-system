import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';
import { Badge } from './Badge';
import Icon from '../Icon';

export default {
  // TODO-JL: Appropriate storybook folder?
  title: 'Molecules/Messaging/Badge',
  component: Badge,
  args: {
    children: (
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
    ),
  },
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Badge>;

export const Default: StoryObj<Args> = {};

export const SmallNumber: StoryObj<Args> = {
  args: {
    badge: '1',
  },
};

export const LargeNumber: StoryObj<Args> = {
  args: {
    badge: '999',
  },
};

// TODO-JL: cheeky story naming
export const LargerThanLargeNumber: StoryObj<Args> = {
  args: {
    badge: '99+',
  },
};

export const IconBadge: StoryObj<Args> = {
  args: {
    badge: <Icon name="alarm" purpose="decorative" size="1rem" />,
  },
};

export const LargeBadgeableObject: StoryObj<Args> = {
  args: {
    badge: '10',
    children: (
      <div className="fpo flex items-center justify-center w-96 h-96">
        Badge-able Obj
      </div>
    ),
  },
};
