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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableBody} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `tbody` of the `Table` component
 */
export const TableBody = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table__body'], className);

  return (
    <tbody className={componentClassName} {...other}>
      {children}
    </tbody>
  );
};
