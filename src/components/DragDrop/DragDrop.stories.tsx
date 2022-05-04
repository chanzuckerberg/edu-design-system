import { Story, Meta } from '@storybook/react';
import React from 'react';

import { DragDrop, Props } from './DragDrop';

export default {
  title: 'Organisms/Interactive/Drag and Drop',
  component: DragDrop,
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
