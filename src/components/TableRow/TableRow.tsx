import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * Behavior variations:
   * - **clickable** yields a table row that has a click event attached to it
   */
  behavior?: 'clickable';
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations:
   * - **bare** yields a table row without any bottom border
   */
  variant?: 'bare';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableRow} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `tr` of the `Table` component
 */
export const TableRow = ({
  children,
  className,
  variant,
  behavior,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['table__row'],
    variant === 'bare' && styles['table__row--bare'],
    behavior === 'clickable' && styles['table__row--clickable'],
    className,
  );

  return (
    <tr className={componentClassName} {...other}>
      {children}
    </tr>
  );
};
