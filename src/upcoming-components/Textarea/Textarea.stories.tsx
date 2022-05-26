import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Textarea, Props } from './Textarea';

export default {
  title: 'Atoms/Forms/Textarea',
  component: Textarea,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    parameters: {
      badges: [BADGE.BETA],
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};
