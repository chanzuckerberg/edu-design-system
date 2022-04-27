import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TableObject, Props } from './TableObject';
import Table from '../Table';
import TableBody from '../TableBody';
import TableCell from '../TableCell';
import TableHeader from '../TableHeader';
import TableObjectBody from '../TableObjectBody';
import TableObjectHeader from '../TableObjectHeader';
import TableRow from '../TableRow';
import Toolbar from '../Toolbar';
import ToolbarItem from '../ToolbarItem';

export default {
  title: 'Organisms/Tables/Table Object',
  component: TableObject,
  subcomponents: { TableObjectBody, TableObjectHeader },
} as Meta;

const Template: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObject.Header>
    <TableObject.Body>
      <Table caption="This is a table caption and it is required">
        <TableHeader>
          <TableRow>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
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

const OverflowLargeTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObject.Header>
    <TableObject.Body>
      <Table
        behavior="overflow-lg"
        caption="This is a table caption and it is required"
      >
        <TableHeader>
          <TableRow>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
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

const OverflowSmallTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObject.Header>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObject.Header>
    <TableObject.Body>
      <Table
        behavior="overflow-sm"
        caption="This is a table caption and it is required"
      >
        <TableHeader>
          <TableRow>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
            <TableCell as="th">Table heading</TableCell>
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

export const Default = Template.bind({});
Default.args = {};

export const OverflowLarge = OverflowLargeTemplate.bind({});
OverflowLarge.args = {};

export const OverflowSmall = OverflowSmallTemplate.bind({});
OverflowSmall.args = {};
