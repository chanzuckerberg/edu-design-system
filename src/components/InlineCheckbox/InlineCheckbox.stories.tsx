import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InlineCheckbox, Props } from './InlineCheckbox';

export default {
  title: 'Molecules/Forms/InlineCheckbox',
  component: InlineCheckbox,
} as Meta;

const Template: Story<Props> = (args) => <InlineCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'inlinecheckbox',
  label: 'Inline checkbox label',
};

export const Checked = Template.bind({});
Checked.args = {
  name: 'inlinecheckbox',
  label: 'Inline checkbox label',
  checked: true,
};

export const VisuallyHideLabel = Template.bind({});
VisuallyHideLabel.args = {
  name: 'inlinecheckbox',
  label: 'Inline checkbox label',
  hideLabel: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  name: 'inlinecheckbox',
  label: 'Indeterminate checkbox',
  indeterminate: true,
};
