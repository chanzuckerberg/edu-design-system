import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MediaBlock, Props } from './MediaBlock';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import PlaceholderImage from '../../static/compass-solo.svg';

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
  imgSrc: PlaceholderImage,
  imgAlt: 'placeholder image',
};

export const Reversed = Template.bind({});
Reversed.args = {
  variant: 'reversed',
  imgSrc: PlaceholderImage,
  imgAlt: 'placeholder image',
};
