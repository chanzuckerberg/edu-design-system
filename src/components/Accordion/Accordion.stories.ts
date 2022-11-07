import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { Accordion } from './Accordion';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/Accordion',
  component: Accordion,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Accordion>;

export const Default: StoryObj<Args> = {
  args: {},
};
