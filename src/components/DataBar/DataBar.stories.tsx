import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { DataBar } from './DataBar';

export default {
  title: 'Example/DataBar',
  component: DataBar,
  args: {
    'aria-label': 'data-bar',
    segments: [{ value: 30 }, { value: 10 }, { value: 20 }],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '0.25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof DataBar>;

export const Default: StoryObj<Args> = {};
