import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  args: {
    sourceItems: [
      {
        title: 'Project #0',
        id: 0,
      },
      {
        title: 'Project #1',
        id: 1,
      },
      {
        title: 'Project #2',
        id: 2,
      },
      {
        title: 'Project #3',
        id: 3,
      },
    ],
    destItems: [
      {
        title: 'Project #4',
        id: 4,
      },
      {
        title: 'Project #5',
        id: 5,
      },
      {
        title: 'Project #6',
        id: 6,
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '1rem', // Push content away from Storybook borders
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
