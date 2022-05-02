import { Story, Meta } from '@storybook/react';
import React from 'react';

import { ProjectOverview } from './ProjectOverview';

export default {
  title: 'Pages/Projects/Overview',
  component: ProjectOverview,
  parameters: {
    axe: {
      // TODO: ListDetail default text is too light
      disabledRules: ['color-contrast'],
    },
  },
} as Meta;

const Template: Story = (args) => <ProjectOverview {...args} />;

export const StudentView = Template.bind({});
StudentView.args = {};
