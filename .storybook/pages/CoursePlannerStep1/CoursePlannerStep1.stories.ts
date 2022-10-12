import type { StoryObj } from '@storybook/react';
import type React from 'react';

import { CoursePlannerStep1 } from './CoursePlannerStep1';

export default {
  title: 'Pages/Course Planner/Step 1',
  component: CoursePlannerStep1,
};

type Args = React.ComponentProps<typeof CoursePlannerStep1>;

export const Default: StoryObj<Args> = {};
