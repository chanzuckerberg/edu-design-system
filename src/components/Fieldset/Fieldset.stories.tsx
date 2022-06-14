import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Fieldset } from './Fieldset';
import Checkbox from '../Checkbox';
import FieldsetItems from '../FieldsetItems';
import FieldsetLegend, { FieldsetLegendProps } from '../FieldsetLegend';

export default {
  title: 'Atoms/Forms/Fieldset',
  component: Fieldset,
  subcomponents: { FieldsetLegend, FieldsetItems },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Fieldset>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Fieldset.Legend text="Legend" />
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

export const FieldsetLegends: StoryObj<FieldsetLegendProps> = {
  args: {
    text: 'Legend',
  },
  render: (args) => (
    <>
      <Fieldset.Legend {...args} />
      <Fieldset.Legend {...args} optionalLabel="(optional)" />
      <Fieldset.Legend {...args} optionalLabel="(required)" />
    </>
  ),
};
