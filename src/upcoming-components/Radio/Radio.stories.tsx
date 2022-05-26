import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Radio, Props } from './Radio';

export default {
  title: 'Atoms/Forms/Radio',
  component: Radio,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const DisabledChecked = Template.bind({});
DisabledChecked.args = { disabled: true, checked: true };
