import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectColumn, Props } from './ProjectColumn';

export default {
  title: 'Recipes/ProjectColumn',
  component: ProjectColumn,
} as Meta;

const Template: Story<Props> = (args) => <ProjectColumn {...args} />;

export const Default = Template.bind({});
Default.args = {};
