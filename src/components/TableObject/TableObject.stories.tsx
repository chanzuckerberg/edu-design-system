import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { useState } from 'react';
import { TableObject } from './TableObject';
import Button from '../Button';
import Heading from '../Heading';
import Icon from '../Icon';
import Table from '../Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
import {
  TableHeaderCell,
  SortDirectionsType,
} from '../TableHeaderCell/TableHeaderCell';
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
} as Meta<Args>;

type Args = React.ComponentProps<typeof TableObject>;

export const Default: StoryObj<Args> = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};

export const Overflow: StoryObj<Args> = {
  args: {
    children: (
      <>
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
              <TableHeaderCell
                onSortClick={onSortClick}
                sortDirection={sortDirection}
              >
                Sortable
              </TableHeaderCell>
              <TableHeaderCell>Not sortable</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{tableValues[0].col1}</TableCell>
              <TableCell>{tableValues[0].col2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{tableValues[1].col1}</TableCell>
              <TableCell>{tableValues[1].col2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{tableValues[2].col1}</TableCell>
              <TableCell>{tableValues[2].col2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{tableValues[3].col1}</TableCell>
              <TableCell>{tableValues[3].col2}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableObject.Body>
    </TableObject>
  );
};

export const Sortable: StoryObj<Args> = {
  render: () => <SortableExample />,
};
