import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ModalExample, Props } from './ModalExample';

export default {
  title: 'Organisms/Interactive/Modal',
  component: ModalExample,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <ModalExample {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };
