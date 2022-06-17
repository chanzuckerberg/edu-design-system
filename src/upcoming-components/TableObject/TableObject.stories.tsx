import { BADGE } from '@geometricpanda/storybook-addon-badges';
import { Story, Meta } from '@storybook/react';
import React from 'react';

import { TableObject, Props } from './TableObject';
import Table from '../../components/Table';
import TableBody from '../../components/TableBody';
import TableCell from '../../components/TableCell';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';
import Toolbar from '../../components/Toolbar';
import ToolbarItem from '../../components/ToolbarItem';
import TableObjectBody from '../TableObjectBody';
import TableObjectHeader from '../TableObjectHeader';

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

const OverflowTemplate: Story<Props> = (args) => (
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
        behavior="overflow"
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

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {};
