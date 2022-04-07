import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CheckboxField, Props } from './CheckboxField';
import CheckboxFieldItem from '../CheckboxFieldItem';

export default {
  title: 'Molecules/Forms/CheckboxField',
  component: CheckboxField,
} as Meta;

const Template: Story<Props> = (args) => (
  <CheckboxField {...args}>
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 1"
      value="checkbox1"
    />
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 2"
      value="checkbox2"
    />
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 3"
      value="checkbox3"
    />
  </CheckboxField>
);

const DisabledTemplate: Story<Props> = (args) => (
  <CheckboxField {...args}>
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 1"
      value="checkbox1"
      disabled={true}
      checked={true}
    />
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 2"
      value="checkbox2"
      disabled={true}
    />
    <CheckboxFieldItem
      name="checkbox-example"
      text="Checkbox 3"
      value="checkbox3"
      disabled={true}
    />
  </CheckboxField>
);

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <CheckboxField {...args}>
      <CheckboxFieldItem
        name="checkbox-example"
        text="Checkbox 1"
        value="checkbox1"
      />
      <CheckboxFieldItem
        name="checkbox-example"
        text="Checkbox 2"
        value="checkbox2"
      />
      <CheckboxFieldItem
        name="checkbox-example"
        text="Checkbox 3"
        value="checkbox3"
      />
    </CheckboxField>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox field',
  fieldNote: 'This is a checkbox field',
};

export const Inline = Template.bind({});
Inline.args = {
  label: 'Checkbox field',
  variant: 'inline',
  fieldNote: 'This is a checkbox field',
};

export const Optional = Template.bind({});
Optional.args = {
  label: 'Checkbox field',
  required: false,
  fieldNote: 'This is a checkbox field',
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  label: 'Checkbox field',
  disabled: true,
  fieldNote: 'This is a disabled checkbox field',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Checkbox field',
  isError: true,
  fieldNote: 'This is a field with an error',
};
export const Inverted = InvertedTemplate.bind({});
Inverted.args = {
  label: 'Checkbox field',
  inverted: true,
  fieldNote: 'This is an inverted field',
};
