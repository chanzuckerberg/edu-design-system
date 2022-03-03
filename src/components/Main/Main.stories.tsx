import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Main, Props } from './Main';

export default {
  title: 'Molecules/Layout and Containers/Main',
  component: Main,
} as Meta;

const Template: Story<Props> = (args) => (
  <Main {...args}>
    <div className="fpo">Main element</div>
  </Main>
);

export const Default = Template.bind({});
Default.args = {};
