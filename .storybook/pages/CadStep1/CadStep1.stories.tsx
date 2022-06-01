import { StoryObj } from '@storybook/react';
import React from 'react';

import { CadStep1 } from './CadStep1';

export default {
  title: 'Pages/CAD/CadStep1',
  component: CadStep1,
};

type Args = React.ComponentProps<typeof CadStep1>;

export const Default: StoryObj<Args> = {};
