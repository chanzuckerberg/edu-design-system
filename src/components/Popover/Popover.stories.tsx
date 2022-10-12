import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';
import { Popover } from './Popover';
import Button from '../Button';

export default {
  title: 'Organisms/Interactive/Popover',
  component: Popover,
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
          <div style={{ width: '250px' }}>
            My popover content Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod
          </div>
        </Popover.Content>
      </>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Popover>;

export const Default: StoryObj<Args> = {
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

export const Arrow: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Popover.Button as={Button}>Open Popover</Popover.Button>
        <Popover.Content showArrow>
          <div style={{ width: '250px' }}>
            My popover content Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod
          </div>
        </Popover.Content>
      </>
    ),
  },
  ...Default,
};

export const Top: StoryObj<Args> = {
  args: {
    placement: 'top',
  },
  ...Default,
};

export const Right: StoryObj<Args> = {
  args: {
    placement: 'right',
  },
  ...Default,
};

export const Bottom: StoryObj<Args> = {
  args: {
    placement: 'bottom',
  },
  ...Default,
};

export const Left: StoryObj<Args> = {
  args: {
    placement: 'left',
  },
  ...Default,
};

export const TopStart: StoryObj<Args> = {
  args: {
    placement: 'top-start',
  },
  ...Default,
};

export const TopEnd: StoryObj<Args> = {
  args: {
    placement: 'top-end',
  },
  ...Default,
};

export const BottomStart: StoryObj<Args> = {
  args: {
    placement: 'bottom-start',
  },
  ...Default,
};

export const BottomEnd: StoryObj<Args> = {
  args: {
    placement: 'bottom-end',
  },
  ...Default,
};

export const RightStart: StoryObj<Args> = {
  args: {
    placement: 'right-start',
  },
  ...Default,
};

export const RightEnd: StoryObj<Args> = {
  args: {
    placement: 'right-end',
  },
  ...Default,
};

export const LeftStart: StoryObj<Args> = {
  args: {
    placement: 'left-start',
  },
  ...Default,
};

export const LeftEnd: StoryObj<Args> = {
  args: {
    placement: 'left-end',
  },
  ...Default,
};
