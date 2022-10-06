import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextareaField, Props } from './TextareaField';

export default {
  title: 'Molecules/Forms/TextareaField',
  component: TextareaField,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <TextareaField {...args} />;

export const Default = Template.bind({});
Default.args = {
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
