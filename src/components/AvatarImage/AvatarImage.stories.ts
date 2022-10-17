import type { StoryObj, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { AvatarImage } from './AvatarImage';

export default {
  title: 'Atoms/Media/AvatarImage',
  component: AvatarImage,
} as Meta<Args>;

type Args = ComponentProps<typeof AvatarImage>;

export const Default: StoryObj<Args> = {};
