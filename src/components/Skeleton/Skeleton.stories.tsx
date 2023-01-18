import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';
import PopoverContainer from '../PopoverContainer';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  subcomponents: {
    'Skeleton.Circle': Skeleton.Circle,
    'Skeleton.Rect': Skeleton.Rect,
    'Skeleton.Text': Skeleton.Text,
  },
  parameters: {
    badges: [BADGE.BETA],
    layout: 'centered',
    backgrounds: {
      default: 'eds-color-neutral-white',
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Skeleton>;

export const Default: StoryObj<Args> = {
  args: {
    width: 100,
    height: 100,
  },
};

export const Circle: StoryObj<Args> = {
  render: (args) => {
    return <Skeleton.Circle width={100} />;
  },
};

export const Text: StoryObj<Args> = {
  render: (args) => {
    return <Skeleton.Text height="1.5rem" width="30ch" />;
  },
};

export const LayoutExample: StoryObj<Args> = {
  render: (args) => {
    return (
      <div aria-label="Loading example profile card" role="status">
        <PopoverContainer className="m-2 p-3">
          <Skeleton.Circle className="mb-3" width="50px" />
          <Skeleton.Text className="mt-2 mb-2" height="4rem" width="15ch" />
          <Skeleton.Text className="mt-2 mb-2" height="1.5rem" width="30ch" />
          <Skeleton.Text className="mt-2 mb-2" height="1.5rem" width="25ch" />
          <Skeleton.Text className="mt-2 mb-8" height="1.5rem" width="10ch" />
          <Skeleton height={50} width="100%" />
        </PopoverContainer>
      </div>
    );
  },
};
