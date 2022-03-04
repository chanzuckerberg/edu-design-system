import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MediaBlock, Props } from './MediaBlock';
import { Heading } from '../Heading/Heading';
import { TextPassage } from '../TextPassage/TextPassage';

export default {
  title: 'Molecules/Blocks/MediaBlock',
  component: MediaBlock,
} as Meta;

const Template: Story<Props> = (args) => (
  <MediaBlock {...args}>
    <Heading className="u-margin-bottom-md" as="h3">
      Media block title
    </Heading>
    <TextPassage>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TextPassage>
  </MediaBlock>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://placehold.it/600x400',
  imgAlt: 'placeholder image',
};

export const Reversed = Template.bind({});
Reversed.args = {
  variant: 'reversed',
  imgSrc: 'https://placehold.it/600x400',
  imgAlt: 'placeholder image',
};
