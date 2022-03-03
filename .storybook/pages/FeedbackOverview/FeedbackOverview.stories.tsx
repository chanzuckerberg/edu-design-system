import React from 'react';
import { Story, Meta } from '@storybook/react';

import { FeedbackOverview, Props } from './FeedbackOverview';

export default {
  title: 'Pages/Feedback/Overview',
  component: FeedbackOverview,
} as Meta;

const Template: Story<Props> = (args) => <FeedbackOverview {...args} />;

export const TeacherView = Template.bind({});
TeacherView.args = {};
