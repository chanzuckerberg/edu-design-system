import { Story, Meta } from '@storybook/react';
import React from 'react';

import { FeedbackOverview } from './FeedbackOverview';

export default {
  title: 'Pages/Feedback/Overview',
  component: FeedbackOverview,
} as Meta;

const Template: Story = (args) => <FeedbackOverview {...args} />;

export const TeacherView = Template.bind({});
TeacherView.args = {};
