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
        <Checkbox label="Filters label 2" />
        <Checkbox label="Filters label 3" />
      </Filters.CheckboxField>
    ),
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};
