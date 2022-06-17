import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'Organisms/Global/Header',
  component: Header,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: <div className="fpo">Header children</div>,
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Header>;

export const Default: StoryObj<Args> = {};
