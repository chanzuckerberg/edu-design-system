import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { RadioField, Props } from './RadioField';
import RadioFieldItem from '../RadioFieldItem';

export default {
  title: 'Molecules/Forms/RadioField',
  component: RadioField,
  subcomponents: { RadioFieldItem },
  args: {
    label: 'Radio field',
  },
  parameters: {
    badges: [BADGE.BETA],
  },
};

export const Default: StoryObj<Props> = {
  render: ({ fieldNote = 'This is a radio field', ...args }) => (
    <RadioField fieldNote={fieldNote} {...args}>
      <RadioField.Item name="radio-example" text="Radio 1" value="radio1" />
      <RadioField.Item name="radio-example" text="Radio 2" value="radio2" />
      <RadioField.Item name="radio-example" text="Radio 3" value="radio3" />
    </RadioField>
  ),
};

export const Inline = {
  ...Default,
  args: {
    variant: 'inline',
  },
};

export const Optional = {
  ...Default,
  args: {
    optionalLabel: '(optional)',
  },
};

export const Disabled: StoryObj<Props> = {
  render: (args) => (
    <RadioField
      disabled={true}
      fieldNote="This is a disabled radio field"
      {...args}
    >
      <RadioField.Item
        checked={true}
        disabled={true}
        name="checkbox-example"
        text="Checkbox 1"
        value="checkbox1"
      />
      <RadioField.Item
        disabled={true}
        name="checkbox-example"
        text="Checkbox 2"
        value="checkbox2"
      />
      <RadioField.Item
        disabled={true}
        name="checkbox-example"
        text="Checkbox 3"
        value="checkbox3"
      />
    </RadioField>
  ),
};

export const Error = {
  ...Default,
  args: {
    isError: true,
    fieldNote: 'This is a field with an error',
  },
};
