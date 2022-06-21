import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Feature, Props } from './Feature';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import PlaceholderImage from '../../static/compass-solo.svg';

export default {
  title: 'Molecules/Blocks/Feature',
  component: Feature,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Feature {...args}>
    <Heading size="h2">Feature title</Heading>
    <Text className="u-margin-top-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </Text>
  </Feature>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: PlaceholderImage,
  imgAlt: 'Placeholder Text',
  title: 'Feature Title',
};
