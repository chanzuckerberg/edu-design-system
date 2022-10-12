import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Filters } from './Filters';
import Checkbox from '../../../src/components/Checkbox';
import FiltersCheckboxField from '../../../src/components/FiltersCheckboxField';

export default {
  title: 'Recipes/Filters',
  component: Filters,
  args: {
    hasSelectedFilters: false,
    placement: 'bottom-start',
    triggerText: 'Filters',
    children: (
      <FiltersCheckboxField legend="Filters Segment 1">
        <Checkbox label="Filters label 1" onChange={() => {}} />
        <Checkbox label="Filters label 2" onChange={() => {}} />
        <Checkbox label="Filters label 3" onChange={() => {}} />
      </FiltersCheckboxField>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0.25rem', height: '100vh' }}>
        <p>Filters are popover when larger screen size and drawer when not</p>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};
