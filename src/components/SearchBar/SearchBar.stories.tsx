import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/SearchBar',
  component: SearchBar,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof SearchBar>;

export const Default: StoryObj<Args> = {
  args: {},
};
