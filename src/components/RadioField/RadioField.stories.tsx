import { Story, Meta } from '@storybook/react';
import React from 'react';

import { RadioField, Props } from './RadioField';

export default {
  title: 'Molecules/Forms/RadioField',
  component: RadioField,
} as Meta;

const Template: Story<Props> = (args) => (
  <RadioField {...args}>
    <RadioField.Item name="radio-example" text="Radio 1" value="radio1" />
    <RadioField.Item name="radio-example" text="Radio 2" value="radio2" />
    <RadioField.Item name="radio-example" text="Radio 3" value="radio3" />
  </RadioField>
);

const DisabledTemplate: Story<Props> = (args) => (
  <RadioField {...args}>
    <RadioField.Item
      disabled={true}
      name="radio-example"
      text="Radio 1"
      value="radio1"
    />
    <RadioField.Item
      disabled={true}
      name="radio-example"
      text="Radio 2"
      value="radio2"
    />
    <RadioField.Item
      checked={true}
      disabled={true}
      name="radio-example"
      text="Radio 3"
      value="radio3"
    />
  </RadioField>
);

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <RadioField {...args}>
      <RadioField.Item
        inverted={true}
        name="radio-example"
        text="Radio 1"
        value="radio1"
      />
      <RadioField.Item
        inverted={true}
        name="radio-example"
        text="Radio 2"
        value="radio2"
      />
      <RadioField.Item
        inverted={true}
        name="radio-example"
        text="Radio 3"
        value="radio3"
      />
    </RadioField>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Radio field',
  fieldNote: 'This is a radio field',
};

export const Inline = Template.bind({});
Inline.args = {
  label: 'Radio field',
  variant: 'inline',
  fieldNote: 'This is a radio field',
};

export const Optional = Template.bind({});
Optional.args = {
  label: 'Radio field',
  optionalLabel: '(optional)',
  fieldNote: 'This is a radio field',
};

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  label: 'Radio field',
  disabled: true,
  fieldNote: 'This is a disabled radio field',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Radio field',
  isError: true,
  fieldNote: 'This is a field with an error',
};
export const Inverted = InvertedTemplate.bind({});
Inverted.args = {
  label: 'Radio field',
  inverted: true,
  fieldNote: 'This is an inverted field',
};
