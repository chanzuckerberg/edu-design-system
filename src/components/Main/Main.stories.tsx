import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Main } from './Main';

export default {
  title: 'Molecules/Layout and Containers/Main',
  component: Main,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
  args: {
    children: <div className="fpo">Main element</div>,
  },
} as Meta;

type Args = React.ComponentProps<typeof Main>;

export const Default: StoryObj<Args> = {};
