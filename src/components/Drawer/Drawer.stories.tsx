import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DrawerExample, Props } from './DrawerExample';

export default {
  title: 'Organisms/Interactive/Drawer',
  component: DrawerExample,
} as Meta;

const Template: Story<Props> = (args) => <DrawerExample {...args} />;

export const Default = Template.bind({});
Default.args = {};
