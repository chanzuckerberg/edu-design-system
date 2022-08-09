import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Filters } from './Filters';
import { FiltersDrawer } from '../FiltersDrawer/FiltersDrawer';

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
          { label: 'Filters label 1', value: 'Filters label 1' },
          { label: 'Filters label 2', value: 'Filters label 2' },
          { label: 'Filters label 3', value: 'Filters label 3' },
        ],
      },
    ],
    closeFilters: (checkedValues) => {
      console.log(checkedValues);
    },
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const DefaultInteractive: StoryObj<Args> = {};

const overflowCheckboxFields = [
  {
    legend: 'Filters Segment 1',
    checkboxes: [
      {
        label:
          'Filters long label 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        value: 'segment1label1',
      },
      { label: 'Filters label 2', value: 'segment1label2' },
      { label: 'Filters label 3', value: 'segment1label3' },
    ],
  },
  {
    legend: 'Filters Segment 2',
    checkboxes: [
      { label: 'Filters label 1', value: 'segment2label1' },
      {
        label:
          'Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        value: 'segment2label2',
      },
      { label: 'Filters label 3', value: 'segment2label3' },
    ],
  },
  {
    legend: 'Filters Segment 3',
    checkboxes: [
      { label: 'Filters label 1', value: 'segment3label1' },
      { label: 'Filters label 2', value: 'segment3label2' },
      {
        label:
          'Filters long label 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        value: 'segment3label3',
      },
    ],
  },
  {
    legend: 'Filters Segment 4',
    checkboxes: [
      { label: 'Filters label 1', value: 'segment4label1' },
      { label: 'Filters label 2', value: 'segment4label2' },
      { label: 'Filters label 3', value: 'segment4label3' },
      { label: 'Filters label 4', value: 'segment4label4' },
      { label: 'Filters label 5', value: 'segment4label5' },
      { label: 'Filters label 6', value: 'segment4label6' },
    ],
  },
];

const checkedMap = {};
overflowCheckboxFields.forEach(({ checkboxes }) => {
  checkboxes.forEach(({ value }) => {
    checkedMap[value] = false;
  });
});

export const OverflowInteractive: StoryObj<Args> = {
  args: {
    checkboxFields: overflowCheckboxFields,
    closeFilters: (checkedValues) => {
      console.log(checkedValues);
    },
  },
};

type FiltersDrawerArgs = React.ComponentProps<typeof FiltersDrawer>;
/**
 * 1) Axe testing throws error due to Drawer component not being controlled, but this story is mostly for visual regression testing as the interactive stories would only capture the toggle button.
 */
export const FiltersDrawerComponent: StoryObj<FiltersDrawerArgs> = {
  args: {
    checkboxFields: overflowCheckboxFields,
    checkedMap: { ...checkedMap },
    closeFilters: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    isActive: true,
  },
  render: (args) => <FiltersDrawer {...args} />,
  parameters: {
    axe: {
      disabledRules: ['aria-allowed-role'] /* 1 */,
    },
  },
};

export const FiltersDrawerComponentNoLegend: StoryObj<FiltersDrawerArgs> = {
  args: {
    checkboxFields: [
      {
        checkboxes: [
          {
            label: 'Checkbox label 1',
            value: 'checkbox1',
          },
          {
            label: 'Checkbox label 2',
            value: 'checkbox2',
          },
          {
            label: 'Checkbox label 3',
            value: 'checkbox3',
          },
        ],
      },
    ],
    checkedMap: { checkbox1: false, checkbox2: false, checkbox3: false },
    closeFilters: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    isActive: true,
  },
  render: (args) => <FiltersDrawer {...args} />,
  parameters: {
    axe: {
      disabledRules: ['aria-allowed-role'] /* 1 */,
    },
  },
};
