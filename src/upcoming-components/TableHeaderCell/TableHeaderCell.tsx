import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
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
  onClick?: MouseEventHandler;
  /**
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope?: 'row' | 'col' | 'colgroup';
  /**
   * The direction the selected column will be sorted
   */
  sortDirection?: 'ascending' | 'descending';
  /**
   * Sort button text
   */
  text?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const TableHeaderCell = ({
  className,
  rowSpan,
  colSpan,
  scope,
  headers,
  sortDirection,
  id,
  onClick,
  text,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['table-header-cell'],
    className,
    sortDirection === 'ascending' && styles['table-header-cell--ascending'],
    sortDirection === 'descending' && styles['table-header-cell--descending'],
    !sortDirection && styles['table-header-cell--none'],
    sortDirection && styles['table-header-cell--ascending'],
  );

  return (
    <th
      aria-sort={sortDirection ?? undefined}
      className={componentClassName}
      colSpan={colSpan}
      headers={headers}
      id={id}
      rowSpan={rowSpan}
      scope={scope}
      {...other}
    >
      <Button onClick={onClick} status="neutral">
        {text}
        <Icon name="arrow-narrow-down" purpose="decorative" />
      </Button>
    </th>
  );
};
