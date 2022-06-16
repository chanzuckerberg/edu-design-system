import { StoryObj } from '@storybook/react';
import React from 'react';

import { FeedbackOverview } from './FeedbackOverview';

export default {
  title: 'Pages/Feedback/Overview',
  component: FeedbackOverview,
};

type Args = React.ComponentProps<typeof FeedbackOverview>;
export const TeacherView: StoryObj<Args> = {};
