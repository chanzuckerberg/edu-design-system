import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CurriculumCourses, Props } from './CurriculumCourses';

export default {
  title: 'Pages/Curriculum/Courses/Overview',
  component: CurriculumCourses,
} as Meta;

const Template: Story<Props> = (args) => <CurriculumCourses {...args} />;

export const TeacherView = Template.bind({});
TeacherView.args = {};
