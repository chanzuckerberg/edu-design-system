import type { StoryObj, Meta } from '@storybook/react';

import { StudentRefinement } from './StudentRefinement';

export default {
  title: 'Pages/SDT/StudentRefinement',
  component: StudentRefinement,
} as Meta<Args>;

type Args = React.ComponentProps<typeof StudentRefinement>;

export const Default: StoryObj<Args> = {
  parameters: {
    chromatic: { viewports: [414, 768, 1366] },
  },
};
