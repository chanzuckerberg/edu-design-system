import clsx from 'clsx';
import React from 'react';
import type { ReactNode, MouseEventHandler } from 'react';
import styles from './TableHeaderCell.module.css';
import Button from '../Button';
import Icon from '../Icon';

export type Props = React.ThHTMLAttributes<HTMLTableCellElement> & {
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
   * Callback called when the sort button is clicked.
   */
  onSortClick?: MouseEventHandler;
  /**
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope?: 'row' | 'col' | 'colgroup';
  /**
   * The direction the selected column will be sorted.
   */
  sortDirection?: SortDirectionsType;
  /**
   * Variant for table header cell within table body.
   * Matches <TableCell> padding for alignment.
   */
  variant?: 'body';
};

export const SORT_DIRECTIONS = ['ascending', 'descending', 'default'] as const;

export type SortDirectionsType = (typeof SORT_DIRECTIONS)[number];

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {TableHeaderCell} from "@chanzuckerberg/eds";`
 *
 * HTML `th` cell of the `Table` component
 */
export const TableHeaderCell = ({
  children,
  className,
  onSortClick,
  sortDirection,
  variant,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['table-header-cell'],
    variant === 'body' && styles['table-header-cell--body'],
    className,
  );

  const iconName =
    sortDirection === 'ascending'
      ? 'arrow-narrow-up'
      : sortDirection === 'descending'
      ? 'arrow-narrow-down'
      : 'unfold-more';

  const iconTitle =
    sortDirection === 'ascending'
      ? 'Sorted, ascending'
      : sortDirection === 'descending'
      ? 'Sorted, descending'
      : 'Sort';

  return (
    <th
      aria-sort={
        sortDirection === 'ascending' || sortDirection === 'descending'
          ? sortDirection
          : undefined
      }
      className={componentClassName}
      data-bootstrap-override="table-header-cell"
      {...other}
    >
      {sortDirection ? (
        <Button
          className={clsx(styles['table-header-cell__sort-button'])}
          onClick={onSortClick}
          variant="link"
        >
          {children}
          <Icon
            name={iconName}
            purpose="informative"
            size="1rem"
            title={iconTitle}
          />
        </Button>
      ) : (
        children
      )}
    </th>
  );
};
