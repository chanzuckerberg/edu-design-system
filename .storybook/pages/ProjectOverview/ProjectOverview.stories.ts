import type {StoryObj} from '@storybook/react';
import type {ComponentProps} from 'react';

import {ProjectOverview} from './ProjectOverview';

export default {
  title: 'Pages/Projects/Project',
  component: ProjectOverview,
};

type Args = ComponentProps<typeof ProjectOverview>;

export const StudentView: StoryObj<Args> = {};

export const ProjectCheckpoint: StoryObj<Args> = {
  args: {
    activeIndex: 1,
  },
};
