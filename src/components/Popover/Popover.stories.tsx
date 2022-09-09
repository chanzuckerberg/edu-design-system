import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Popover } from './Popover';
import Button from '../Button';

export default {
  title: 'Organisms/Interactive/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content data-testid="popover-content">
          <div style={{ width: '250px' }}>
            my popover content my popover content my popover content my popover
            content my popover content
          </div>
        </Popover.Content>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Popover>;

export const Default: StoryObj<Args> = {};

export const Arrow: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Popover.Button as={Button}>Open Popover</Popover.Button>
        <Popover.Content showArrow>
          <div style={{ width: '250px' }}>
            my popover content my popover content my popover content my popover
            content my popover content
          </div>
        </Popover.Content>
      </>
    ),
  },
};

export const Top: StoryObj<Args> = {
  args: {
    placement: 'top',
  },
};

export const Right: StoryObj<Args> = {
  args: {
    placement: 'right',
  },
};

export const Bottom: StoryObj<Args> = {
  args: {
    placement: 'bottom',
  },
};

export const Left: StoryObj<Args> = {
  args: {
    placement: 'left',
  },
};

export const TopStart: StoryObj<Args> = {
  args: {
    placement: 'top-start',
  },
};

export const TopEnd: StoryObj<Args> = {
  args: {
    placement: 'top-end',
  },
};

export const BottomStart: StoryObj<Args> = {
  args: {
    placement: 'bottom-start',
  },
};

export const BottomEnd: StoryObj<Args> = {
  args: {
    placement: 'bottom-end',
  },
};

export const RightStart: StoryObj<Args> = {
  args: {
    placement: 'right-start',
  },
};

export const RightEnd: StoryObj<Args> = {
  args: {
    placement: 'right-end',
  },
};

export const LeftStart: StoryObj<Args> = {
  args: {
    placement: 'left-start',
  },
};

export const LeftEnd: StoryObj<Args> = {
  args: {
    placement: 'left-end',
  },
};
