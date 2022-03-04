import { Story, Meta } from '@storybook/react';
import React from 'react';

import { LayoutLinelengthContainer, Props } from './LayoutLinelengthContainer';

export default {
  title: 'Molecules/Layout and Containers/Linelength Container',
  component: LayoutLinelengthContainer,
} as Meta;

const Template: Story<Props> = (args) => (
  <LayoutLinelengthContainer {...args}>
    <p>
      A Linelength Container caps the width of the content to a comfortable
      reading width.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </LayoutLinelengthContainer>
);

export const Default = Template.bind({});
Default.args = {};
