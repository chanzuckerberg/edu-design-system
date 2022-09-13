import React from 'react';
import styles from './NotificationListPopover.module.css';
import { Button, Heading, Popover } from '../../../src';
import NotificationList from '../../../src/components/NotificationList';

/**
 * Demonstrates usage of the Popover with NotificationList
 */
export const NotificationListPopover = () => (
  <Popover placement="top-start">
    <Popover.Button as={Button}>Open Popover</Popover.Button>
    <Popover.Content className={styles['notifications-list-popover']} showArrow>
      <header className={styles['notifications-list-popover__header']}>
        <Heading as="h3" id="popover-heading-1" size="body-sm">
          Notifications (4)
        </Heading>
        <Button size="sm" variant="icon">
          Mark All Seen
        </Button>
      </header>
      <NotificationList>
        <NotificationList.Item
          date="now"
          href="#"
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
        <NotificationList.Item
          date="now"
          href="#"
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
        <NotificationList.Item
          date="now"
          href="#"
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
        <NotificationList.Item
          date="now"
          href="#"
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
      </NotificationList>
      <header className={styles['notifications-list-popover__header']}>
        <Heading as="h3" id="popover-heading-2" size="body-sm">
          Already Seen
        </Heading>
      </header>
      <NotificationList>
        <NotificationList.Item
          date="now"
          href="#"
          markedAsRead={true}
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
        <NotificationList.Item
          date="now"
          href="#"
          markedAsRead={true}
          source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
          title="English Teacher gave you feedback"
        ></NotificationList.Item>
      </NotificationList>
    </Popover.Content>
  </Popover>
);
