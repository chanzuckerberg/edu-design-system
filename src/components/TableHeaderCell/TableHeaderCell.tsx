import clsx from 'clsx';
import type {ReactNode} from 'react';
import React, {useState} from 'react';
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
   * This enumerated attribute defines the cells that the header (defined in the `th`) element relates to.
   */
  scope?: 'row' | 'col' | 'colgroup';
  /**
   * Boolean to enable sorting on a table column
   */
  sortable?: boolean;
  /**
   * The direction the selected column will be sorted
   */
  sortDirection?: SortOptions;
}

type SortOptions = 'ascending' | 'descending' | 'default';

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
  className,
  rowSpan,
  colSpan,
  scope,
  headers,
  sortable,
  sortDirection = 'default',
  id,
  children,
  ...other
}: Props) => {
  /**
   * Sort status
   *
   * State variable to hold current sort direction. Initialized with value in sortDirection prop.
   */
  const [sortStatus, setSortStatus] = useState<SortOptions>(sortDirection);

  const toggleSort = () => {
    switch (sortStatus) {
      case 'ascending':
        setSortStatus('descending');
        break;
      case 'descending':
        setSortStatus('default');
        break;
      case 'default':
        setSortStatus('ascending');
        break;
      default:
        setSortStatus('default');
    }
  };

  const componentClassName = clsx(styles['table__header-cell'], className);

  const iconName =
    sortStatus === 'ascending'
      ? 'arrow-narrow-up'
      : sortStatus === 'descending'
      ? 'arrow-narrow-down'
      : 'unfold-more';

  const iconTitle =
    sortStatus === 'ascending'
      ? 'Sorted, ascending'
      : sortStatus === 'descending'
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
      colSpan={colSpan}
      headers={headers}
      id={id}
      rowSpan={rowSpan}
      scope={scope}
      {...other}
    >
      {sortable ? (
        <button
          className={clsx(styles['table__header-cell-button'])}
          onClick={toggleSort}
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
