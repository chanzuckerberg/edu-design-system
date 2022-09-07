import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Atoms/Media/Avatar',
  component: Avatar,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Avatar>;

export const Default: StoryObj<Args> = {};
