import type { StoryObj } from '@storybook/react';
import React from 'react';
import { Fieldset } from './Fieldset';
import Checkbox from '../Checkbox';
import { Default as CheckboxFieldStory } from '../CheckboxField/CheckboxField.stories';
import FieldsetItems from '../FieldsetItems';
import FieldsetLegend, { FieldsetLegendProps } from '../FieldsetLegend';
import { Default as RadioFieldStory } from '../RadioField/RadioField.stories';

export default {
  title: 'Atoms/Forms/Fieldset',
  component: Fieldset,
};

type Args = React.ComponentProps<typeof Fieldset>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <FieldsetLegend text="Legend" />
        <FieldsetItems>
          <Checkbox label="Checkbox label 1" />
          <Checkbox label="Checkbox label 2" />
          <Checkbox label="Checkbox label 3" />
          <Checkbox label="Checkbox label 4" />
          <Checkbox label="Checkbox label 5" />
        </FieldsetItems>
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
      <FieldsetLegend {...args} />
      <FieldsetLegend {...args} optionalLabel="(optional)" />
      <FieldsetLegend {...args} optionalLabel="(required)" />
      <FieldsetLegend {...args} optionalLabel="*" />
    </>
  ),
};

export const CheckboxField = CheckboxFieldStory;
CheckboxField.args.fieldNote =
  'Checkbox fieldset usage. See CheckboxField Stories for more examples.';
CheckboxField.parameters = { chromatic: { disableSnapshot: true } }; // Disabled since already being snapped in original story.

export const RadioField = RadioFieldStory;
RadioField.args.fieldNote =
  'RadioField fieldset usage. See RadioField Stories for more examples.';
RadioField.parameters = { chromatic: { disableSnapshot: true } }; // Disabled since already being snapped in original story.
