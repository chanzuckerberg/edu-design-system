import { Meta } from '@storybook/react';
import React from 'react';

import { Announcements } from './Announcements';

export default {
  title: 'Pages/Announcements',
  component: Announcements,
  parameters: {
    axe: {
      // TODO: remove when "fpo" content is fully stubbed out
      disabledRules: ['color-contrast'],
    },
  },
} as Meta;

const Template = (args) => <Announcements {...args} />;

export const StudentView = Template.bind({});
StudentView.args = {};

export const TeacherView = Template.bind({});
TeacherView.args = {};
