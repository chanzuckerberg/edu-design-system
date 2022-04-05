import { Story, Meta } from '@storybook/react';
import React from 'react';

import { NotificationList, Props } from './NotificationList';
import NotificationListItem from '../NotificationListItem';

export default {
  title: 'Molecules/Lists/NotificationList',
  component: NotificationList,
} as Meta;

const Template: Story<Props> = (args) => (
  <NotificationList>
    <NotificationListItem
      href="#"
      title="English Teacher gave you feedback"
      date="now"
      source="Outsiders on Trial: Self Awareness - Trial Brief Outline"
    />
    <NotificationListItem
      href="#"
      title="Math Teacher gave you feedback"
      date="now"
      source="Unit 3: Measuring Circles - Identifying Circumference and Diameter"
    />
  </NotificationList>
);

export const Default = Template.bind({});
Default.args = {};

export const MarkedAsRead = Template.bind({});
MarkedAsRead.args = {
  markedAsRead: true,
};
