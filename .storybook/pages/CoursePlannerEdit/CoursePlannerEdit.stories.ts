import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { CoursePlannerEdit } from './CoursePlannerEdit';

export default {
  title: 'Pages/Course Planner/Edit',
  component: CoursePlannerEdit,
} as Meta<Args>;

type Args = React.ComponentProps<typeof CoursePlannerEdit>;
export const Default: StoryObj<Args> = {};
