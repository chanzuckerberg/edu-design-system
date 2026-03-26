import React from 'react';
import {
  DataTable,
  type DataTableProps,
  DataTableUtils,
  Text,
} from '../../../src';
import filterTokens from '../../util/filterTokens';

import styles from './TokenList.module.css';

type ListItem = {
  name: string;
  value: string;
  figmaToken?: string;
  tailwindClass?: string;
  type: 'color' | 'size';
};

type Props = DataTableProps & {
  listItems: ListItem[];
};

const columnHelper = DataTableUtils.createColumnHelper<ListItem>();
const columns = [
  columnHelper.accessor('name', {
    header: () => (
      <DataTable.HeaderCell sortDirection="ascending">
        CSS Var Name
      </DataTable.HeaderCell>
    ),
    cell: (li) => (
      <DataTable.DataCell>
        <Text className="text-utility-critical" preset="code-md">
          {li.getValue()}
        </Text>
      </DataTable.DataCell>
    ),
  }),
  columnHelper.accessor('figmaToken', {
    header: () => <DataTable.HeaderCell>Figma Token Name</DataTable.HeaderCell>,
    cell: (li) => <DataTable.DataCell>{li.getValue()}</DataTable.DataCell>,
  }),
  columnHelper.accessor('tailwindClass', {
    header: () => (
      <DataTable.HeaderCell>Tailwind Class Name</DataTable.HeaderCell>
    ),
    cell: (li) => <DataTable.DataCell>{li.getValue()}</DataTable.DataCell>,
  }),
  columnHelper.accessor('value', {
    header: () => (
      <DataTable.HeaderCell alignment="trailing">
        Raw Value
      </DataTable.HeaderCell>
    ),
    cell: (li) => (
      <DataTable.DataCell
        alignment="trailing"
        className={styles['token-list__value']}
      >
        {li.row.original.type === 'color' && (
          <div
            className={styles['token-list__input']}
            style={{
              backgroundColor: li.renderValue() as string,
            }}
          />
        )}
        <Text className="text-utility-critical" preset="code-md">
          {li.getValue()}
        </Text>
      </DataTable.DataCell>
    ),
  }),
];

export const TokenDataTable = (props: Props) => {
  const { listItems, size = 'md', ...rest } = props;
  const table = DataTableUtils.useReactTable({
    data: listItems,
    columns,
    getCoreRowModel: DataTableUtils.getCoreRowModel(),
  });

  return <DataTable {...rest} size={size} table={table} />;
};

export type Renderer = (
  value: string,
  column: 'figma' | 'tailwind',
  filterTerm: string,
) => string;

export const getTokenListItems = (
  filterTerm: string,
  type: 'color' | 'size',
  renderer: Renderer = () => '',
) => {
  // Define data for the following columns:
  // - css var name (mapped to name)
  // - figma token name (use renderer)
  // - tailwind class name (if available, & use renderer)
  // - raw value (mapped to value)

  return filterTokens(filterTerm).map(({ name, value }) => ({
    name,
    value,
    figmaToken: renderer(name, 'figma', filterTerm),
    tailwindClass: renderer(name, 'tailwind', filterTerm),
    type,
  }));
};

/**
 * Generate specifier for each list item row based on the contents of the tokens.json file.
 *
 * Given:
 * - row in tokens.json like "eds-theme-color-background-utility-overlay-low-emphasis": "rgba(39, 38, 37, 0.50)",
 * - param name: "eds-theme-color-background-utility-overlay-low-emphasis"
 * - generate content like overlay-lowEmphasis
 */
export const getSpecifier = (name: string, filterTerm: string) => {
  // trim the filter term from the full token name, along with the hyphen separator
  const specifier = name.slice(
    name.indexOf(filterTerm) + filterTerm.length + 1,
  );

  // tokens.json hyphen-separates camel case token name parts using the built-in "json/flat".
  // Fxamples:
  // - "*-emphasis" => "*Emphasis"
  // Note that this is not a problem in the emitted tailwind config since it doesn't use tokens.json
  const convertEmphasesToCamelCase = /([a-z]+)-emphasis*/g;
  const updatedSpecifier = specifier.replace(
    convertEmphasesToCamelCase,
    '$1Emphasis',
  );

  return updatedSpecifier;
};
