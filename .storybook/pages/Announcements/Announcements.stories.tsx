import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Announcements } from './Announcements';

export default {
  title: 'Pages/Announcements',
  component: Announcements,
} as Meta<Args>;

type Args = React.ComponentProps<typeof Announcements>;
export const Default: StoryObj<Args> = {};
