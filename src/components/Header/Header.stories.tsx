import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    children: <div className="fpo">Header children</div>,
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Header>;

export const Default: StoryObj<Args> = {};
