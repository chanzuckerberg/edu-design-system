import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Tags, Props } from './Tags';
import Tag from '../Tag';

export default {
  title: 'Molecules/Messaging/Tags',
  component: Tags,
} as Meta;

const tags = [
  <Tag key={`tag-in-array${1}`} text="Tag 1" />,
  <Tag key={`tag-in-array${2}`} text="Tag 2" variant="warning" />,
  <Tag key={`tag-in-array${3}`} text="Tag 3" variant="brand" />,
  <Tag key={`tag-in-array${4}`} text="Tag 3" variant="error" />,
  <Tag key={`tag-in-array${5}`} text="Tag 3" variant="yield" />,
  <Tag key={`tag-in-array${6}`} text="Tag 3" variant="success" />,
];

const Template: Story<Props> = (args) => <Tags tags={tags} {...args} />;

export const Default = Template.bind({});
Default.args = {};
