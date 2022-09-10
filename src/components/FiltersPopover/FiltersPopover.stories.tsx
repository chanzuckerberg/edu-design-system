import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { FiltersPopover } from './FiltersPopover';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/FiltersPopover',
  component: FiltersPopover,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof FiltersPopover>;

export const Default: StoryObj<Args> = {
  args: {},
};
