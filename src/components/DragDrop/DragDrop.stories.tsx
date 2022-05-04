import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  args: {
    cards: {
      'card-1': { id: 'card-1', content: 'Project #1' },
      'card-2': { id: 'card-2', content: 'Project #2' },
      'card-3': { id: 'card-3', content: 'Project #3' },
      'card-4': { id: 'card-4', content: 'Project #4' },
      'card-5': { id: 'card-5', content: 'Project #5' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Available projects',
        cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Planned projects',
        cardIds: [],
      },
    },
    // Facilitate reordering of columns
    columnOrder: ['column-1', 'column-2'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '1rem', // Provides spacing around storybook edges
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <DragDrop {...args} />;

export const Default = Template.bind({});
Default.args = {};
