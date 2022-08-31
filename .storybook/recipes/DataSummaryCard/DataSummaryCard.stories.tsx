import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataSummaryCard } from './DataSummaryCard';

export default {
  title: 'Recipes/DataSummaryCard',
  component: DataSummaryCard,
  args: {
    title: 'title',
    dataAmount: 'XXX',
    dataUnit: '/ XXX',
    description: 'Description',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof DataSummaryCard>;

export const Default: StoryObj<Args> = {};
export const OffTrack: StoryObj<Args> = {
  args: {
    variant: 'off-track',
  },
};

export const NoDataUnit: StoryObj<Args> = {
  args: {
    dataAmount: '30',
    dataUnit: undefined,
  },
};

export const NoDescription: StoryObj<Args> = {
  args: {
    dataAmount: '50',
    dataUnit: '%',
    description: undefined,
  },
};
