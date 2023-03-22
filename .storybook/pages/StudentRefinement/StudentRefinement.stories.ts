import type { StoryObj, Meta } from '@storybook/react';

import { StudentRefinement } from './StudentRefinement';
import { chromaticViewports } from '../../../src/util/viewports';

export default {
  title: 'Pages/SDT/StudentRefinement',
  component: StudentRefinement,
} as Meta<Args>;

type Args = React.ComponentProps<typeof StudentRefinement>;

export const Default: StoryObj<Args> = {
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
