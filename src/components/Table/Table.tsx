import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import TableBody from '../TableBody';
import TableCaption from '../TableCaption';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';
import TableHeader from '../TableHeader';
import TableHeaderCell from '../TableHeaderCell';
import TableRow from '../TableRow';
import styles from './Table.module.css';

export type Props = React.TableHTMLAttributes<HTMLTableElement> & {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * `import {Table} from "@chanzuckerberg/eds";`
 *
 * HTML table component.
 */
export const Table = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table'], className);
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
Table.Caption = TableCaption;
