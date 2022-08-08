import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Filters } from './Filters';

export default {
  title: 'Organisms/Tables/Filters',
  component: Filters,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    checkboxFields: [
      {
        legend: 'Filters Segment 1',
        checkboxes: [
          { label: 'Filters label 1', identifier: 'Filters label 1' },
          { label: 'Filters label 2', identifier: 'Filters label 2' },
          { label: 'Filters label 3', identifier: 'Filters label 3' },
        ],
      },
    ],
    closeFilters: (checkedIdentifiers) => {
      console.log(checkedIdentifiers);
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};

export const Overflow: StoryObj<Args> = {
  args: {
    checkboxFields: [
      {
        legend: 'Filters Segment 1',
        checkboxes: [
          {
            label:
              'Filters long label 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            identifier: 'segment1label1',
          },
          { label: 'Filters label 2', identifier: 'segment1label2' },
          { label: 'Filters label 3', identifier: 'segment1label3' },
        ],
      },
      {
        legend: 'Filters Segment 2',
        checkboxes: [
          { label: 'Filters label 1', identifier: 'segment2label1' },
          {
            label:
              'Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            identifier: 'segment2label2',
          },
          { label: 'Filters label 3', identifier: 'segment2label3' },
        ],
      },
      {
        legend: 'Filters Segment 3',
        checkboxes: [
          { label: 'Filters label 1', identifier: 'segment3label1' },
          { label: 'Filters label 2', identifier: 'segment3label2' },
          {
            label:
              'Filters long label 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
            identifier: 'segment3label3',
          },
        ],
      },
      {
        legend: 'Filters Segment 4',
        checkboxes: [
          { label: 'Filters label 1', identifier: 'segment4label1' },
          { label: 'Filters label 2', identifier: 'segment4label2' },
          { label: 'Filters label 3', identifier: 'segment4label3' },
          { label: 'Filters label 4', identifier: 'segment4label4' },
          { label: 'Filters label 5', identifier: 'segment4label5' },
          { label: 'Filters label 6', identifier: 'segment4label6' },
        ],
      },
    ],
    closeFilters: (checkedIdentifiers) => {
      console.log(checkedIdentifiers);
    },
  },
};
