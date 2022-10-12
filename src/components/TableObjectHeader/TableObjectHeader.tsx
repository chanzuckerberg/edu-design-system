import clsx from 'clsx';
import type {ReactNode} from 'react';
import React from 'react';
import styles from '../TableObject/TableObject.module.css';

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
 * import {TableObjectHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * TableObjectHeadercomponent represents the header section of the TableObject container.
 */
export const TableObjectHeader = ({children, className, ...other}: Props) => {
  const componentClassName = clsx(styles['table-object__header'], className);
  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
