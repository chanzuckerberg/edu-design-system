import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/RadioButton',
  component: RadioButton,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof RadioButton>;

export const Default: StoryObj<Args> = {
  args: {},
};
