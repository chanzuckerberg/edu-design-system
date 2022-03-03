import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SelectField, Props } from './SelectField';

export default {
  title: 'Molecules/Forms/SelectField',
  component: SelectField,
} as Meta;

const Template: Story<Props> = (args) => <SelectField {...args} />;

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <SelectField {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is a default select field',
};

export const Inverted = InvertedTemplate.bind({});
Inverted.args = {
  inverted: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is a default select field',
};

export const Optional = Template.bind({});
Optional.args = {
  required: false,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is an optional select field',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is a disabled select field',
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  label: 'Label',
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is a field with an error',
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  label: 'Label',
  hideLabel: true,
  items: [
    {
      value: 'value-1',
      label: 'Value 1',
    },
    {
      value: 'value-2',
      label: 'Value 2',
    },
    {
      value: 'value-3',
      label: 'Value 3',
    },
  ],
  fieldNote: 'This is a select field with a hidden label',
};
