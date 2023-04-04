import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './NumberIconList.module.css';

export interface Props {
  /**
   * Slot for adding number icon elements
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * A wrapper for a series of the NumberIcon component laid out in a row.
 */
export const NumberIconList = ({ className, children, ...other }: Props) => {
  const componentClassName = clsx(styles['number-icon-list'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
