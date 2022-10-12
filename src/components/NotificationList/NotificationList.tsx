import clsx from 'clsx';
import React, {ReactNode} from 'react';
import NotificationListItem from '../NotificationListItem';
import styles from './NotificationList.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
}

/**
 * ```ts
 * import {NotificationList} from "@chanzuckerberg/eds";
 * ```
 *
 * List of NotificationListItem components.
 */
export const NotificationList = ({className, children, ...other}: Props) => {
  const componentClassName = clsx(styles['notification-list'], className);
  return <ul className={componentClassName}>{children}</ul>;
};

NotificationList.Item = NotificationListItem;
