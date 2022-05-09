import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../OverflowList/OverflowList.module.css';

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
 * Primary UI component for user interaction
 */
export const OverflowListItem = ({ className, children, ...other }: Props) => {
  const componentClassName = clsx(styles['overflow-list__item'], className, {});
  return (
    <li className={componentClassName} {...other}>
      {children}
    </li>
  );
};
