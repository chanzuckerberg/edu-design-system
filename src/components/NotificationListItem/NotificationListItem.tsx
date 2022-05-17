import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { Heading } from '../Heading/Heading';
import styles from '../NotificationList/NotificationList.module.css';

export interface NotificationListItemProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Relative date when notification was created
   */
  date?: string;
  /**
   * URI for full content of notification
   */
  href?: string;
  /**
   * Marked as read
   * 1) If notification is marked as read using 'Mark All Seen', this gets set to true
   */
  markedAsRead?: boolean;
  /**
   * Description of the class or subject where the notification originated
   */
  source?: string;
  /**
   * The title of the notification; includes name or description of sender, and description of notification
   */
  title?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

interface State {
  isRead: boolean | null;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {NotificationListItem} from "@chanzuckerberg/eds";
 * ```
 *
 * Single notification item to be used in NotificationList.
 */
export const NotificationListItem = ({
  className,
  date,
  href,
  markedAsRead,
  source,
  title,
  children,
  ...other
}: NotificationListItemProps) => {
  /**
   * Initialize state
   */
  const [isRead, setIsRead] = useState<State['isRead']>(markedAsRead || false);

  const componentClassName = clsx(
    styles['notification-list__item'],
    isRead === true && styles['notification-list__is-read'],
    className,
    {},
  );

  /**
   * Handle Mark As Read click event
   */
  const onClick = () => setIsRead(!isRead);

  return (
    <li className={componentClassName}>
      <div className={styles['notification-list__content']}>
        <div className={styles['notification-list__title']}>
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
