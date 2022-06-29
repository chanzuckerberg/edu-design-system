import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { CoursesYear } from './CoursesYear';

export default {
  title: 'Pages/Courses/Year',
  component: CoursesYear,
} as Meta;

type Args = React.ComponentProps<typeof CoursesYear>;
export const Default: StoryObj<Args> = {};
