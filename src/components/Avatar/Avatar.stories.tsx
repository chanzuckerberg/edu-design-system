import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Avatar>;

export const Default: StoryObj<Args> = {};
