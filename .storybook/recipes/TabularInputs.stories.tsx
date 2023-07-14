import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';
import { Table, InputField, Label } from '../../src/';

export default {
  title: 'Recipes/TabularInput',
  component: Table,
  decorators: [(Story) => <div className="p-8">{Story()}</div>],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Table>;

export const Default: StoryObj<Args> = {
  render: (args) => (
    <Table {...args}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Label</Table.HeaderCell>
          <Table.HeaderCell>Field</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell className="flex items-center">
            <Label
              className="flex items-center"
              htmlFor="field-1"
              id="input-1"
              text="Input One"
            />
          </Table.Cell>
          <Table.Cell>
            <InputField
              aria-label="redundant"
              aria-labelledby="input-1"
              id="field-1"
              placeholder="click the label to highlight field"
            />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
