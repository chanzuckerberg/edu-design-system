import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Fieldset } from './Fieldset';
import Checkbox from '../Checkbox';
import FieldsetItems from '../FieldsetItems';
import FieldsetLegend, { FieldsetLegendProps } from '../FieldsetLegend';
import { Default as RadioFieldStory } from '../RadioField/RadioField.stories';

export default {
  title: 'Atoms/Forms/Fieldset',
  component: Fieldset,
  subcomponents: { FieldsetLegend, FieldsetItems },
};

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

export const RadioField = RadioFieldStory;
RadioField.args.fieldNote =
  'RadioField fieldset usage. See RadioField Stories for more examples.';
RadioField.parameters = { chromatic: { disableSnapshot: true } }; // Disabled since already being snapped in original story.
