import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Filters } from './Filters';

export default {
  title: 'Recipes/Filters',
  component: Filters,
  decorators: [
    (Story) => (
      <div style={{ margin: '0.25rem', height: '100vh' }}>
        <p>Filters are popover when larger screen size and drawer when not</p>
        {Story()}
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Filters>;

export const Default: StoryObj<Args> = {};
