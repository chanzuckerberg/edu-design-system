import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CurriculumCourses } from './CurriculumCourses';

export default {
  title: 'Pages/Curriculum/Courses/Overview',
  component: CurriculumCourses,
} as Meta;

const Template: Story = (args) => <CurriculumCourses {...args} />;

export const TeacherView = Template.bind({});
TeacherView.args = {};
