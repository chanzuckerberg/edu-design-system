import {StoryObj, Meta} from '@storybook/react';
import React from 'react';

import {Panel} from './Panel';

export default {
  title: 'Molecules/Layout and Containers/Panel',
  component: Panel,
  args: {
    children: 'A Panel is a generic bordered container for content.',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Panel>;

export const Default: StoryObj<Args> = {};

export const Flush: StoryObj<Args> = {
  args: {
    flush: true,
  },
};

export const Squared: StoryObj<Args> = {
  args: {
    variant: 'squared',
  },
};

export const Centered: StoryObj<Args> = {
  args: {
    align: 'center',
  },
};
