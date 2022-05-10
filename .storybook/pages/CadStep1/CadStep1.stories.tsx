import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CadStep1 } from './CadStep1';

export default {
  title: 'Pages/CAD/CadStep1',
  component: CadStep1,
} as Meta;

const Template: Story = (args) => <CadStep1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
