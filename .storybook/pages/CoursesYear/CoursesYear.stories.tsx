import { Story, Meta } from '@storybook/react';
import React from 'react';

import { CoursesYear } from './CoursesYear';

export default {
  title: 'Pages/Courses/Year',
  component: CoursesYear,
  parameters: {
    axe: {
      // TODO: remove when "fpo" content is fully stubbed out
      disabledRules: ['color-contrast'],
    },
  },
} as Meta;

const Template: Story = (args) => <CoursesYear {...args} />;

export const StudentView = Template.bind({});
StudentView.args = {};
