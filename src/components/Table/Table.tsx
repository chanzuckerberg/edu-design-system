import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './Table.module.css';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';
import TableHeader from '../TableHeader';
import TableHeaderCell from '../TableHeaderCell';
import TableRow from '../TableRow';

export interface Props {
  /**
   * Behavior variations:
   * - **stacked** renders a table that stacks its content into a card on small screens
   */
  behavior?: 'stacked';
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Highlight first cell
   *
   * Make the first cell more prominent on smaller screens in stacked variant.
   */
  highlightFirstCell?: boolean;
  /**
   * Stylistic variations:
   * - **zebra** yields a data table alternating colors every row
   */
  variant?: 'zebra';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Table} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML table component
 */
export const Table = ({
  behavior,
  children,
  className,
  highlightFirstCell,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['table'],
    variant === 'zebra' && styles['table--zebra'],
    behavior === 'stacked' && styles['table--stacked'],
    className,
  );

  return (
    <table className={componentClassName} {...other}>
      {children}
    </table>
  );
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
