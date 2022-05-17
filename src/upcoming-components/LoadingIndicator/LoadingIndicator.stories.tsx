import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LoadingIndicator, Props } from './LoadingIndicator';

export default {
  title: 'Atoms/Messaging/LoadingIndicator',
  component: LoadingIndicator,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <LoadingIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {};
