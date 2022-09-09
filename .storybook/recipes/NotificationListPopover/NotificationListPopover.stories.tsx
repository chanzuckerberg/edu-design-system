import { StoryObj, Meta } from '@storybook/react';
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
};
