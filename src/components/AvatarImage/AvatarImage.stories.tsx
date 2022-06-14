import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { AvatarImage } from './AvatarImage';

export default {
  title: 'Example/AvatarImage',
  component: AvatarImage,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof AvatarImage>;
export const Default: StoryObj<Args> = {};
