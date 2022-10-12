import type { StoryObj } from '@storybook/react';
import type React from 'react';

import { FeedbackOverview } from './FeedbackOverview';

export default {
  title: 'Pages/Projects/Feedback',
  component: FeedbackOverview,
};

type Args = React.ComponentProps<typeof FeedbackOverview>;
export const Overview: StoryObj<Args> = {};

export const Checkpoint: StoryObj<Args> = {
  args: {
    activeIndex: 1,
  },
};
