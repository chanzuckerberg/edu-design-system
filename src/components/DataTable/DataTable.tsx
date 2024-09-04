import { flexRender, type Table } from '@tanstack/react-table';
import clsx from 'clsx';
import React from 'react';

import type { Size, Status } from '../../util/variant-types';

import ButtonGroup from '../ButtonGroup';
import type { IconName } from '../Icon/Icon';
import InputField from '../InputField';

import styles from './DataTable.module.css';

export type DataTableProps<T = unknown> = {
  // Component API
  /**
   * Collection of buttons/menus to control the table contents
   */
  actions?: React.ReactNode;
  /**
   * Table content (used when basic table abstractions don't meet the needs. SEE helpers)
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Data table controller for rendering the contents of the table
   */
  table?: Table<T>;
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
   * Controls whether the table allows the selection of its rows.
   */
  isSelectable?: boolean;
  /**
   * Controls whether the rows allow for a status color/icon treatment.
   */
  isStatusEligible?: boolean;
  /**
   * Controls the treatment of alternating rows in the table.
   */
  rowStyle?: 'striped' | 'lined';
  /**
   * Size of the padding for the table
   */
  size: Extract<Size, 'sm' | 'md'>;
  /**
   * Sub-caption text to use for the table. This text should be used with `caption` and is not
   * meant to be standalone.
   */
  subcaption?: string;
  /**
   * Controls the treatment of the table container.
   */
  tableStyle?: 'basic' | 'border';
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
  rowStyle = 'lined', // TODO-AH: is this the default?
  size = 'md',
  subcaption,
  table,
  tableStyle = 'basic',
  ...other
}: DataTableProps) => {
  const componentClassName = clsx(styles['data-table'], className);

  const tableClassName = clsx(
    styles['data-table__table'],
    tableStyle && styles[`data-table--tableStyle-${tableStyle}`],
    rowStyle && styles[`data-table--rowStyle-${rowStyle}`],
    size && styles[`data-table--size-${size}`],
  );

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
                // TODO: Warn when only using subcaption
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
      {/*
        Do the below when `children` is undefined, and warn when both are specified

        For table header
        - when generating thead, use isSortable to determine contents

        For table body for each row:
        - when isSelectable, generate status column and add checkboxes
        - when isStatusEligable, generate status column and add checkboxes
          Following: https://tanstack.com/table/latest/docs/framework/react/examples/basic
       */}
      {children ?? (
        <table className={tableClassName}>
          {(caption || subcaption) && (
            <caption className={styles['data-table__aria-caption']}>
              {`${caption}${subcaption ? ': ' + subcaption : ''}`}
            </caption>
          )}
          <thead className={styles['data-table__header-row']}>
            {table?.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={styles['data-table__header-cell']}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table?.getRowModel().rows.map((row) => (
              <tr className={styles['data-table__row']} key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className={styles['data-table__cell']} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

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
