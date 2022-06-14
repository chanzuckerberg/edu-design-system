import { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { CalendarCard } from './CalendarCard';
import { Heading, Icon, Tag, Text } from '../../../src';

export default {
  title: 'Recipes/CalendarCard',
  component: CalendarCard,
  decorators: [
    (Story) => (
      <div style={{ margin: '0.25rem' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof CalendarCard>;

export const Default: StoryObj<Args> = {
  args: {
    dateEnd: 'Feb 2, 2022',
    dateStart: 'Apr 1',
    tags: [
      { text: 'One', variant: 'error', hasOutline: false },
      { text: 'Two', variant: 'success', hasOutline: false },
      { text: 'Three has a longer', variant: 'warning', hasOutline: true },
      { text: '4', variant: 'yield' },
      { text: '5', variant: 'brand', hasOutline: false },
    ],
    title: 'Project name here',
    variant: 'success',
  },
};
