import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Cad } from './Cad';

export default {
  title: 'Pages/CAD/Edit',
  component: Cad,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Cad>;
export const Default: StoryObj<Args> = {};
