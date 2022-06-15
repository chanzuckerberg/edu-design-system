import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { TextInput } from './TextInput';

export default {
  title: 'Atoms/Forms/TextInput',
  component: TextInput,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof TextInput>;

export const Default: StoryObj<Args> = {};
