import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CoursesYear, Props } from './CoursesYear';

export default {
  title: 'Pages/Courses/Year',
  component: CoursesYear,
} as Meta;

const Template: Story<Props> = (args) => <CoursesYear {...args} />;

export const StudentView = Template.bind({});
StudentView.args = {};
