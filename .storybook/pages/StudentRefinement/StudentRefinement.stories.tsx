import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { StudentRefinement } from './StudentRefinement';

export default {
  title: 'Pages/SDT/StudentRefinement',
  component: StudentRefinement,
} as Meta<Args>;

type Args = React.ComponentProps<typeof StudentRefinement>;

export const Default: StoryObj<Args> = {};
