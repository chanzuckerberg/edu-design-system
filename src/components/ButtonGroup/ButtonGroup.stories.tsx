import { Story, Meta } from '@storybook/react';
import React from 'react';
import { ButtonGroup, Props } from './ButtonGroup';
import Button from '../Button';

export default {
  title: 'Organisms/Buttons/ButtonGroup',
  component: ButtonGroup,
} as Meta;

const Template: Story<Props> = (args) => (
  <ButtonGroup {...args}>
    <Button variant="primary">Primary Button</Button>
    <Button>Secondary Button</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const Responsive = Template.bind({});
Responsive.args = { behavior: 'responsive' };

export const Stacked = Template.bind({});
Stacked.args = { behavior: 'stacked' };
