import clsx from 'clsx';
import React, { createContext } from 'react';
import { useUID } from 'react-uid';
import styles from './DataTable.module.css';
import Button from '../Button';
import DataTableColumn from '../DataTableColumn';
import Icon from '../Icon';
import { Table, Props as TableProps } from '../Table/Table';

export interface Props extends TableProps {
  /**
   * Each column has a title, a selector, and optional data.
   * 1) The title is the text that will be displayed in the table header cell
   * 2) The selector identifies which row property belongs to
   * each column; ex. column.selector = 'name' refers to () row => row.name
   * 3) Data (optional) can be used to store an array of values from rows
   */
  columns: DataTableColumnType[];
  /**
   * HTML id attribute for accessibility.
   */
  id?: string;
  /**
   * Accessible label to associate title and table
   */
  label?: string;
  /**
   * Each cell in a row contains a value that is also associated with a cell in columns.
   */
  rows: DataTableRowType;
  /**
   * Exposes a button for filtering options
   */
  useFilters?: boolean;
}

/**
 * 1) Each item in the data array needs to be in the format of key:string/value:string pairs
 */
export type DataTableColumnType = {
  data?: Record<string, string>[] /* 1 */;
  selector: string;
  title: string;
};

/**
 * A DataTable row needs to be in the format of an array of key:string/value:string pairs
 */
export type DataTableRowType = Record<string, string>[];

export type DataTableContextType = {
  columns?: DataTableColumnType[];
  rows?: DataTableRowType;
};

/**
 * DataTableContext.Provider wraps the DataTable and can be used to store context from props or state, such as table data.
 */
export const DataTableContext = createContext<DataTableContextType>({});

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DataTable} from "@chanzuckerberg/eds";
 * ```
 *
 * DataTable component extends the functionality of Table component
 * by accepting structured data rows and columns, which can then be
 * filtered, sorted, selected, etc.
 */
export const DataTable = ({
  className,
  caption,
  columns,
  id,
  label,
  rows,
  useFilters = false,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['data-table'],
    useFilters === true && styles['data-table--filters'],
    className,
  );

  const generatedId = useUID();
  const dataTableId = id || generatedId;

  return (
    <DataTableContext.Provider value={{ columns, rows }}>
      <div className={componentClassName}>
        <div className={styles['data-table__label-wrapper']}>
          <label className={styles['data-table__label']} htmlFor={id}>
            {label}
          </label>
          {useFilters && (
            <Button size="md" status="brand" variant="secondary">
              <Icon name="filter-list" purpose="decorative" size="1.375rem" />
              Filters
            </Button>
          )}
        </div>
        <Table
          caption={caption}
          className={styles['data-table__table']}
          id={dataTableId}
          {...other}
        >
          <Table.Header>
            <Table.Row className={styles['data-table__table']}>
              {columns.map((col, index) => (
                <DataTableColumn
                  className={styles['data-table__header-cell']}
                  key={index}
                  selector={col.selector}
                  title={col.title}
                />
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((row, rowIndex) => (
              <Table.Row key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <Table.Cell
                    data-heading={col.title}
                    id={`row${colIndex}-${col.selector}`}
                    key={colIndex}
                  >
                    {rows[rowIndex][col.selector]}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </DataTableContext.Provider>
  );
};
