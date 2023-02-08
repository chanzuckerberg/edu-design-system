import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { StackedCardsToTable } from './StackedCardsToTable';
import { chromaticViewports } from '../../../src/util/viewports';

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
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
      ],
    },
  },
};
