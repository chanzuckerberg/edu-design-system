import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Recipes/Avatar',
  component: Avatar,
} as Meta<Args>;

type Args = ComponentProps<typeof Avatar>;

export const Default: StoryObj<Args> = {};
