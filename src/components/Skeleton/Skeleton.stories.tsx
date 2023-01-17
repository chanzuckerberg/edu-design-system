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
      default: 'white',
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

export const Circle: StoryObj<React.ComponentProps<typeof Skeleton.Circle>> = {
  args: {
    width: 100,
  },
  render: (args) => {
    return <Skeleton.Circle {...args} />;
  },
};

export const Text: StoryObj<React.ComponentProps<typeof Skeleton.Text>> = {
  args: {
    width: '30ch',
    height: '1.5rem',
  },
  render: (args) => {
    return <Skeleton.Text {...args} />;
  },
};

export const LayoutExample: StoryObj<Args> = {
  argTypes: {
    className: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },
  },
  render: ({ isAnimating }) => {
    return (
      <div aria-label="Loading example profile card" role="status">
        <PopoverContainer className="m-2 p-3">
          <Skeleton.Circle
            className="mb-3"
            isAnimating={isAnimating}
            width="50px"
          />
          <Skeleton.Text
            className="mt-2 mb-2"
            height="4rem"
            isAnimating={isAnimating}
            width="15ch"
          />
          <Skeleton.Text
            className="mt-2 mb-2"
            height="1.5rem"
            isAnimating={isAnimating}
            width="30ch"
          />
          <Skeleton.Text
            className="mt-2 mb-2"
            height="1.5rem"
            isAnimating={isAnimating}
            width="25ch"
          />
          <Skeleton.Text
            className="mt-2 mb-8"
            height="1.5rem"
            isAnimating={isAnimating}
            width="10ch"
          />
          <Skeleton height={50} isAnimating={isAnimating} width="100%" />
        </PopoverContainer>
      </div>
    );
  },
};
