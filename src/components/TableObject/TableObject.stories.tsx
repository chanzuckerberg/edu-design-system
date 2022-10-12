import { BADGE } from '@geometricpanda/storybook-addon-badges';
import type { Story, Meta } from '@storybook/react';
import React from 'react';

import type { Props } from './TableObject';
import { TableObject } from './TableObject';
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
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
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
    <TableObject.Body behavior="overflow">
      <Table caption="This is a table caption and it is required">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
            <TableHeaderCell>Table heading</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>

            <TableCell>Value</TableCell>
            <TableCell>Value</TableCell>
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
            <TableHeaderCell sortable sortDirection="default">
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
