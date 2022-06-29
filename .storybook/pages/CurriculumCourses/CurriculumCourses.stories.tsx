import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { CurriculumCourses } from './CurriculumCourses';

export default {
  title: 'Pages/Curriculum/Courses/Overview',
  component: CurriculumCourses,
} as Meta;

type Args = React.ComponentProps<typeof CurriculumCourses>;
export const Default: StoryObj<Args> = {};
