import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import {GlobalHeader} from './GlobalHeader';

export default {
  title: 'Recipes/GlobalHeader',
  component: GlobalHeader,
} as Meta;

type Args = React.ComponentProps<typeof GlobalHeader>;
export const Default: StoryObj<Args> = {};
