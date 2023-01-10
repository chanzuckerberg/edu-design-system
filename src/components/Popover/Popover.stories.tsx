import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';
import { Popover } from './Popover';
import type { PopoverProps } from './Popover';
import Button from '../Button';

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    'Popover.Button': Popover.Button,
    'Popover.Content': Popover.Content,
    'Popover.Group': Popover.Group,
    'Popover.Overlay': Popover.Overlay,
  },
  parameters: {
    layout: 'centered',
    chromatic: {
      // These stories are very flaky, though we're not sure why.
      // We tried delaying the snapshot just in case there's a timing issue at play here, which was not successful.
      disableSnapshot: true,
    },
  },
  args: {
    children: (
      <>
        <Popover.Button as={Button} data-testid="popover-trigger-button">
          Open Popover
        </Popover.Button>
        <Popover.Content data-testid="popover-content">
          <div className="fpo m-2 p-6">Popover Content goes here</div>
        </Popover.Content>
      </>
    ),
  },
} as Meta<PopoverProps>;

export const Default: StoryObj<PopoverProps> = {
  play: async ({ canvasElement }) => {
    // We want to test visual regression for the Popover.Content as well as the button,
    // but don't want the drawer open initally outside Chromatic.
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      filtersTrigger.click();
    }
  },
};

export const Arrow: StoryObj<PopoverProps> = {
  args: {
    children: (
      <>
        <Popover.Button as={Button}>Open Popover</Popover.Button>
        <Popover.Content showArrow>
          <div className="fpo m-2 p-6">Popover Content goes here</div>
        </Popover.Content>
      </>
    ),
  },
  ...Default,
};

export const Top: StoryObj<PopoverProps> = {
  args: {
    placement: 'top',
  },
  ...Default,
};

export const Right: StoryObj<PopoverProps> = {
  args: {
    placement: 'right',
  },
  ...Default,
};

export const Bottom: StoryObj<PopoverProps> = {
  args: {
    placement: 'bottom',
  },
  ...Default,
};

export const Left: StoryObj<PopoverProps> = {
  args: {
    placement: 'left',
  },
  ...Default,
};

export const TopStart: StoryObj<PopoverProps> = {
  args: {
    placement: 'top-start',
  },
  ...Default,
};

export const TopEnd: StoryObj<PopoverProps> = {
  args: {
    placement: 'top-end',
  },
  ...Default,
};

export const BottomStart: StoryObj<PopoverProps> = {
  args: {
    placement: 'bottom-start',
  },
  ...Default,
};

export const BottomEnd: StoryObj<PopoverProps> = {
  args: {
    placement: 'bottom-end',
  },
  ...Default,
};

export const RightStart: StoryObj<PopoverProps> = {
  args: {
    placement: 'right-start',
  },
  ...Default,
};

export const RightEnd: StoryObj<PopoverProps> = {
  args: {
    placement: 'right-end',
  },
  ...Default,
};

export const LeftStart: StoryObj<PopoverProps> = {
  args: {
    placement: 'left-start',
  },
  ...Default,
};

export const LeftEnd: StoryObj<PopoverProps> = {
  args: {
    placement: 'left-end',
  },
  ...Default,
};
