import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataSummaryCard } from './DataSummaryCard';

export default {
  title: 'Recipes/DataSummaryCard',
  component: DataSummaryCard,
  args: {
    title: 'students',
    data: 'XXX',
    dataUnit: '/ XXX',
    description: 'Off Track',
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
    data: '30',
    dataUnit: undefined,
  },
};

export const NoDescription: StoryObj<Args> = {
  args: {
    description: undefined,
  },
};
