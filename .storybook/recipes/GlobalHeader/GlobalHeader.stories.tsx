import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GlobalHeader, Props } from './GlobalHeader';

export default {
  title: 'Recipes/GlobalHeader',
  component: GlobalHeader,
} as Meta;

const Template: Story<Props> = (args) => <GlobalHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
