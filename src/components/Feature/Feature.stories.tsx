import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Feature, Props } from './Feature';
import { Heading } from '../Heading/Heading';
import { TextPassage } from '../TextPassage/TextPassage';

export default {
  title: 'Molecules/Blocks/Feature',
  component: Feature,
} as Meta;

const Template: Story<Props> = (args) => (
  <Feature {...args}>
    <Heading as="h2">Feature title</Heading>
    <TextPassage className="u-margin-top-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    </TextPassage>
  </Feature>
);

export const Default = Template.bind({});
Default.args = {
  imgSrc: 'https://via.placeholder.com/450x500.png',
  imgAlt: 'Placeholder Text',
  title: 'Feature Title',
  text: 'This is a button',
};
