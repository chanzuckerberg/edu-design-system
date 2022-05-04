import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  args: {
    cards: {
      'task-1': { id: 'task-1', content: 'Project #1' },
      'task-2': { id: 'task-2', content: 'Project #2' },
      'task-3': { id: 'task-3', content: 'Project #3' },
      'task-4': { id: 'task-4', content: 'Project #4' },
      'task-5': { id: 'task-5', content: 'Project #5' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Available projects',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Planned projects',
        taskIds: [],
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
