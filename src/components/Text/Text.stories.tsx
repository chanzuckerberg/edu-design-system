import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, Props } from './Text';

export default {
  title: 'Atoms/Text/Text',
  component: Text,
} as Meta;

const Template: Story<Props> = (args) => (
  <Text {...args}>
    Text is a short text string rendered as either a paragraph or span.
  </Text>
);

export const Default = Template.bind({});
Default.args = {};
