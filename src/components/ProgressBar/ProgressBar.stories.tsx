import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/ProgressBar',
  component: ProgressBar,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof ProgressBar>;

export const Default: StoryObj<Args> = {
  args: {},
};
