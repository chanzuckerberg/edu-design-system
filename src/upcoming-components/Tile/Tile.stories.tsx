import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Tile, Props } from './Tile';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import TileBody from '../TileBody';
import TileHeader from '../TileHeader';

export default {
  title: 'Molecules/Blocks/Tile',
  component: Tile,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Tile {...args}>
    <TileHeader>
      <Heading as="h2" className="u-margin-bottom-sm" size="h4">
        <a href="/">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit.
      </Heading>
    </TileHeader>
    <TileBody>
      <Text capLinelength={false}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,{' '}
        <strong>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo
        </strong>{' '}
        consequat.
      </Text>
    </TileBody>
  </Tile>
);

export const Default = Template.bind({});
Default.args = {};
