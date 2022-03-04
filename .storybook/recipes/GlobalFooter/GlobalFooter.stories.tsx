import { Story, Meta } from '@storybook/react';
import React from 'react';

import { GlobalFooter, Props } from './GlobalFooter';

export default {
  title: 'Recipes/GlobalFooter',
  component: GlobalFooter,
} as Meta;

const Template: Story<Props> = (args) => <GlobalFooter {...args} />;

export const Default = Template.bind({});
Default.args = {};
