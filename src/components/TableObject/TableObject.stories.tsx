import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TableObject, Props } from './TableObject';
import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';
import Table from '../Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
import TableHeaderCell from '../TableHeaderCell';
import TableObjectBody from '../TableObjectBody';
import TableObjectHeader from '../TableObjectHeader';
import TableRow from '../TableRow';
import Toolbar from '../Toolbar';
import ToolbarItem from '../ToolbarItem';

export default {
  title: 'Organisms/Tables/Table Object',
  component: TableObject,
  subcomponents: { TableObjectBody, TableObjectHeader },
  parameters: {
    axe: {
      // TODO: re-enable when component is worked on
      skip: true,
    },
    badges: [BADGE.BETA],
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <Heading as="h2" size="h3">
            Checkpoint Progress
          </Heading>
        </ToolbarItem>
        <ToolbarItem align="right">
          <Button size="md" status="brand" variant="secondary">
            <Icon name="filter-list" purpose="decorative" size="1.375rem" />
            Filters
          </Button>
        </ToolbarItem>
      </Toolbar>
    </TableObject.Header>
    <TableObject.Body>
      <Table caption="This is a table caption and it is required">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Chart</TableHeaderCell>
            <TableHeaderCell>Last Update</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Table Row 1, Table Cell 1</TableCell>
            <TableCell>Row 2 Cell 2</TableCell>
            <TableCell>Table Row 1, Table Cell 3</TableCell>
            <TableCell>Table Row 1, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 2, Table Cell 1</TableCell>
            <TableCell>Row 2 Cell 2</TableCell>
            <TableCell>Table Row 2, Table Cell 3</TableCell>
            <TableCell>Table Row 2, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 3, Table Cell 1</TableCell>
            <TableCell>Row 2 Cell 2</TableCell>
            <TableCell>Table Row 3, Table Cell 3</TableCell>
            <TableCell>Table Row 3, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 4, Table Cell 1</TableCell>
            <TableCell>Row 2 Cell 2</TableCell>
            <TableCell>Table Row 4, Table Cell 3</TableCell>
            <TableCell>Table Row 4, Table Cell 4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableObject.Body>
  </TableObject>
);

const OverflowTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <Heading as="h2" size="h3">
            Checkpoint Progress
          </Heading>
        </ToolbarItem>
        <ToolbarItem align="right">
          <Button size="md" status="brand" variant="secondary">
            <Icon name="filter-list" purpose="decorative" size="1.375rem" />
            Filters
          </Button>
        </ToolbarItem>
      </Toolbar>
    </TableObject.Header>
    <TableObject.Body>
      <Table caption="This is a table caption and it is required">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Chart</TableHeaderCell>
            <TableHeaderCell>Last Update</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Table Row 1, Table Cell 1</TableCell>
            <TableCell>Table Row 1, Table Cell 2</TableCell>
            <TableCell>Table Row 1, Table Cell 3</TableCell>
            <TableCell>Table Row 1, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 2, Table Cell 1</TableCell>
            <TableCell>Table Row 2, Table Cell 2</TableCell>
            <TableCell>Table Row 2, Table Cell 3</TableCell>
            <TableCell>Table Row 2, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 3, Table Cell 1</TableCell>
            <TableCell>Table Row 3, Table Cell 2</TableCell>
            <TableCell>Table Row 3, Table Cell 3</TableCell>
            <TableCell>Table Row 3, Table Cell 4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Table Row 4, Table Cell 1</TableCell>
            <TableCell>Table Row 4, Table Cell 2</TableCell>
            <TableCell>Table Row 4, Table Cell 3</TableCell>
            <TableCell>Table Row 4, Table Cell 4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableObject.Body>
  </TableObject>
);

const SortableTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <Heading as="h2" size="h3">
            Checkpoint Progress
          </Heading>
        </ToolbarItem>
        <ToolbarItem align="right">
          <Button size="md" status="brand" variant="secondary">
            <Icon name="filter-list" purpose="decorative" size="1.375rem" />
            Filters
          </Button>
        </ToolbarItem>
      </Toolbar>
    </TableObject.Header>
    <TableObject.Body>
      <Table caption="This is a table caption and it is required">
        <TableHeader>
          <TableRow>
            <TableHeaderCell sortDirection="default" sortable>
              Sortable
            </TableHeaderCell>
            <TableHeaderCell>Not sortable</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableObject.Body>
  </TableObject>
);

export const Default = Template.bind({});
Default.args = {};

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {};

export const Sortable = SortableTemplate.bind({});
Sortable.args = {};
