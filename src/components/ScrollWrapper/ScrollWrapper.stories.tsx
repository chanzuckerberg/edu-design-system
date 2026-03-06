import type { StoryObj, Meta } from '@storybook/react-webpack5';
import { userEvent, within } from '@storybook/testing-library';

import React from 'react';

import { ScrollWrapper } from './ScrollWrapper';

export default {
  title: 'Components/ScrollWrapper',
  component: ScrollWrapper,
  decorators: [(Story) => <div className="p-spacing-size-4">{Story()}</div>],
  tags: ['version:1.1'],
} as Meta<Args>;

type Args = React.ComponentProps<typeof ScrollWrapper>;

/**
 * Using the scroll wrapper relies on a few fixed height containers above and below the component.
 * This shows how, if you have an outer container of a small height, and the content within can be
 * taller, the scroll wrapper can be inserted in between, and allow for the content to be revealed as needed.
 */
export const Default: StoryObj<Args> = {
  args: {},
  render: (args) => (
    <div className="h-[200px] w-[200px] bg-utility-default-noEmphasis-hover">
      <ScrollWrapper {...args}>
        <div
          className="h-[300px] w-[300px] p-spacing-size-3"
          data-testid="scrollContent"
        ></div>
      </ScrollWrapper>
    </div>
  ),
};

export const DefaultVerticalScrolled: StoryObj<Args> = {
  args: {
    ...Default.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;

    scrollable?.scrollBy({ top: 50, left: 0 });

    await userEvent.tab();
  },
};

export const DefaultHozirontalScrolled: StoryObj<Args> = {
  args: {
    ...Default.args,
    orientation: 'horizontal',
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;

    scrollable?.scrollBy({ top: 0, left: 50 });

    await userEvent.tab();
  },
};

/**
 * Shadows can be kept within the edge of the container, taking on a concave appearance
 */
export const ContainVertical: StoryObj<Args> = {
  args: {
    shadowType: 'contain',
  },
  render: (args) => (
    <div className="h-[200px] w-[200px] bg-utility-default-noEmphasis-hover">
      <ScrollWrapper {...args}>
        <div className="h-[300px] w-[300px]" data-testid="scrollContent"></div>
      </ScrollWrapper>
    </div>
  ),
};

export const ContainVerticalScrolled: StoryObj<Args> = {
  args: {
    ...ContainVertical.args,
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: ContainVertical.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;

    scrollable?.scrollBy({ top: 50, left: 0 });

    await userEvent.tab();
  },
};

export const ContainHorizontalScrolled: StoryObj<Args> = {
  args: {
    ...ContainVertical.args,
    orientation: 'horizontal',
  },
  parameters: {
    snapshot: {
      skip: true,
    },
  },
  render: ContainVertical.render,
  play: async ({ canvasElement }) => {
    await userEvent.tab();
    const canvas = within(canvasElement);
    const scrollable = canvas.getByTestId('scrollContent').parentElement;

    scrollable?.scrollBy({ top: 0, left: 50 });

    await userEvent.tab();
  },
};
