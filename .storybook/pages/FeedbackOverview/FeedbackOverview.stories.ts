import type { StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { FeedbackOverview } from './FeedbackOverview';
import { chromaticViewports } from '../../../src/util/viewports';

export default {
  title: 'Pages/Projects/Feedback',
  component: FeedbackOverview,
};

type Args = ComponentProps<typeof FeedbackOverview>;

export const Overview: StoryObj<Args> = {
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

export const Checkpoint: StoryObj<Args> = {
  args: {
    activeIndex: 1,
  },
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
