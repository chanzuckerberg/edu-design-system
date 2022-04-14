import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Tile, Props } from './Tile';
import Heading from '../Heading';
import TextPassage from '../TextPassage';
import TileBody from '../TileBody';
import TileHeader from '../TileHeader';

export default {
  title: 'Molecules/Blocks/Tile',
  component: Tile,
} as Meta;

const Template: Story<Props> = (args) => (
  <Tile {...args}>
    <TileHeader>
      <Heading as="h2" className="u-margin-bottom-sm" size="h4">
        <a href="/">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit.
      </Heading>
    </TileHeader>
    <TileBody>
      <TextPassage capLinelength={false}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{' '}
          <strong>
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
          </strong>{' '}
          consequat.
        </p>
      </TextPassage>
    </TileBody>
  </Tile>
);

export const Default = Template.bind({});
Default.args = {};
