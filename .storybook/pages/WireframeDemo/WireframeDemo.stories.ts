import type { StoryObj, Meta } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import type React from 'react';

import { WireframeDemo } from './WireframeDemo';

export default {
  title: 'Pages/Theming/WireframeDemo',
  component: WireframeDemo,
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof WireframeDemo>;

export const Default: StoryObj<Args> = {};

export const WatchPage: StoryObj<Args> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextPageButton = await canvas.findByText('Hogwarts');
    await userEvent.click(nextPageButton);
  },
};
