import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Table, Props } from './Table';

export default {
  title: 'Organisms/Tables/Table',
  component: Table,
} as Meta;

// const headerTableCellWrapColumns = [
//   {
//     title: 'Table Header Cell Column 1',
//   },
//   {
//     title: 'Table Header Cell Column 2',
//   },
//   {
//     title: 'Table Header Cell Column 3',
//   },
//   {
//     title: 'Table Header Cell Column 4',
//   },
//   {
//     title: 'Table Header Cell Column 5',
//   },
// ];

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

const Template: Story<Props> = (args) => (
  <Table {...args}>
    <Table.Header>
      <Table.Row>
        {tableColumns.map((item, index) => {
          return (
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
  </Table>
);

export const Default = Template.bind({});
Default.args = {};

export const Zebra = Template.bind({});
Zebra.args = {
  variant: 'zebra',
};

export const Overflow = Template.bind({});
Overflow.args = {
  behavior: 'overflow',
};

export const AlignTableCellContentCenter = () => (
  <Table caption="This is a table caption and it is required">
    <Table.Header>
      <Table.Row>
        {tableColumns.map(function (item, index) {
          return (
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
  </Table>
);

export const AlignTableCellContentRight = () => (
  <Table caption="This is a table caption and it is required">
    <Table.Header>
      <Table.Row>
        {tableColumns.map(function (item, index) {
          return (
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
  </Table>
);
