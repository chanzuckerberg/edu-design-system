import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
  args: {
    sourceItems: [
      {
        title: 'Longer project name truncation after a long name',
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
      {
        title: 'Project #4',
        id: 4,
      },
      {
        title: 'Project #6',
        id: 6,
      },
    ],
    destItems: [
      {
        title: 'Project #5',
        id: 5,
      },
    ],
  },
} as Meta;

const Template: Story<Props> = (args) => <DragDrop {...args} />;

export const Default = Template.bind({});
Default.args = {};
