import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { BaselineCard } from './BaselineCard';

export default {
  title: 'Recipes/BaselineCard',
  component: BaselineCard,
  args: {
    label: 'Selection of Evidence',
    body: "In this Focus Area, you explore the main question: How does the structures of organisms enable life's functions?",
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof BaselineCard>;

export const Default: StoryObj<Args> = {};

export const WithMetadata: StoryObj<Args> = {
  args: {
    metadata: {
      score: '9 / 10',
      attempts: 2,
      deadline: 'Dec 06',
      variant: 'success',
    },
  },
};
