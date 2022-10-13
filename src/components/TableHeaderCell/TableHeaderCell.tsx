import clsx from 'clsx';
import React, { type ReactNode } from 'react';
import Icon from '../Icon';
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
   * Callback called when the sort button is clicked.
   */
  onSortClick?: () => void;
  /**
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope?: 'row' | 'col' | 'colgroup';
  /**
   * The direction the selected column will be sorted.
   */
  sortDirection?: SortDirectionsType;
}

export const SortDirections = ['ascending', 'descending', 'default'];

export type SortDirectionsType = typeof SortDirections[number];

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableHeaderCell} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `th` cell of the `Table` component
 */
export const TableHeaderCell = ({
  children,
  className,
  colSpan,
  headers,
  id,
  onSortClick,
  rowSpan,
  scope,
  sortDirection,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['table__header-cell'], className);

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
        sortDirection === 'ascending' || sortDirection == 'descending'
          ? sortDirection
          : undefined
      }
      className={componentClassName}
      colSpan={colSpan}
      headers={headers}
      id={id}
      rowSpan={rowSpan}
      scope={scope}
      {...other}
    >
      {sortDirection ? (
        <button
          className={clsx(styles['table__header-cell-button'])}
          onClick={onSortClick}
        >
          {children}
          <div className={clsx(styles['table__header-cell-sort'])}>
            <Icon
              className={styles['table__header-cell-icon']}
              name={iconName}
              purpose="informative"
              size="1rem"
              title={iconTitle}
            />
          </div>
        </button>
      ) : (
        <div className={clsx(styles['table__header-cell-contents'])}>
          {children}
        </div>
      )}
    </th>
  );
};
