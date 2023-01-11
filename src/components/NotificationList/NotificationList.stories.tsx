import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import type { Props } from './NotificationList';
import { NotificationList } from './NotificationList';
import type { NotificationListItemProps } from '../NotificationListItem';
import NotificationListItem from '../NotificationListItem';

export default {
  title: 'Components/NotificationList',
  component: NotificationList,
  subcomponents: { NotificationListItem },
} as Meta<Args>;

type Args = Props & NotificationListItemProps;

export const Default: StoryObj<Args> = {
  render: (args) => (
    <NotificationList>
      <NotificationList.Item
        date="now"
        href="#"
        markedAsRead={args.markedAsRead}
        source="Outsiders on Trial: Self Awareness - Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
      <NotificationList.Item
        date="now"
        href="#"
        markedAsRead={args.markedAsRead}
        source="Unit 3: Measuring Circles - Identifying Circumference and Diameter"
        title="Math Teacher gave you feedback"
      />
    </NotificationList>
  ),
};

export const MarkedAsRead = {
  ...Default,
  args: {
    markedAsRead: true,
  },
};
