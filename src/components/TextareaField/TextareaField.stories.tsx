import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField, Props } from './TextareaField';

export default {
  title: 'Molecules/Forms/TextareaField',
  component: TextareaField,
} as Meta;

const Template: Story<Props> = (args) => <TextareaField {...args} />;

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <TextareaField {...args} />
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
  fieldNote: 'This is a fieldnote for an optional textarea field.',
};

export const HideLabel = Template.bind({});
HideLabel.args = {
  hideLabel: true,
};
