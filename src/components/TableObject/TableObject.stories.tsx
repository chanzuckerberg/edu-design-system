import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TableObject, Props } from './TableObject';
import { Table } from '../Table/Table';
import { TableBody } from '../TableBody/TableBody';
import { TableCell } from '../TableCell/TableCell';
import { TableHeader } from '../TableHeader/TableHeader';
import { TableObjectBody } from '../TableObjectBody/TableObjectBody';
import { TableObjectHeader } from '../TableObjectHeader/TableObjectHeader';
import { TableRow } from '../TableRow/TableRow';
import { Toolbar } from '../Toolbar/Toolbar';
import { ToolbarItem } from '../ToolbarItem/ToolbarItem';

export default {
  title: 'Organisms/Tables/Table Object',
  component: TableObject,
} as Meta;

const Template: Story<Props> = (args) => (
  <TableObject>
    <TableObjectHeader>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObjectHeader>
    <TableObjectBody>
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
    </TableObjectBody>
  </TableObject>
);

const OverflowLargeTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObjectHeader>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObjectHeader>
    <TableObjectBody>
      <Table
        caption="This is a table caption and it is required"
        behavior="overflow-lg"
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
    </TableObjectBody>
  </TableObject>
);

const OverflowSmallTemplate: Story<Props> = (args) => (
  <TableObject>
    <TableObjectHeader>
      <Toolbar>
        <ToolbarItem>
          <div className="fpo">Toolbar Item</div>
        </ToolbarItem>
      </Toolbar>{' '}
    </TableObjectHeader>
    <TableObjectBody>
      <Table
        caption="This is a table caption and it is required"
        behavior="overflow-sm"
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
    </TableObjectBody>
  </TableObject>
);

export const Default = Template.bind({});
Default.args = {};

export const OverflowLarge = OverflowLargeTemplate.bind({});
OverflowLarge.args = {};

export const OverflowSmall = OverflowSmallTemplate.bind({});
OverflowSmall.args = {};
