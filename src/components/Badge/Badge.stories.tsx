import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';
import { Badge } from './Badge';
import Icon from '../Icon';

export default {
  // TODO-JL: Appropriate storybook folder?
  title: 'Molecules/Messaging/Badge',
  component: Badge,
  subcomponents: {
    'Badge.Wrapper': Badge.Wrapper,
  },
  parameters: {
    layout: 'centered',
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Badge>;

export const Default: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
      <Badge />
    </Badge.Wrapper>
  ),
};

export const SmallNumber: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
      <Badge>1</Badge>
    </Badge.Wrapper>
  ),
};

export const LargeNumber: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
      <Badge>999</Badge>
    </Badge.Wrapper>
  ),
};

export const OverNineThousand: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
      <Badge>99+</Badge>
    </Badge.Wrapper>
  ),
};

export const IconBadge: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center h-8 w-8">Ava</div>
      <Badge>
        <Icon name="alarm" purpose="decorative" size="1rem" />
      </Badge>
    </Badge.Wrapper>
  ),
};

export const LargeBadgeableObject: StoryObj<Args> = {
  render: () => (
    <Badge.Wrapper>
      <div className="fpo flex items-center justify-center w-96 h-96">
        Badge-able Obj
      </div>
      <Badge>10</Badge>
    </Badge.Wrapper>
  ),
};
