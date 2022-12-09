import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import type React from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'PleaseUpdateThisToADifferentFolder/Toggle',
  component: Toggle,
  args: {
    label: 'Lorem ipsum',
    checked: false,
    onChange: () => {},
  },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Toggle>;

export const Default: StoryObj<Args> = {};
