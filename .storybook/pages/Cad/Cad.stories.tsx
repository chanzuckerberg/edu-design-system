import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Cad } from './Cad';

export default {
  title: 'Pages/CAD/Edit',
  component: Cad,
} as Meta;

const Template: Story = (args) => <Cad {...args} />;

export const Default = Template.bind({});
Default.args = {};
