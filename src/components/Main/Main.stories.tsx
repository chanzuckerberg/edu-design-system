import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Main } from './Main';

export default {
  title: 'Components/Main',
  component: Main,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
  args: {
    children: <div className="fpo">Main element</div>,
  },
} as Meta;

type Args = React.ComponentProps<typeof Main>;

export const Default: StoryObj<Args> = {};
