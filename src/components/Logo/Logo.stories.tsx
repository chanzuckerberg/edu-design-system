import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Logo, Props } from './Logo';

export default {
  title: 'Molecules/Global/Logo',
  component: Logo,
} as Meta;

const Template: Story<Props> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/200x70',
  alt: 'Learning Platform',
};
