import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * The alignment of the text in the cell
   */
  align?: 'insetLeft' | 'left' | 'right' | 'center';
  /**
   * Behavior variation pulled in from table row
   */
  behavior?: string;
  /**
   * Child node(s) that can be nested inside component
   * 1) When data is passed to TableCell from the DataTable component from a data source, it will be in a key:string/value:string pair, so we add the utility type Record<string, string> for an object type whose property keys and values are each of type string.
   */
  children?: ReactNode | Record<string, string>;
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
  /**
   * The as name for the table cell
   */
  as?: 'td' | 'th';
  /**
   * The vertical alignment of the text in the cell
   */
  verticalAlign?: 'center';
  /**
   * Wraps the content in table cells within table headers. By default white-space is set to nowrap.
   */
  wrap?: boolean;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableCell} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML table cell of the `Table` component
 */
export const TableCell = ({
  behavior,
  children,
  className,
  as = 'td',
  rowSpan,
  colSpan,
  scope,
  headers,
  align,
  verticalAlign,
  id,
  wrap,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['table__cell'],
    className,
    align === 'left' && styles['table__cell--align-left'],
    align === 'insetLeft' && styles['table__cell--align-inset-left'],
    align === 'right' && styles['table__cell--align-right'],
    align === 'center' && styles['table__cell--align-center'],
    verticalAlign === 'center' && styles['table__cell--valign-center'],
    wrap && styles['table__cell--wrap'],
  );

  const TagName = as;

  return (
    <TagName
      className={componentClassName}
      colSpan={colSpan}
      headers={headers}
      id={id}
      rowSpan={rowSpan}
      scope={scope}
      {...other}
    >
      {children}
    </TagName>
  );
};
