import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './TableRow.module.css';

export type Props = React.HTMLAttributes<HTMLTableRowElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Header variant has a darker bottom border to distinguish itself as a header.
   */
  variant?: 'header';
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableRow} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `tr` of the `Table` component
 */
export const TableRow = ({ children, className, variant, ...other }: Props) => {
  const componentClassName = clsx(
    styles['table-row'],
    variant === 'header' && styles['table-row--header'],
    className,
  );

  return (
    <tr className={componentClassName} {...other}>
      {children}
    </tr>
  );
};
