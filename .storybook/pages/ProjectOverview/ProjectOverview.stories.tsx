import { StoryObj } from '@storybook/react';
import React from 'react';

import { ProjectOverview } from './ProjectOverview';

export default {
  title: 'Pages/Projects/Project',
  component: ProjectOverview,
};

type Args = React.ComponentProps<typeof ProjectOverview>;
export const StudentView: StoryObj<Args> = {};
