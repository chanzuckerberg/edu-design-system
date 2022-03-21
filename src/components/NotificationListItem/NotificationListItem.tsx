import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import styles from '../NotificationList/NotificationList.module.css';

export interface Props {
  sender?: string;
  description?: string;
  date?: string;
  source?: string;
  markedAsRead?: boolean;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  link?: string;
}

interface State {
  isRead: boolean | null;
}

const NotificationListItem = ({
  sender,
  description,
  date,
  source,
  className,
  children,
  link,
  markedAsRead,
  ...other
}: Props) => {
  /**
   * Initialize state
   */
  const [isRead, setIsRead] = useState<State['isRead']>(markedAsRead || false);

  const componentClassName = clsx(
    styles['notification-list__item'],
    isRead === true && styles['notification-list__item--read'],
    className,
    {},
  );

  /**
   * Handle Mark As Read click event
   */
  const onClick = () => setIsRead(!isRead);

  return (
    <div className={componentClassName}>
      <a href={link}>
        <div className={styles['notification-list__item--content']}>
          <div className={styles['notification-list__item--title']}>
            {sender} {description}
          </div>
          <div className="notification-item-subtitle text-muted">
            {date}
            {' · '}
            {source}
          </div>
        </div>
      </a>
      <button
        className={styles['notification-list__item--button']}
        aria-label={isRead === true ? 'Mark as unread' : 'Mark as read'}
        onClick={onClick}
      />
    </div>
  );
};

// TODO: each list item sets its own isRead state,
// also the popover title also has the a link to set isRead on all items

export default NotificationListItem;
