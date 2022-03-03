import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './TableCell.module.css';

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
 * Primary UI component for user interaction
 */
export const TableCell: React.FC<Props> = ({
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
}) => {
  const componentClassName = clsx(styles['table__cell'], className, {
    [styles['table__cell--align-left']]: align === 'left',
    [styles['table__cell--align-inset-left']]: align === 'insetLeft',
    [styles['table__cell--align-right']]: align === 'right',
    [styles['table__cell--align-center']]: align === 'center',
    [styles['table__cell--valign-center']]: verticalAlign === 'center',
    [styles['table__cell--wrap']]: wrap === true,
  });

  const TagName = as;

  return (
    <TagName
      className={componentClassName}
      rowSpan={rowSpan}
      colSpan={colSpan}
      scope={scope}
      headers={headers}
      id={id}
      {...other}
    >
      {children}
    </TagName>
  );
};
