import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TextInput, Props } from './TextInput';

export default {
  title: 'Atoms/Forms/TextInput',
  component: TextInput,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
