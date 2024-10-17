import { flexRender, type Table } from '@tanstack/react-table';
import clsx from 'clsx';
import React, { useEffect } from 'react';

import type { EDSBase, Size, Status, Align } from '../../util/variant-types';

import Button, { type ButtonProps } from '../Button';
import ButtonGroup from '../ButtonGroup';
import { Icon, type IconName } from '../Icon/Icon';
import InputField from '../InputField';

import styles from './DataTable.module.css';

export type DataTableProps<T = unknown> = EDSBase & {
  // Component API
  /**
   * Collection of buttons/menus to control the table contents
   */
  actions?: React.ReactNode;
  /**
   * Set whether the table has interactive rows
   *
   * **Default is `false`**.
   */
  isInteractive?: boolean;
  /**
   * Data table controller for rendering the contents of the table
   *
   * See Doc.s: https://tanstack.com/table/latest/docs/framework/react/guide/table-state
   */
  table?: Table<T>;
  /**
   * Classes to add to the table to control height, width, and other non-stylistic behaviors
   */
  tableClassName?: string;
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
   * Controls whether the rows allow for a status color/icon treatment.
   */
  isStatusEligible?: boolean;
  /**
   * Controls the treatment of alternating rows in the table.
   *
   * **Default is `"striped"`**.
   */
  rowStyle?: 'striped' | 'lined';
  /**
   * Size of the padding for the table
   *
   * **Default is `"md"`**.
   */
  size: Extract<Size, 'sm' | 'md'>;
  /**
   * Sub-caption text to use for the table. This text should be used with `caption` and is not
   * meant to be standalone.
   */
  subcaption?: string;
  /**
   * Controls the treatment of the table container.
   *
   * **Default is `"basic"`**.
   */
  tableStyle?: 'basic' | 'border';
};

export type DataTableTableProps = EDSBase &
  Pick<DataTableProps, 'size' | 'tableStyle' | 'tableClassName' | 'rowStyle'>;

// TODO: Implement as followup
export type DataTableRowProps = Pick<EDSBase, 'children' | 'className'> & {
  isInteractive?: boolean;
  isSelected?: boolean;
  status?: Extract<Status, 'error' | 'favorable' | 'warning'>;
};

export type DataTableHeaderCellProps = EDSBase & {
  // Component API
  /**
   * Handler for clicking on the individual column header sort buttons.
   */
  onSortClick?: React.MouseEventHandler;
  // Design API
  /**
   * Determines the edge alignment of content within the cell
   */
  alignment?: Extract<Align, 'leading' | 'trailing'>;
  hasHorizontalDivider?: boolean;
  /**
   * Marks the header cell as sortable (used in conjunction with `sortDirection`)
   */
  isSortable?: boolean;
  /**
   * An icon that prefixes the field input.
   */
  leadingIcon?: IconName;
  /**
   * Sublabel to use next to table cell text content
   *
   * ----
   *
   * **Note**: Will warn when used in the wrong context
   */
  sublabel?: string;
  /**
   * The direction to apply to the icon (for visual treatment)
   *
   * **Default is `"default"`**.
   */
  sortDirection?: SortDirectionsType;
};

const SORT_DIRECTIONS = ['ascending', 'descending', 'default'] as const;

export type SortDirectionsType = (typeof SORT_DIRECTIONS)[number];

// TODO: support cellformat to apply padding and alignment value
export type DataTableDataCellProps = DataTableHeaderCellProps & {
  children: React.ReactNode;
};

/**
 * `import {DataTable} from "@chanzuckerberg/eds";`
 *
 * DataTable represents a full-featured data view for controlling and sorting. It:
 * - handles responsive behaviors
 * - sort behavior on individual columns
 */
export function DataTable<T>({
  actions,
  children,
  className,
  caption,
  isInteractive = false,
  onSearchChange,
  rowStyle = 'striped',
  size = 'md',
  subcaption,
  table,
  tableClassName,
  tableStyle = 'basic',
  ...other
}: DataTableProps<T>) {
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
            <div className={styles['data-table__actions']}>
              <DataTableActions>{actions}</DataTableActions>
            </div>
          )}
        </div>
      )}
      {/* Provide an escape hatch for specifying all aspects of a table using `children` and Sub-components directly */}
      {children ?? (
        <DataTableTable
          className={tableClassName}
          rowStyle={rowStyle}
          size={size}
          tableStyle={tableStyle}
        >
          {(caption || subcaption) && (
            <caption className={styles['data-table__aria-caption']}>
              {`${caption}${subcaption ? ': ' + subcaption : ''}`}
            </caption>
          )}
          <DataTableHeader>
            {table?.getHeaderGroups().map((headerGroup) => (
              <DataTableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={styles['data-table__header-cell-container']}
                    colSpan={header.colSpan}
                    key={header.id}
                    style={{
                      width: `${header.getSize()}px`,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </DataTableRow>
            ))}
          </DataTableHeader>
          <tbody>
            {table?.getRowModel().rows.map((row) => {
              return (
                <React.Fragment key={row.id}>
                  {row.getCanExpand() ? (
                    <>
                      <DataTableGroupRow
                        colSpan={3}
                        title={String(row.getAllCells()[0].renderValue())}
                      />
                      {row.getLeafRows().map((row) => (
                        <DataTableRow key={row.id}>
                          {row.getVisibleCells().map((cell) => (
                            <td
                              className={styles['data-table__cell-container']}
                              key={cell.id}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </td>
                          ))}
                        </DataTableRow>
                      ))}
                    </>
                  ) : (
                    <DataTableRow
                      isInteractive={isInteractive}
                      isSelected={row.getIsSelected()}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          className={styles['data-table__cell-container']}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </DataTableRow>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </DataTableTable>
      )}
    </div>
  );
}

//
// Named sub-components that apply styles
//

/**
 * Sort button utilities
 */
function sortAttrs(
  sort: SortDirectionsType,
): Pick<ButtonProps, 'aria-label' | 'icon'> {
  switch (sort) {
    case 'ascending':
      return {
        'aria-label': 'Sort Descending',
        icon: 'arrow-up',
      };
    case 'descending':
      return {
        'aria-label': 'Remove sort',
        icon: 'arrow-down',
      };
    case 'default':
    default:
      return {
        'aria-label': 'Sort Ascending',
        icon: 'arrows-circular',
      };
  }
}

export const DataTableHeaderCell = ({
  alignment,
  children,
  className,
  hasHorizontalDivider,
  isSortable,
  leadingIcon,
  sortDirection = 'default',
  onSortClick,
  sublabel,
  ...rest
}: DataTableHeaderCellProps) => {
  const headerCellClassName = clsx(
    styles['data-table__header-cell'],
    alignment && styles[`data-table__cell--alignment-${alignment}`],
    hasHorizontalDivider && styles['data-table__cell--has-horizontal-divider'],
  );
  return (
    <div className={headerCellClassName} {...rest}>
      {leadingIcon && (
        <Icon
          className={styles['data-cell__cell--icon']}
          name={leadingIcon}
          purpose="decorative"
          size="1rem"
        />
      )}
      {(children || sublabel) && (
        <div className={clsx(className, styles['data-table__cell-text'])}>
          {children}
          {sublabel && (
            <span className={styles['data-table__cell-sublabel']}>
              {sublabel}
            </span>
          )}
        </div>
      )}
      {isSortable && sortDirection && (
        <Button
          iconLayout="icon-only"
          onClick={onSortClick}
          rank="tertiary"
          size="md"
          {...sortAttrs(sortDirection)}
        />
      )}
    </div>
  );
};

export const DataTableDataCell = ({
  alignment = 'leading',
  children,
  className,
  hasHorizontalDivider,
  leadingIcon,
  sublabel,
  ...rest
}: DataTableDataCellProps) => {
  const dataCellClassName = clsx(
    styles['data-table__cell'],
    alignment && styles[`data-table__cell--alignment-${alignment}`],
    hasHorizontalDivider && styles['data-table__cell--has-horizontal-divider'],
  );
  return (
    <div className={dataCellClassName} {...rest}>
      {leadingIcon && (
        <Icon
          className={styles['data-cell__cell--icon']}
          name={leadingIcon}
          purpose="decorative"
          size="1rem"
        />
      )}
      {(children || sublabel) && (
        <div className={clsx(className, styles['data-table__cell-text'])}>
          {children}
          {sublabel && (
            <span className={styles['data-table__cell-sublabel']}>
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export const DataTableTable = ({
  children,
  tableClassName,
  tableStyle,
  rowStyle,
  size,
}: DataTableTableProps) => {
  const tableClassNames = clsx(
    tableClassName,
    styles['data-table__table'],
    tableStyle && styles[`data-table--tableStyle-${tableStyle}`],
    rowStyle && styles[`data-table--rowStyle-${rowStyle}`],
    size && styles[`data-table--size-${size}`],
  );

  // eslint-disable-next-line @chanzuckerberg/edu-react/use-effect-deps-presence
  useEffect(() => {
    /**
     * Here, we set up a selector on the header of a table, and look for it to start
     * clipping off the top edge of its visible area. Once it does the observer will trigger
     * causing the state class to be added / removed (depending on the intersection value).
     *
     * We use the generated class names from the module for both the trigger and whats toggled
     */
    let observer: IntersectionObserver;
    let el: Element | null;
    function triggerEffect() {
      el = document.querySelector(`.${styles['data-table__table']} thead`);
      if (el && typeof window !== 'undefined') {
        observer = new IntersectionObserver(
          ([event]) => {
            return event.target.classList.toggle(
              styles['data-table--is-pinned'],
              event.intersectionRatio < 1,
            );
          },

          { threshold: [1] },
        );

        observer.observe(el);
      }
    }
    triggerEffect();

    // TODO: anything to de-allocate when using `observer`?
    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  });

  return <table className={tableClassNames}>{children}</table>;
};

export const DataTableHeader = ({
  children,
  ...rest
}: Pick<EDSBase, 'children'>) => {
  return (
    <thead {...rest} className={styles['data-table__header-row']}>
      {children}
    </thead>
  );
};

export const DataTableRow = ({
  children,
  className,
  isInteractive,
  isSelected,
  ...rest
}: DataTableRowProps) => {
  const componnentClassName = clsx(
    className,
    styles['data-table__row'],
    isInteractive && styles['data-table__row--is-interactive'],
    isSelected && styles['data-table__row--is-selected'],
  );
  return (
    <tr className={componnentClassName} {...rest}>
      {children}
    </tr>
  );
};

export const DataTableGroupRow = ({
  colSpan,
  title,
}: {
  title: string;
  colSpan: number;
}) => {
  return (
    <tr>
      <td className={styles['data-table__group-row']} colSpan={colSpan}>
        {title}
      </td>
    </tr>
  );
};

/**
 * For future development
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

const DataTableActions = ({ children }: Pick<EDSBase, 'children'>) => {
  return <ButtonGroup>{children}</ButtonGroup>;
};

// Assemble composed component with re-exported sub-components
DataTable.displayName = 'DataTable';
DataTable.Search = DataTableSearch;
DataTable.Actions = DataTableActions;
DataTable.Table = DataTableTable;
DataTable.Header = DataTableHeader;
DataTable.Row = DataTableRow;
DataTable.GroupRow = DataTableGroupRow;
DataTable.HeaderCell = DataTableHeaderCell;
DataTable.DataCell = DataTableDataCell;
