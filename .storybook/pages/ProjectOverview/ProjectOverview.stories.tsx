import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectOverview, Props } from './ProjectOverview';

export default {
  title: 'Pages/Projects/Overview',
  component: ProjectOverview,
} as Meta;

const Template: Story<Props> = (args) => <ProjectOverview {...args} />;

export const Default = Template.bind({});
Default.args = {};
