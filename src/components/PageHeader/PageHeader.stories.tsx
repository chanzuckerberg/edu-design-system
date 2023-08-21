import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { PageHeader } from './PageHeader';
import Breadcrumbs from '../Breadcrumbs';
import Tag from '../Tag';
import Text from '../Text';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    badges: ['1.0', BADGE.DEPRECATED],
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
export const WithOverline: StoryObj<Args> = {
  args: {
    overline: <Text size="overline">Overline above title</Text>,
    title: 'Page header title',
    description:
      'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export const WithBreadcrumbs: StoryObj<Args> = {
  args: {
    overline: (
      <Breadcrumbs>
        <Breadcrumbs.Item href="#" text="My Courses" />
        <Breadcrumbs.Item href="#" text="(2023) Modern World 1" />
      </Breadcrumbs>
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
