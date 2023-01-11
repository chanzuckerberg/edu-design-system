import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { NotificationListPopover } from './NotificationListPopover';

export default {
  title: 'Recipes/NotificationListPopover',
  component: NotificationListPopover,
  parameters: {
    chromatic: {
      // These stories are very flaky, though we're not sure why.
      // We tried delaying the snapshot just in case there's a timing issue at play here, which was not successful.
      disableSnapshot: true,
    },
  },
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof NotificationListPopover>;

export const Default: StoryObj = {};
