import {StoryObj, Meta} from '@storybook/react';
import React from 'react';
import Checkbox from '../../../src/components/Checkbox';
import FiltersCheckboxField from '../../../src/components/FiltersCheckboxField';
import {Filters} from './Filters';

export default {
  title: 'Recipes/Filters',
  component: Filters,
  args: {
    hasSelectedFilters: false,
    placement: 'bottom-start',
    triggerText: 'Filters',
    children: (
      <FiltersCheckboxField legend="Filters Segment 1">
        <Checkbox
          label="Filters label 1"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
        <Checkbox
          label="Filters label 2"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
        <Checkbox
          label="Filters label 3"
          onChange={
            () => {} /* eslint-disable-line @typescript-eslint/no-empty-function */
          }
        />
      </FiltersCheckboxField>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{margin: '0.25rem', height: '100vh'}}>
        <p>Filters are popover when larger screen size and drawer when not</p>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};
