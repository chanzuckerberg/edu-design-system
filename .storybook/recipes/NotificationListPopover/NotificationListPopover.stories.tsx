import { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import isChromatic from 'chromatic/isChromatic';
import React from 'react';

import { NotificationListPopover } from './NotificationListPopover';

export default {
  title: 'Recipes/NotificationListPopover',
  component: NotificationListPopover,
} as Meta<Args>;

type Args = React.ComponentProps<typeof NotificationListPopover>;

export const Default: StoryObj<Args> = {
  args: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          width: '100vh',
          height: '90vh',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    if (isChromatic()) {
      const canvas = within(canvasElement);
      const filtersTrigger = await canvas.findByRole('button');
      filtersTrigger.click();
    }
  },
};
