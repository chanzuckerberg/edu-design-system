import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { PageHeader, Props } from './PageHeader';
import Tag from '../Tag';

export default {
  title: 'Molecules/Text/PageHeader',
  component: PageHeader,
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = { title: 'Page header title' };

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
};

export const WithKicker = Template.bind({});
WithKicker.args = {
  kicker: 'Kicker above title',
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const Centered = Template.bind({});
Centered.args = {
  align: 'center',
  title: 'Page header title',
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const TitleAfter = Template.bind({});
TitleAfter.args = {
  title: 'Page header title',
  titleAfter: <Tag text="Title after content" />,
  description:
    'This is a description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
