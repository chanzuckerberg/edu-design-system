import { Story, Meta } from '@storybook/react';
import React from 'react';

import { MediaBlock, Props } from './MediaBlock';
import Heading from '../Heading';
import TextPassage from '../TextPassage';

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
