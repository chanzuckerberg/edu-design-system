import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextField, Props } from './TextField';
import Button from '../Button';

export default {
  title: 'Molecules/Forms/TextField',
  component: TextField,
} as Meta;

const Template: Story<Props> = (args) => <TextField {...args} />;

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <TextField {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  fieldNote: 'This is a fieldnote.',
};

export const Inverted = InvertedTemplate.bind({});
Inverted.args = {
  inverted: true,
  fieldNote: 'This is a fieldnote.',
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  fieldNote: 'This is a fieldnote with an error.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Optional = Template.bind({});
Optional.args = {
  required: false,
  fieldNote: 'This is a fieldnote for an optional text field.',
};

export const HideLabel = Template.bind({});
HideLabel.args = {
  hideLabel: true,
};

export const InputWithin = () => {
  return (
    <div>
      <TextField
        type="text"
        inputWithin={
          <Button variant="bare" size="sm">
            Button
          </Button>
        }
      />
    </div>
  );
};
