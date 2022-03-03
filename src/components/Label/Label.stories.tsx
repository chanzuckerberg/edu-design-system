import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Label, Props } from './Label';

export default {
  title: 'Atoms/Forms/Label',
  component: Label,
} as Meta;

const Template: Story<Props> = (args) => <Label {...args} />;

const InvertedTemplate: Story<Props> = (args) => (
  <div style={{ padding: '1rem', background: '#000' }}>
    <Label {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = { text: 'Label', required: true };

export const Optional = Template.bind({});
Optional.args = { text: 'Label', required: false };

export const Inverted = InvertedTemplate.bind({});
Inverted.args = { inverted: true, text: 'Label', required: true };
