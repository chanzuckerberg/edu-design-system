import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './NotificationListPopover.module.css';
import { Button, Heading, Popover } from '../../../src';

type NotificationListItemProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Relative date when notification was created
   */
  date: string;
  /**
   * URI for full content of notification
   */
  href: string;
  /**
   * Marked as read
   *
   * If notification is marked as read using 'Mark All Seen', this gets set to true.
   */
  markedAsRead?: boolean;
  /**
   * Description of the class or subject where the notification originated
   */
  source: string;
  /**
   * The title of the notification; includes name or description of sender, and description of notification
   */
  title: string;
};

const NotificationListItem = ({
  date,
  href,
  markedAsRead,
  source,
  title,
}: NotificationListItemProps) => {
  /**
   * Initialize state
   */
  const [isRead, setIsRead] = useState<boolean>(!!markedAsRead);

  const componentClassName = clsx(
    styles['notification-list__item'],
    isRead === true && styles['notification-list__is-read'],
  );

  /**
   * Handle Mark As Read click event
   */
  const onClick = () => setIsRead(!isRead);

  return (
    <li className={componentClassName}>
      <div className={styles['notification-list__content']}>
        <div>
          <a className={styles['notification-list__link']} href={href}>
            <Heading size="body-sm">{title}</Heading>
          </a>
        </div>
        {date}
        {' · '}
        {source}
      </div>
      <button
        aria-label={isRead === true ? 'Mark as unread' : 'Mark as read'}
        className={styles['notification-list__button']}
        onClick={onClick}
      />
    </li>
  );
};

export const NotificationLists = () => (
  <>
    <ul className={styles['notification-list']}>
      <NotificationListItem
        date="now"
        href="#"
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
      <NotificationListItem
        date="now"
        href="#"
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
      <NotificationListItem
        date="now"
        href="#"
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
      <NotificationListItem
        date="now"
        href="#"
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
    </ul>
    <header className={styles['notifications-list-popover__header']}>
      <Heading as="h3" id="popover-heading-2" size="body-sm">
        Already Seen
      </Heading>
    </header>
    <ul className={styles['notification-list']}>
      <NotificationListItem
        date="now"
        href="#"
        markedAsRead
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
      <NotificationListItem
        date="now"
        href="#"
        markedAsRead
        source="Outsiders on Trial: Self Awareness = Trial Brief Outline"
        title="English Teacher gave you feedback"
      />
    </ul>
  </>
);

/**
 * Demonstrates usage of the Popover with NotificationLists.
 */
export const NotificationListPopover = () => (
  <Popover placement="top-start">
    <Popover.Button as={Button}>Open Popover</Popover.Button>
    <Popover.Content bodyClassName={styles['notifications-list-popover']}>
      <header className={styles['notifications-list-popover__header']}>
        <Heading as="h3" id="popover-heading-1" size="body-sm">
          Notifications (4)
        </Heading>
        <Button size="sm" variant="icon">
          Mark All Seen
        </Button>
      </header>
      <NotificationLists />
    </Popover.Content>
  </Popover>
);
