import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './TableObject.module.css';
import TableObjectBody from '../TableObjectBody';
import TableObjectHeader from '../TableObjectHeader';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableObject} from "@chanzuckerberg/eds";
 * ```
 *
 * Container for a data table and toolbars either above or below the table.
 */
export const TableObject = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table-object'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

TableObject.Body = TableObjectBody;
TableObject.Header = TableObjectHeader;
