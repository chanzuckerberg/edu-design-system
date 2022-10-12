import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { GlobalHeader } from './GlobalHeader';

export default {
  title: 'Recipes/GlobalHeader',
  component: GlobalHeader,
} as Meta;

type Args = ComponentProps<typeof GlobalHeader>;

export const Default: StoryObj<Args> = {};
