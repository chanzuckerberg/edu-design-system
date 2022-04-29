import { Story, Meta } from '@storybook/react';
import React from 'react';

import { NotificationList, Props } from './NotificationList';
import NotificationListItem from '../NotificationListItem';

export default {
  title: 'Molecules/Lists/NotificationList',
  component: NotificationList,
  subcomponents: { NotificationListItem },
} as Meta;

const Template: Story<Props> = (args) => (
  <NotificationList>
    <NotificationList.Item
      date="now"
      href="#"
      source="Outsiders on Trial: Self Awareness - Trial Brief Outline"
      title="English Teacher gave you feedback"
    />
    <NotificationList.Item
      date="now"
      href="#"
      source="Unit 3: Measuring Circles - Identifying Circumference and Diameter"
      title="Math Teacher gave you feedback"
    />
  </NotificationList>
);

export const Default = Template.bind({});
Default.args = {};

export const MarkedAsRead = Template.bind({});
MarkedAsRead.args = {
  markedAsRead: true,
};
