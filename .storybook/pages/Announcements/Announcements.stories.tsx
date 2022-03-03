import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Announcements, Props } from './Announcements';

export default {
  title: 'Pages/Announcements',
  component: Announcements,
} as Meta;

const Template: Story<Props> = (args) => <Announcements {...args} />;

export const StudentView = Template.bind({});
StudentView.args = {};

export const TeacherView = Template.bind({});
TeacherView.args = {};
