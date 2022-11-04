import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { StackedCardsToTable } from './StackedCardsToTable';

export default {
  title: 'Recipes/StackedCardsToTable',
  component: StackedCardsToTable,
} as Meta<Args>;

type Args = React.ComponentProps<typeof StackedCardsToTable>;

export const Default: StoryObj<Args> = {
  decorators: [
    (Story) => (
      <div style={{ margin: '0.5rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    chromatic: { viewports: [414, 768, 1366] },
  },
};
