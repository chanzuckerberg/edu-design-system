import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectCard, Props } from './ProjectCard';

export default {
  title: 'Recipes/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story<Props> = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Project card title',
  meta: '12 days',
  number: 1,
  numberAriaLabel: 'Project 1',
};

export const Draggable = Template.bind({});
Draggable.args = {
  behavior: 'draggable',
  title: 'DragDropItem provides handle to the left',
  meta: '12 days',
  numberAriaLabel: 'Project 1',
};
