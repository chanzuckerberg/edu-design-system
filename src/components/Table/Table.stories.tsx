import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Table } from './Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
import type { SortDirectionsType } from '../TableHeaderCell';
import TableRow from '../TableRow';

export default {
  title: 'Organisms/Tables/Table',
  component: Table,
  subcomponents: { TableBody, TableCell, TableHeader, TableRow },
  parameters: {
    badges: [BADGE.BETA],
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Table>;

const tableColumns = [
  {
    title: 'Name',
  },
  {
    title: 'Status',
  },
  {
    title: 'Chart',
  },
  {
    title: 'Window',
  },
  {
    title: 'Last Update',
  },
];

const tableRows = [
  {
    value1: 'Table Row 1, Table Cell 1',
    value2: 'Table Row 1, Table Cell 2',
    value3: 'Table Row 1, Table Cell 3',
    value4: 'Table Row 1, Table Cell 4',
    value5: 'Table Row 1, Table Cell 5',
  },
  {
    value1: 'Table Row 2, Table Cell 1',
    value2: 'Table Row 2, Table Cell 2',
    value3: 'Table Row 2, Table Cell 3',
    value4: 'Table Row 2, Table Cell 4',
    value5: 'Table Row 2, Table Cell 5',
  },
  {
    value1: 'Table Row 3, Table Cell 1',
    value2: 'Table Row 3, Table Cell 2',
    value3: 'Table Row 3, Table Cell 3',
    value4: 'Table Row 3, Table Cell 4',
    value5: 'Table Row 3, Table Cell 5',
  },
  {
    value1: 'Table Row 4, Table Cell 1',
    value2: 'Table Row 4, Table Cell 2',
    value3: 'Table Row 4, Table Cell 3',
    value4: 'Table Row 4, Table Cell 4',
    value5: 'Table Row 4, Table Cell 5',
  },
];

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row>
            {tableColumns.map((item, index) => {
              return (
                // FIXME
                // eslint-disable-next-line react/no-array-index-key
                <Table.Cell as="th" key={'table-header-row-' + index}>
                  {item.title}
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map((item, index) => {
            return (
              // FIXME
              // eslint-disable-next-line react/no-array-index-key
              <Table.Row key={'table-row-' + index}>
                <Table.Cell>{item.value1}</Table.Cell>
                <Table.Cell>{item.value2}</Table.Cell>
                <Table.Cell>{item.value3}</Table.Cell>
                <Table.Cell>{item.value4}</Table.Cell>
                <Table.Cell>{item.value5}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};

export const Zebra: StoryObj<Args> = {
  args: {
    ...Default.args,
    variant: 'zebra',
  },
};

export const Stacked: StoryObj<Args> = {
  args: {
    behavior: 'stacked',
    children: (
      <>
        <Table.Header>
          <Table.Row>
            {tableColumns.map((item, index) => {
              return (
                // FIXME
                // eslint-disable-next-line react/no-array-index-key
                <Table.Cell as="th" key={'table-header-row-' + index}>
                  {item.title}
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map((item, index) => {
            return (
              // FIXME
              // eslint-disable-next-line react/no-array-index-key
              <Table.Row key={'table-row-' + index}>
                <Table.Cell data-heading={tableColumns[0].title}>
                  {item.value1}
                </Table.Cell>
                <Table.Cell data-heading={tableColumns[1].title}>
                  {item.value2}
                </Table.Cell>
                <Table.Cell data-heading={tableColumns[2].title}>
                  {item.value3}
                </Table.Cell>
                <Table.Cell data-heading={tableColumns[3].title}>
                  {item.value4}
                </Table.Cell>
                <Table.Cell data-heading={tableColumns[4].title}>
                  {item.value5}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    chromatic: { viewports: [414] },
  },
};

export const AlignTableCellContentCenter: StoryObj<Args> = {
  args: {
    caption: 'This is a table caption and it is required',
    children: (
      <>
        <Table.Header>
          <Table.Row>
            {tableColumns.map(function (item, index) {
              return (
                // FIXME
                // eslint-disable-next-line react/no-array-index-key
                <Table.Cell align="center" as="th" key={'table-cell-' + index}>
                  {item.title}
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map(function (item, index) {
            return (
              // FIXME
              // eslint-disable-next-line react/no-array-index-key
              <Table.Row key={'table-row-' + index}>
                <Table.Cell align="center" data-label={tableColumns[0].title}>
                  {item.value1}
                </Table.Cell>
                <Table.Cell align="center" data-label={tableColumns[1].title}>
                  {item.value2}
                </Table.Cell>
                <Table.Cell align="center" data-label={tableColumns[2].title}>
                  {item.value3}
                </Table.Cell>
                <Table.Cell align="center" data-label={tableColumns[3].title}>
                  {item.value4}
                </Table.Cell>
                <Table.Cell align="center" data-label={tableColumns[4].title}>
                  {item.value5}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};

export const AlignTableCellContentRight: StoryObj<Args> = {
  args: {
    caption: 'This is a table caption and it is required',
    children: (
      <>
        <Table.Header>
          <Table.Row>
            {tableColumns.map(function (item, index) {
              return (
                // FIXME
                // eslint-disable-next-line react/no-array-index-key
                <Table.Cell align="right" as="th" key={'table-cell-' + index}>
                  {item.title}
                </Table.Cell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map(function (item, index) {
            return (
              // FIXME
              // eslint-disable-next-line react/no-array-index-key
              <Table.Row key={'table-row-' + index}>
                <Table.Cell align="right" data-label={tableColumns[0].title}>
                  {item.value1}
                </Table.Cell>
                <Table.Cell align="right" data-label={tableColumns[1].title}>
                  {item.value2}
                </Table.Cell>
                <Table.Cell align="right" data-label={tableColumns[2].title}>
                  {item.value3}
                </Table.Cell>
                <Table.Cell align="right" data-label={tableColumns[3].title}>
                  {item.value4}
                </Table.Cell>
                <Table.Cell align="right" data-label={tableColumns[4].title}>
                  {item.value5}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};

const SortableExample = () => {
  const values = [
    { col1: 'Value 1', col2: 'Value A' },
    { col1: 'Value 3', col2: 'Value B' },
    { col1: 'Value 2', col2: 'Value C' },
    { col1: 'Value 4', col2: 'Value D' },
  ];
  const [sortDirection, setSortDirection] =
    useState<SortDirectionsType>('default');
  const [tableValues, setTableValues] = useState({ ...values });
  const onSortClick = () => {
    if (sortDirection === 'descending') {
      setSortDirection('default');
      values.sort((a, b) => {
        if (a.col2 < b.col2) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    if (sortDirection === 'default') {
      setSortDirection('ascending');
      values.sort((a, b) => {
        if (a.col1 < b.col1) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    if (sortDirection === 'ascending') {
      setSortDirection('descending');
      values.sort((a, b) => {
        if (b.col1 < a.col1) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    setTableValues({ ...values });
  };
  return (
    <Table caption="This is a table caption and it is required">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            onSortClick={onSortClick}
            sortDirection={sortDirection}
          >
            Sortable
          </Table.HeaderCell>
          <Table.HeaderCell>Not sortable</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <TableBody>
        <Table.Row>
          <Table.Cell>{tableValues[0].col1}</Table.Cell>
          <Table.Cell>{tableValues[0].col2}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{tableValues[1].col1}</Table.Cell>
          <Table.Cell>{tableValues[1].col2}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{tableValues[2].col1}</Table.Cell>
          <Table.Cell>{tableValues[2].col2}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{tableValues[3].col1}</Table.Cell>
          <Table.Cell>{tableValues[3].col2}</Table.Cell>
        </Table.Row>
      </TableBody>
    </Table>
  );
};

export const SortableInteractive: StoryObj<Args> = {
  render: () => <SortableExample />,
};
