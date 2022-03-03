import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ModalExample, Props } from './ModalExample';

export default {
  title: 'Organisms/Interactive/Modal',
  component: ModalExample,
} as Meta;

const Template: Story<Props> = (args) => <ModalExample {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };
