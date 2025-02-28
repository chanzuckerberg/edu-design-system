export { DataTable as default } from './DataTable';
export type {
  DataTableProps,
  DataTableRowProps,
  DataTableWithStatus,
  DataTableSortDirection,
} from './DataTable';

// Re-export Tanstack hooks and functions to consumers
// https://tanstack.com/table/latest
export * as utils from '@tanstack/react-table';
