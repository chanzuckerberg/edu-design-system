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
 * import {TableFooter} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `tfoot` of the `Table` component
 */
export const TableFooter = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table__footer'], className, {});
  return (
    <tfoot className={componentClassName} {...other}>
      {children}
    </tfoot>
  );
};
