import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PageHeader } from './PageHeader';
import Tag from '../Tag';
import Text from '../Text';

export default {
  title: 'Molecules/Text/PageHeader',
  component: PageHeader,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof PageHeader>;

export const Default: StoryObj<Args> = {
  args: {
    title: 'Page header title',
  },
};
export const WithDescription: StoryObj<Args> = {
  args: {
    title: 'Page header title',
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
};
export const WithKicker: StoryObj<Args> = {
  args: {
    kicker: (
      <Text as="div" size="overline">
        Kicker above title
      </Text>
    ),
    title: 'Page header title',
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
export const Centered: StoryObj<Args> = {
  args: {
    align: 'center',
    title: 'Page header title',
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
export const TitleAfter: StoryObj<Args> = {
  args: {
    title: 'Page header title',
    titleAfter: <Tag text="Title after content" />,
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const TwoUp: StoryObj<Args> = {
  args: {
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    title: 'Page header title',
    right:
      'Right content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    orientation: '2up',
  },
};
