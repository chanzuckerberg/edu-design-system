import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Main, Props } from './Main';

export default {
  title: 'Molecules/Layout and Containers/Main',
  component: Main,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Main {...args}>
    <div className="fpo">Main element</div>
  </Main>
);

export const Default = Template.bind({});
Default.args = {};
