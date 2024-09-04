import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import React from 'react';

import { DataTable, type DataTableProps } from './DataTable';
import { chromaticViewports } from '../../util/viewports';
import Button from '../Button';
import Menu from '../Menu';

export default {
  title: 'Components/DataTable',
  component: DataTable,
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

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'Tanner',
    lastName: 'Lindsey',
    age: 24,
    visits: 100,
    progress: 50,
  },
  {
    firstName: 'Tandy',
    lastName: 'Miller',
    age: 40,
    visits: 40,
    progress: 80,
  },
  {
    firstName: 'Joe',
    lastName: 'Dirte',
    age: 45,
    visits: 20,
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => <span>First Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('visits', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('progress', {
    header: 'Profile Progress',
    footer: (info) => info.column.id,
  }),
];

export const Default: StoryObj<Args> = {
  args: {},
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data] = React.useState(() => [...defaultData]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    const PersonDataTable = (args: DataTableProps<Person>) => {
      // @ts-expect-error TODO-AH: what is the type issue here
      return <DataTable {...args} />;
    };

    return <PersonDataTable {...args} table={table} />;
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
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    const PersonDataTable = (args: DataTableProps<Person>) => {
      // @ts-expect-error TODO-AH: what is the type issue here
      return <DataTable {...args} />;
    };

    return <PersonDataTable {...args} table={table} />;
  },
};

export const TableSizeSm: StoryObj<Args> = {
  args: {
    tableStyle: 'border',
    size: 'sm',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data] = React.useState(() => [...defaultData]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    const PersonDataTable = (args: DataTableProps<Person>) => {
      // @ts-expect-error TODO-AH: what is the type issue here
      return <DataTable {...args} />;
    };

    return <PersonDataTable {...args} table={table} />;
  },
};

export const RowStyleStriped: StoryObj<Args> = {
  args: {
    tableStyle: 'border',
    rowStyle: 'striped',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data] = React.useState(() => [...defaultData]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });

    const PersonDataTable = (args: DataTableProps<Person>) => {
      // @ts-expect-error TODO-AH: what is the type issue here
      return <DataTable {...args} />;
    };

    return <PersonDataTable {...args} table={table} />;
  },
};

export const DefaultWithTable: StoryObj<Args> = {
  args: {
    children: (
      <table>
        <tbody className="border-2 border-utility-default-lowEmphasis-hover">
          <tr>
            <td>TODO: Table rows/cells Here</td>
          </tr>
        </tbody>
      </table>
    ),
  },
};

export const WithBasicCaption: StoryObj<Args> = {
  args: {
    ...DefaultWithTable.args,
    caption: 'Fruits of the world',
  },
};

export const WithFullCaption: StoryObj<Args> = {
  ...DefaultWithTable,
  args: {
    ...DefaultWithTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
  },
};

export const WithSearch: StoryObj<Args> = {
  args: {
    ...DefaultWithTable.args,
    caption: 'Fruits of the world',
    subcaption: "Aren't they all so delicious?",
    onSearchChange: () => {},
  },
};

export const WithOnlyActions: StoryObj<Args> = {
  args: {
    ...DefaultWithTable.args,
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
    ...DefaultWithTable.args,
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
    ...DefaultWithTable.args,
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
    ...DefaultWithTable.args,
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
