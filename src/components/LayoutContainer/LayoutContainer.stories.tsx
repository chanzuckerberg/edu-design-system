import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LayoutContainer, Props } from './LayoutContainer';

export default {
  title: 'Molecules/Layout and Containers/Layout Container',
  component: LayoutContainer,
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <LayoutContainer {...args}>
    <div className="fpo">Layout container</div>
  </LayoutContainer>
);

export const Default = Template.bind({});
Default.args = {};
