import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Table, Props } from './Table';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableBody } from '../TableBody/TableBody';
import { TableRow } from '../TableRow/TableRow';
import { TableCell } from '../TableCell/TableCell';
import { SkeletonBar } from '../SkeletonBar/SkeletonBar';

export default {
  title: 'Organisms/Tables/Table',
  component: Table,
} as Meta;

const headerTableCellWrapColumns = [
  {
    title: 'Table Header Cell Column 1',
  },
  {
    title: 'Table Header Cell Column 2',
  },
  {
    title: 'Table Header Cell Column 3',
  },
  {
    title: 'Table Header Cell Column 4',
  },
  {
    title: 'Table Header Cell Column 5',
  },
];

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
    <TableHeader>
      <TableRow>
        {tableColumns.map((item, index) => {
          return (
            <TableCell as="th" key={'table-header-row-' + index}>
              {item.title}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHeader>

    <TableBody>
      {tableRows.map((item, index) => {
        return (
          <TableRow key={'table-row-' + index}>
            <TableCell>{item.value1}</TableCell>
            <TableCell>{item.value2}</TableCell>
            <TableCell>{item.value3}</TableCell>
            <TableCell>{item.value4}</TableCell>
            <TableCell>{item.value5}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
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
    <TableHeader>
      <TableRow>
        {tableColumns.map(function (item, index) {
          return (
            <TableCell align="center" as="th" key={'table-cell-' + index}>
              {item.title}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHeader>

    <TableBody>
      {tableRows.map(function (item, index) {
        return (
          <TableRow key={'table-row-' + index}>
            <TableCell align="center" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell align="center" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell align="center" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
            <TableCell align="center" data-label={tableColumns[3].title}>
              {item.value4}
            </TableCell>
            <TableCell align="center" data-label={tableColumns[4].title}>
              {item.value5}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);

export const AlignTableCellContentRight = () => (
  <Table caption="This is a table caption and it is required">
    <TableHeader>
      <TableRow>
        {tableColumns.map(function (item, index) {
          return (
            <TableCell align="right" as="th" key={'table-cell-' + index}>
              {item.title}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHeader>

    <TableBody>
      {tableRows.map(function (item, index) {
        return (
          <TableRow key={'table-row-' + index}>
            <TableCell align="right" data-label={tableColumns[0].title}>
              {item.value1}
            </TableCell>
            <TableCell align="right" data-label={tableColumns[1].title}>
              {item.value2}
            </TableCell>
            <TableCell align="right" data-label={tableColumns[2].title}>
              {item.value3}
            </TableCell>
            <TableCell align="right" data-label={tableColumns[3].title}>
              {item.value4}
            </TableCell>
            <TableCell align="right" data-label={tableColumns[4].title}>
              {item.value5}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
