import React from 'react';
import { Story, Meta } from '@storybook/react';

import { KeyValueTable, Props } from './KeyValueTable';
import { KeyValueTableRow } from '../KeyValueTableRow/KeyValueTableRow';

export default {
  title: 'Organisms/Tables/KeyValueTable',
  component: KeyValueTable,
} as Meta;

const Template: Story<Props> = (args) => (
  <KeyValueTable {...args}>
    <KeyValueTableRow rowKey="Key 1" rowValue="Value 1"></KeyValueTableRow>
    <KeyValueTableRow
      rowKey="Key 2"
      rowValue="Longer Value 2"
    ></KeyValueTableRow>
    <KeyValueTableRow
      rowKey="A longer key 3"
      rowValue="Value 1"
    ></KeyValueTableRow>
  </KeyValueTable>
);

export const Default = Template.bind({});
Default.args = {};

export const Lined = Template.bind({});
Lined.args = { variant: 'lined' };

export const FullWidth = Template.bind({});
FullWidth.args = { fullWidth: true };
