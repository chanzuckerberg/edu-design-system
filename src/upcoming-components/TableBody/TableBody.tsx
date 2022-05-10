import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const TableBody = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table__body'], className, {});

  return (
    <tbody className={componentClassName} {...other}>
      {children}
    </tbody>
  );
};
