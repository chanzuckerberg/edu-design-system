import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MediaBlock, Props } from './MediaBlock';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

export default {
  title: 'Molecules/Blocks/MediaBlock',
  component: MediaBlock,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <MediaBlock {...args}>
    <Heading className="u-margin-bottom-md" size="h3">
      Media block title
    </Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </MediaBlock>
);

export const Default = Template.bind({});
Default.args = {
  // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
  imgSrc: 'https://st1.latestly.com/wp-content/uploads/2021/08/31-6.jpg',
  imgAlt: 'placeholder image',
};

export const Reversed = Template.bind({});
Reversed.args = {
  variant: 'reversed',
  // eslint-disable-next-line @chanzuckerberg/stories/no-ext-resources-in-stories
  imgSrc: 'https://st1.latestly.com/wp-content/uploads/2021/08/31-6.jpg',
  imgAlt: 'placeholder image',
};
