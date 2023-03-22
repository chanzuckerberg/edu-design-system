import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './TableCell.module.css';

export type Props = React.TdHTMLAttributes<HTMLTableCellElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /*
   * This attribute contains a non-negative integer value that indicates for how many columns the cell extends
   */
  colSpan?: number;
  /**
   * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the `th` elements that apply to this element.
   */
  headers?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * This attribute contains a non-negative integer value that indicates for how many rows the cell extends
   */
  rowSpan?: number;
  /**
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope?: 'row' | 'col' | 'colgroup';
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {TableCell} from "@chanzuckerberg/eds";`
 *
 * HTML table cell of the `Table` component
 */
export const TableCell = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table-cell'], className);

  return (
    <td className={componentClassName} {...other}>
      {children}
    </td>
  );
};
