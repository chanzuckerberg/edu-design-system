import clsx from 'clsx';
import React, { ReactNode } from 'react';
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
 * TODO: update this comment with a description of the component.
 */
export const TableObject = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table-object'], className, {});
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

TableObject.Body = TableObjectBody;
TableObject.Header = TableObjectHeader;
