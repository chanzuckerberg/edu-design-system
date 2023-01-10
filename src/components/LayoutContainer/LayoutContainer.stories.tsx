import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { LayoutContainer } from './LayoutContainer';

export default {
  title: 'Components/Layout Container',
  component: LayoutContainer,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
  args: {
    children: <div className="fpo">Layout container</div>,
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof LayoutContainer>;

export const Default: StoryObj<Args> = {};
