import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { LayoutContainer } from './LayoutContainer';

export default {
  title: 'Components/Layout Container',
  component: LayoutContainer,
  parameters: {
    axe: {
      skip: true,
    },
    badges: ['1.0', BADGE.DEPRECATED],
  },
  args: {
    children: <div className="fpo">Layout container</div>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof LayoutContainer>;

export const Default: StoryObj<Args> = {};
