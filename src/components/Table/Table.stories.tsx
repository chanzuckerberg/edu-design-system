import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { Table } from './Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
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
