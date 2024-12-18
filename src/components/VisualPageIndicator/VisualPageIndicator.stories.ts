import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { VisualPageIndicator } from './VisualPageIndicator';

export default {
  title: 'Components/VisualPageIndicator',
  component: VisualPageIndicator,
  parameters: {
    badges: ['api-1.0', 'theme-2.0'],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof VisualPageIndicator>;

export const Default: StoryObj<Args> = {
  args: {
    activePage: 0,
    totalPageCount: 6,
  },
};

export const MinimumPages: StoryObj<Args> = {
  args: {
    activePage: 1,
    totalPageCount: 2,
  },
};

export const FivePages: StoryObj<Args> = {
  args: {
    activePage: 2,
    totalPageCount: 5,
  },
};

// TODO-AH: add implementation example showing usage of state with a label for a11y handling
