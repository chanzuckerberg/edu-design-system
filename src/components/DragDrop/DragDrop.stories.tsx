import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  args: {
    items: {
      'item-1': { id: 'item-1', content: 'Project #1' },
      'item-2': { id: 'item-2', content: 'Project #2' },
      'item-3': { id: 'item-3', content: 'Project #3' },
      'item-4': { id: 'item-4', content: 'Project #4' },
      'item-5': { id: 'item-5', content: 'Project #5' },
    },
    containers: {
      'container-1': {
        id: 'container-1',
        itemIds: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
      },
      'container-2': {
        id: 'container-2',
        itemIds: [],
      },
    },
    // Facilitate reordering of containers
    containerOrder: ['container-1', 'container-2'],
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
