import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { SearchField } from './SearchField';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/SearchField',
  component: SearchField,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof SearchField>;

export const Default: StoryObj<Args> = {
  args: {},
};
