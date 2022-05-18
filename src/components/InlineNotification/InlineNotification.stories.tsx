import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { InlineNotification } from './InlineNotification';

export default {
  title: 'Example/InlineNotification',
  component: InlineNotification,
  parameters: {
    badges: [BADGE.BETA],
  },
};

type Args = React.ComponentProps<typeof InlineNotification>;

export const Default: StoryObj<Args> = {};
