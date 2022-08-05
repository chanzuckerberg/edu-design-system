import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Filters } from './Filters';
import Checkbox from '../Checkbox';

export default {
  title: 'Organisms/Tables/Filters',
  component: Filters,
  parameters: {
    badges: [BADGE.BETA],
  },
  args: {
    children: (
      <Filters.CheckboxField legend="Filters Segment 1">
        <Checkbox label="Filters label 1" />
        <Checkbox label="Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
        <Checkbox label="Filters label 3" />
      </Filters.CheckboxField>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};

export const Overflow: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Filters.CheckboxField legend="Filters Segment 1">
          <Checkbox label="Filters long label 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
          <Checkbox label="Filters label 2" />
          <Checkbox label="Filters label 3" />
        </Filters.CheckboxField>
        <Filters.CheckboxField legend="Filters Segment 2">
          <Checkbox label="Filters label 1" />
          <Checkbox label="Filters long label 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
          <Checkbox label="Filters label 3" />
        </Filters.CheckboxField>
        <Filters.CheckboxField legend="Filters Segment 3">
          <Checkbox label="Filters label 1" />
          <Checkbox label="Filters label 2" />
          <Checkbox label="Filters long label 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" />
        </Filters.CheckboxField>
        <Filters.CheckboxField legend="Filters Segment 4">
          <Checkbox label="Filters label 1" />
          <Checkbox label="Filters label 2" />
          <Checkbox label="Filters label 3" />
          <Checkbox label="Filters label 4" />
          <Checkbox label="Filters label 5" />
          <Checkbox label="Filters label 6" />
        </Filters.CheckboxField>
      </>
    ),
  },
};
