import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Hero, Props } from './Hero';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

export default {
  title: 'Molecules/Blocks/Hero',
  component: Hero,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Hero {...args}>
    <Heading size="h1">Hero title</Heading>
    <Text className="u-margin-top-xl">This is the hero description</Text>
  </Hero>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/1200x650',
  imgAlt: 'Hero Alt Txt',
};
