import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import type React from 'react';

import { AlongDemo } from './AlongDemo';

export default {
  title: 'Pages/Theming/AlongDemo',
  component: AlongDemo,
} as Meta<Args>;

type Args = React.ComponentProps<typeof AlongDemo>;

export const Default: StoryObj<Args> = {};

export const WatchPage: StoryObj<Args> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nextPageButton = await canvas.findByText('Hogwarts');
    nextPageButton.click();
  },
};
