import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Fieldset } from './Fieldset';
import Checkbox from '../Checkbox';

export default {
  title: 'Atoms/Forms/Fieldset',
  component: Fieldset,
};

type Args = React.ComponentProps<typeof Fieldset>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Fieldset.Legend>Legend</Fieldset.Legend>
        <Fieldset.Items>
          <Checkbox label="Checkbox label 1" />
          <Checkbox label="Checkbox label 2" />
          <Checkbox label="Checkbox label 3" />
          <Checkbox label="Checkbox label 4" />
          <Checkbox label="Checkbox label 5" />
        </Fieldset.Items>
      </>
    ),
  },
};
