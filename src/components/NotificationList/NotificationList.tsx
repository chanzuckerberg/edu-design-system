import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './NotificationList.module.css';
import NotificationListItem from '../NotificationListItem/NotificationListItem';

export interface Props {
  className?: string;
  children?: ReactNode;
}

export const NotificationList = ({ className, children, ...other }: Props) => {
  const componentClassName = clsx(styles['notification-list'], className, {});
  return <div className={componentClassName}>{children}</div>;
};
