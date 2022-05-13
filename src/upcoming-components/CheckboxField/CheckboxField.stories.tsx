import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj } from '@storybook/react';
import React from 'react';

import { CheckboxField, Props } from './CheckboxField';
import CheckboxFieldItem from '../CheckboxFieldItem';

export default {
  title: 'Molecules/Forms/CheckboxField',
  component: CheckboxField,
  subcomponents: { CheckboxFieldItem },
  args: {
    label: 'Checkbox field',
  },
  parameters: {
    badges: [BADGE.BETA],
  },
};

export const Default: StoryObj<Props> = {
  render: ({ fieldNote = 'This is a checkbox field', ...args }) => (
    <CheckboxField fieldNote={fieldNote} {...args}>
      <CheckboxField.Item
        name="checkbox-example"
        text="Checkbox 1"
        value="checkbox1"
      />
      <CheckboxField.Item
        name="checkbox-example"
        text="Checkbox 2"
        value="checkbox2"
      />
      <CheckboxField.Item
        name="checkbox-example"
        text="Checkbox 3"
        value="checkbox3"
      />
    </CheckboxField>
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
    <CheckboxField
      disabled={true}
      fieldNote="This is a disabled checkbox field"
      {...args}
    >
      <CheckboxField.Item
        checked={true}
        disabled={true}
        name="checkbox-example"
        text="Checkbox 1"
        value="checkbox1"
      />
      <CheckboxField.Item
        disabled={true}
        name="checkbox-example"
        text="Checkbox 2"
        value="checkbox2"
      />
      <CheckboxField.Item
        disabled={true}
        name="checkbox-example"
        text="Checkbox 3"
        value="checkbox3"
      />
    </CheckboxField>
  ),
};

export const Error = {
  ...Default,
  args: {
    isError: true,
    fieldNote: 'This is a field with an error',
  },
};

export const Inverted: StoryObj<Props> = {
  render: (args) => (
    <div style={{ padding: '1rem', background: '#000' }}>
      <CheckboxField
        fieldNote="This is an inverted field"
        inverted={true}
        {...args}
      >
        <CheckboxField.Item
          name="checkbox-example"
          text="Checkbox 1"
          value="checkbox1"
        />
        <CheckboxField.Item
          name="checkbox-example"
          text="Checkbox 2"
          value="checkbox2"
        />
        <CheckboxField.Item
          name="checkbox-example"
          text="Checkbox 3"
          value="checkbox3"
        />
      </CheckboxField>
    </div>
  ),
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      disabledRules: ['color-contrast'],
    },
  },
};
