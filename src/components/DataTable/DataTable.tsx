import clsx from 'clsx';
import React from 'react';

import type { Status } from '../../util/variant-types';

import ButtonGroup from '../ButtonGroup';
import type { IconName } from '../Icon/Icon';
import InputField from '../InputField';

import styles from './DataTable.module.css';

export type DataTableProps = {
  // Component API
  /**
   * Collection of buttons/menus to control the table contents
   */
  actions?: React.ReactNode;
  /**
   * TODO: remove once table implementation is chosen
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Method to call when content is entered into the search field. Also causes the field
   * to appear.
   * @returns void
   */
  onSearchChange?: () => void;
  // Design API
  /**
   * Main caption text to use for the table. Will show a visible title, and add text for
   * the accessible caption within the table.
   */
  caption?: string;
  /**
   * Controls the treatment of alternating rows in the table.
   */
  rowStyle?: 'striped' | 'lined';
  /**
   * Sub-caption text to use for the table. This text should be used with `caption` and is not
   * meant to be standalone.
   */
  subcaption?: string;
  /**
   * Controls the treatment of the table container.
   */
  tableStyle?: 'basic' | 'border';
  /**
   * Controls whether the table allows the selection of its rows.
   */
  isSelectable?: boolean;
  /**
   * Controls whether the rows allow for a status color/icon treatment.
   */
  isStatusEligible?: boolean;
};

// TODO: DataTableColumnProps

export type DataTableRowProps = {
  isInteractive?: boolean;
  isSelectable?: boolean;
  status?: Extract<Status, 'error' | 'favorable' | 'warning'>;
};

// TODO: DataTableTableActionsProps

export type DataTableHeaderProps = {
  initialSortDirection?: 'ascending' | 'descending';
  isSticky?: boolean;
  isSelected?: boolean;
  isSortable?: boolean;
  //textOverflowBehavior handled by tailwind/styles
};

export type DataTableHeaderCellProps = {
  alignment?: 'leading' | 'trailing';
  /**
   * An icon that prefixes the field input.
   */
  leadingIcon?: IconName;
  sublabel?: string;
};

export type DataTableDataCellProps = DataTableHeaderCellProps & {
  // dataType?: 'link' | 'number' | 'text' | 'boolean' | 'list';
};

// TODO: TableSectionHeaderProps

/**
 * `import {DataTable} from "@chanzuckerberg/eds";`
 *
 * DataTable represents a full-featured data view for controlling, sorting, and acting on tabular data. It:
 * - handles responsive behaviors
 * - allows for showing status for each row
 * - sort behavior on individual columns
 * - **Soon** search of table content w/ hooks to support
 * - **Soon** actions to perform when rows can be selected
 *
 */
export const DataTable = ({
  actions,
  children,
  className,
  // Add other deferenced props to use
  caption,
  onSearchChange,
  subcaption,
  ...other
}: DataTableProps) => {
  const componentClassName = clsx(styles['data-table'], className);

  /**
   * to handle (sub-)caption, render outside the table, but put the combined text in
   * <caption>, and set to hidden in css. that way you can control the layout of the combined
   * header, search field, and actions, and preserve accessibility.
   */
  return (
    <div className={componentClassName} {...other}>
      {(caption || subcaption || onSearchChange || actions) && (
        <div className={styles['data-table__caption-container']}>
          {(caption || subcaption) && (
            <div className={styles['data-table__caption-text']}>
              {caption && (
                <div
                  aria-hidden="true"
                  className={styles['data-table__caption']}
                >
                  {caption}
                </div>
              )}
              {subcaption && (
                <div
                  aria-hidden="true"
                  className={styles['data-table__subcaption']}
                >
                  {subcaption}
                </div>
              )}
            </div>
          )}
          {onSearchChange && (
            <div className={styles['data-table__search']}>
              <DataTableSearch />
            </div>
          )}
          {actions && (
            // TODO: when by itself, this should be full width and right-aligned
            <div className={styles['data-table__actions']}>
              <DataTableActions>{actions}</DataTableActions>
            </div>
          )}
        </div>
      )}
      {/* // TODO: replace with param.s that implement table semantics */}
      {children}
    </div>
  );
};

// const tableClassName = clsx(styles['data-table__table']);
/* 
  TODO-AH: restore this once table implementation is chosen
    {(caption || subcaption) && (
      <caption className={styles['data-table__aria-caption']}>
        {`${caption}${subcaption ? ': ' + subcaption : ''}`}
      </caption>
    )}
*/

const DataTableSearch = () => {
  return (
    <InputField
      aria-label="search"
      disabled
      leadingIcon="search"
      placeholder="Search..."
      type="search"
    />
  );
};

const DataTableActions = ({ children }: { children: React.ReactNode }) => {
  return <ButtonGroup>{children}</ButtonGroup>;
};

DataTable.displayName = 'DataTable';
DataTable.Search = DataTableSearch;
DataTable.Actions = DataTableActions;
