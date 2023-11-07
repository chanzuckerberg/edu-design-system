import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import Button from '../Button';
import Icon, { type IconName } from '../Icon';
import styles from './Table.module.css';

type TableBodyProps = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type TableCaptionProps = React.HTMLAttributes<HTMLTableCaptionElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
};

type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
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
};

type TableFooterProps = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type TableHeaderProps = React.HTMLAttributes<HTMLTableSectionElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};
type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
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
   * Matches <Table.Cell> padding for alignment.
   */
  variant?: 'body';
};

type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Header variant has a darker bottom border to distinguish itself as a header.
   */
  variant?: 'header';
};

type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  /**
   * Child node(s) that can be nested inside component.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * HTML `tbody` of the `Table` component
 */
const TableBody = ({ children, ...other }: TableBodyProps) => {
  return <tbody {...other}>{children}</tbody>;
};

/**
 * HTML caption cell for the `Table` component.
 * Must be first descendant of the `Table` component.
 */
const TableCaption = ({ children, ...other }: TableCaptionProps) => {
  return <caption {...other}>{children}</caption>;
};

/**
 * HTML table cell of the `Table` component
 */
const TableCell = ({ children, className, ...other }: TableCellProps) => {
  const componentClassName = clsx(styles['table-cell'], className);

  return (
    <td className={componentClassName} {...other}>
      {children}
    </td>
  );
};

/**
 * HTML `tfoot` of the `Table` component
 */
const TableFooter = ({ children, className, ...other }: TableFooterProps) => {
  return (
    <tfoot className={className} {...other}>
      {children}
    </tfoot>
  );
};

/**
 * HTML `thead` of the `Table` component
 */
const TableHeader = ({ children, className, ...other }: TableHeaderProps) => {
  return (
    <thead className={className} {...other}>
      {children}
    </thead>
  );
};

const SORT_DIRECTIONS = ['ascending', 'descending', 'default'] as const;

export type SortDirectionsType = (typeof SORT_DIRECTIONS)[number];

/**
 * `import {TableHeaderCell} from "@chanzuckerberg/eds";`
 *
 * HTML `th` cell of the `Table` component
 */
const TableHeaderCell = ({
  children,
  className,
  onSortClick,
  sortDirection,
  variant,
  ...other
}: TableHeaderCellProps) => {
  const componentClassName = clsx(
    styles['table-header-cell'],
    variant === 'body' && styles['table-header-cell--body'],
    className,
  );

  const icon: IconName =
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
            name={icon}
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

/**
 * `import {TableRow} from "@chanzuckerberg/eds";`
 *
 * HTML `tr` of the `Table` component
 */
export const TableRow = ({
  children,
  className,
  variant,
  ...other
}: TableRowProps) => {
  const componentClassName = clsx(
    styles['table-row'],
    variant === 'header' && styles['table-row--header'],
    className,
  );

  return (
    <tr className={componentClassName} {...other}>
      {children}
    </tr>
  );
};

/**
 * `import {Table} from "@chanzuckerberg/eds";`
 *
 * HTML table component. Allows for the structure and layout of a standard HTML table, with styles to support theming.
 */
export const Table = ({ children, className, ...other }: TableProps) => {
  const componentClassName = clsx(styles['table'], className);
  return (
    <table className={componentClassName} {...other}>
      {children}
    </table>
  );
};

Table.displayName = 'Table';
TableBody.displayName = 'Table.Body';
TableCell.displayName = 'Table.Cell';
TableFooter.displayName = 'Table.Footer';
TableHeader.displayName = 'Table.Header';
TableHeaderCell.displayName = 'Table.HeaderCell';
TableRow.displayName = 'Table.Row';
TableCaption.displayName = 'Table.Caption';

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.Caption = TableCaption;
