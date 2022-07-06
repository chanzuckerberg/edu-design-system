import clsx from 'clsx';
import React, { ReactNode } from 'react';
import type { DataTableColumnType } from '../DataTable/DataTable';
import styles from '../DataTable/DataTable.module.css';
import TableHeaderCell from '../TableHeaderCell';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component. `TableHeaderCell`, `TableFooter`, and `TableBody` are the only permissable children of Table
   */
  children?: ReactNode;
  /**
   * The optional data prop can be used to store an array of values from row data that is associated with a DataTableColumn
   */
  data?: DataTableColumnType['data'];
  /**
   * Selector is the row property that is associated with a DataTableColumn; ex. selector = 'name' refers to each row's row.name property
   */
  selector: DataTableColumnType['selector'];
  /**
   * The visible label for each <th> in the header row
   */
  title: DataTableColumnType['title'];
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableColumn} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const DataTableColumn = ({
  children,
  className,
  title,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['data-table__column'], className);

  return (
    <TableHeaderCell className={componentClassName} {...other}>
      {title}
    </TableHeaderCell>
  );
};
