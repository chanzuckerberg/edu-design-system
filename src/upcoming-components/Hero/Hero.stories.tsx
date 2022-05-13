import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Hero, Props } from './Hero';
import Heading from '../../components/Heading';
import TextPassage from '../../components/TextPassage';

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
    <TextPassage className="u-margin-top-lg">
      This is the hero description
    </TextPassage>
  </Hero>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/1200x650',
  imgAlt: 'Hero Alt Txt',
};
