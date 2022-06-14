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
    children: (
      <>
        <CalendarCard.Body>
          <Text as="p" size="xs">
            <Icon name="event-note" purpose="decorative" size="1.2rem" />
            Feb 2 - Apr 1, 2022
          </Text>
          <Tag text="Ancient Mayan History" variant="neutral" />
        </CalendarCard.Body>
      </>
    ),
    title: 'Project name here',
    variant: 'success',
  },
};
