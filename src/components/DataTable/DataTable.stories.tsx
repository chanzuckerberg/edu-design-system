import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import React from 'react';

import {
  DataTable,
  DataTableTable,
  DataTableDataCell,
  DataTableHeaderCell,
  DataTableRow,
  DataTableHeader,
  type DataTableProps,
} from './DataTable';

// We import all of the utilities from tanstack here, and this can contain other custom utilities
import { Button, Menu, Checkbox, DataTableUtils } from '../..';

import { chromaticViewports } from '../../util/viewports';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  // TODO(bug): generate documentation argTypes for sub-components
  // @see https://storybook.js.org/docs/writing-stories/stories-for-multiple-components
  subcomponents: {
    'DataTable.Table': DataTableTable,
    'DataTable.Row': DataTableRow,
    'DataTable.Header': DataTableHeader,
    'DataTable.HeaderCell': DataTableHeaderCell,
    'DataTable.DataCell': DataTableDataCell,
  },
  parameters: {
    badges: [BADGE.BETA, 'intro-1.0', 'current-1.0'],
    chromatic: {
      viewports: [
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
        chromaticViewports.googlePixel2,
      ],
    },
  },
  argTypes: {
    actions: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} as Meta<Args>;

type Args = DataTableProps;

// Specifying an example data type for the rows of a table
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
};

// Specifying the example (static) data for the table to use with tanstack primitives
const defaultData: Person[] = [
  {
    firstName: 'Joe',
    lastName: 'Dirte',
    age: 45,
    visits: 20,
    progress: 10,
  },
  {
    firstName: 'Tandy',
    lastName: 'Miller',
    age: 40,
    visits: 40,
    progress: 80,
  },
  {
    firstName: 'Tanner',
    lastName: 'Lindsey',
    age: 24,
    visits: 100,
    progress: 50,
  },
  {
    firstName: 'Joe',
    lastName: 'Dirte',
    age: 45,
    visits: 20,
    progress: 10,
  },
  {
    firstName: 'Tandy',
    lastName: 'Miller',
    age: 40,
    visits: 40,
    progress: 80,
  },
  {
    firstName: 'Tanner',
    lastName: 'Lindsey',
    age: 24,
    visits: 100,
    progress: 50,
  },
  {
    firstName: 'Joe',
    lastName: 'Dirte',
    age: 45,
    visits: 20,
    progress: 10,
  },
  {
    firstName: 'Tandy',
    lastName: 'Miller',
    age: 40,
    visits: 40,
    progress: 80,
  },
  {
    firstName: 'Tanner',
    lastName: 'Lindsey',
    age: 24,
    visits: 100,
    progress: 50,
  },
  {
    firstName: 'Joe',
    lastName: 'Dirte',
    age: 45,
    visits: 20,
    progress: 10,
  },
  {
    firstName: 'Tandy',
    lastName: 'Miller',
    age: 40,
    visits: 40,
    progress: 80,
  },
  {
    firstName: 'Tanner',
    lastName: 'Lindsey',
    age: 24,
    visits: 100,
    progress: 50,
  },
];

// We generate a helper object to generate the display columns and use the type for the structure
const columnHelper = DataTableUtils.createColumnHelper<Person>();

// TODO: how to make the data type apply the correct alignment and other UI props
const columns = [
  columnHelper.accessor('firstName', {
    header: () => (
      <DataTable.HeaderCell
        leadingIcon="person-add"
        sortDirection="ascending"
        sublabel="Given Name"
      >
        First Name
      </DataTable.HeaderCell>
    ),
    cell: (info) => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    header: () => (
      <DataTable.HeaderCell sublabel="Surname">Last Name</DataTable.HeaderCell>
    ),
    cell: (info) => <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>,
  }),
  columnHelper.accessor('age', {
    header: () => (
      <DataTable.HeaderCell alignment="trailing">Age</DataTable.HeaderCell>
    ),
    cell: (info) => (
      <DataTable.DataCell alignment="trailing">
        {info.renderValue()}
      </DataTable.DataCell>
    ),
  }),
  columnHelper.accessor('visits', {
    header: () => (
      <DataTable.HeaderCell alignment="trailing">Visits</DataTable.HeaderCell>
    ),
    cell: (info) => (
      <DataTable.DataCell alignment="trailing">
        {info.renderValue()}
      </DataTable.DataCell>
    ),
  }),
  columnHelper.accessor('progress', {
    header: () => (
      <DataTable.HeaderCell alignment="trailing" sublabel='"Complete" is > 80%'>
        Profile Progress
      </DataTable.HeaderCell>
    ),
    cell: (info) => (
      <DataTable.DataCell
        alignment="trailing"
        sublabel={Number(info.renderValue()) >= 80 ? 'Complete' : 'Incomplete'}
      >
        {info.renderValue()}
      </DataTable.DataCell>
    ),
  }),
];

/**
 * Using the hooks provided by Tanstack's Table, you can control the dimensions and contents of the table.
 *
 * When specifying the cells, you can use `className` to control content controls like truncation or other customizations.
 */
export const Default: StoryObj<Args> = {
  args: {
    caption: 'Test table',
    subcaption: 'Additional Subcaption',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
    });

    return <DataTable {...args} table={table} />;
  },
};

export const TableStyleBorder: StoryObj<Args> = {
  args: {
    tableStyle: 'border',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data] = React.useState(() => [...defaultData]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
    });

    return <DataTable {...args} table={table} />;
  },
};

/**
 * When using table size small, we have less padding on the cells and header
 *
 * **Note**: using `sublabel`s when `size` = `'sm'` is not allowed.
 */
export const TableSizeSm: StoryObj<Args> = {
  args: {
    tableStyle: 'border',
    size: 'sm',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
    });

    return <DataTable {...args} table={table} />;
  },
};

export const RowStyleLined: StoryObj<Args> = {
  args: {
    tableStyle: 'border',
    rowStyle: 'lined',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
    });

    return <DataTable {...args} table={table} />;
  },
};

// TODO-AH: hook up style for selected row
// TODO-AH: hook up isInteractive
/**
 * Implementation example of how to build selectable rows.
 *
 * For more information: https://tanstack.com/table/latest/docs/framework/react/examples/row-selection
 */
export const Selectable: StoryObj<Args> = {
  args: {
    caption: 'Test table',
    subcaption: 'Additional Subcaption',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rowSelection, setRowSelection] = React.useState({});

    // TODO(docs): Why must `any` be passed as second type param to avoid `unknown`?
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const selectableColumns = React.useMemo<
      DataTableUtils.ColumnDef<Person, any>[]
    >(
      () => [
        {
          id: 'select',
          header: ({ table }) => (
            <DataTable.HeaderCell>
              <Checkbox
                {...{
                  checked: table.getIsAllRowsSelected(),
                  indeterminate: table.getIsSomeRowsSelected(),
                  onChange: table.getToggleAllRowsSelectedHandler(),
                  'aria-label': 'check',
                }}
              />
            </DataTable.HeaderCell>
          ),
          cell: ({ row }) => (
            <DataTable.DataCell>
              <Checkbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: row.getToggleSelectedHandler(),
                  'aria-label': 'check',
                }}
              />
            </DataTable.DataCell>
          ),
          // Widths can be set on header cells (using pixels)
          // More information: https://tanstack.com/table/latest/docs/guide/column-sizing#column-widths
          // TODO(design): what is the column size for the selectable column
          size: 32,
        },
        columnHelper.accessor('firstName', {
          header: () => (
            <DataTable.HeaderCell
              leadingIcon="person-add"
              sortDirection="ascending"
              sublabel="Given Name"
            >
              First Name
            </DataTable.HeaderCell>
          ),
          cell: (info) => (
            <DataTable.DataCell leadingIcon="person-add">
              {info.getValue()}
            </DataTable.DataCell>
          ),
        }),
        columnHelper.accessor((row) => row.lastName, {
          id: 'lastName',
          header: () => (
            <DataTable.HeaderCell sublabel="Surname">
              Last Name
            </DataTable.HeaderCell>
          ),
          cell: (info) => (
            <DataTable.DataCell>{info.getValue()}</DataTable.DataCell>
          ),
        }),
        columnHelper.accessor('age', {
          header: () => (
            <DataTable.HeaderCell alignment="trailing">
              Age
            </DataTable.HeaderCell>
          ),
          cell: (info) => (
            <DataTable.DataCell alignment="trailing">
              {info.renderValue()}
            </DataTable.DataCell>
          ),
        }),
        columnHelper.accessor('visits', {
          header: () => (
            <DataTable.HeaderCell alignment="trailing">
              Visits
            </DataTable.HeaderCell>
          ),
          cell: (info) => (
            <DataTable.DataCell alignment="trailing">
              {info.renderValue()}
            </DataTable.DataCell>
          ),
        }),
        columnHelper.accessor('progress', {
          header: () => (
            <DataTable.HeaderCell
              alignment="trailing"
              sublabel='"Complete" is > 80%'
            >
              Profile Progress
            </DataTable.HeaderCell>
          ),
          cell: (info) => (
            <DataTable.DataCell
              alignment="trailing"
              sublabel={
                Number(info.renderValue()) >= 80 ? 'Complete' : 'Incomplete'
              }
            >
              {info.renderValue()}
            </DataTable.DataCell>
          ),
        }),
      ],
      [],
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = DataTableUtils.useReactTable({
      data: defaultData,
      columns: selectableColumns,
      state: {
        rowSelection,
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      getCoreRowModel: DataTableUtils.getCoreRowModel(),
    });

    return <DataTable {...args} table={table} />;
  },
};

export const DefaultWithCustomTable: StoryObj<Args> = {
  args: {
    children: (
      <table>
        <tbody className="border-2 border-utility-default-lowEmphasis-hover">
          <tr>
            <td>TODO: Custom table rows/cells here</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};

export const WithBasicCaption: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
  },
};

export const WithFullCaption: StoryObj<Args> = {
  ...DefaultWithCustomTable,
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
  },
};

export const WithSearch: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
  },
};

export const WithOnlyActions: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const WithSearchAndActions: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};

export const WithSearchAndCustomActions: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
    actions: (
      <>
        <Button
          aria-label="add item"
          icon="add"
          iconLayout="icon-only"
        ></Button>
        <Button icon="sparkles" iconLayout="left" rank="secondary">
          Tailor an Activity
        </Button>
        <Menu>
          <Menu.PlainButton as={React.Fragment}>
            <Button
              aria-label="show more actions"
              icon="dots-horizontal"
              iconLayout="icon-only"
              rank="secondary"
            />
          </Menu.PlainButton>
          <Menu.Items className="w-40">
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
            <Menu.Item href="https://example.org">Menu Label</Menu.Item>
          </Menu.Items>
        </Menu>
      </>
    ),
  },
};

export const WithLongCaption: StoryObj<Args> = {
  args: {
    ...DefaultWithCustomTable.args,
    caption:
      'This is a really long title that really should not be this long and it just keeps going and going and going',
    subcaption: 'Seriously, who let this happen?',
    onSearchChange: () => {},
    actions: (
      <Button
        aria-label="Add a row"
        icon="add-encircled"
        iconLayout="icon-only"
        isDisabled
        rank="secondary"
      />
    ),
  },
};
