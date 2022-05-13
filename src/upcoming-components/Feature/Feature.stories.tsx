import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Feature, Props } from './Feature';
import Heading from '../../components/Heading';
import TextPassage from '../../components/TextPassage';

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
    <TextPassage className="u-margin-top-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </TextPassage>
  </Feature>
);

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
  imgSrc: 'https://via.placeholder.com/450x500.png',
  imgAlt: 'Placeholder Text',
  title: 'Feature Title',
};
