import type { StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { FeedbackOverview } from './FeedbackOverview';

export default {
  title: 'Pages/Projects/Feedback',
  component: FeedbackOverview,
};

type Args = ComponentProps<typeof FeedbackOverview>;

export const Overview: StoryObj<Args> = {
  parameters: {
    chromatic: { viewports: [414, 768, 1366] },
  },
};

export const Checkpoint: StoryObj<Args> = {
  args: {
    activeIndex: 1,
  },
  parameters: {
    chromatic: { viewports: [414, 768, 1366] },
  },
};
