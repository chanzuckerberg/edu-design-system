import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { StackedCardsToTable } from './StackedCardsToTable';

import { Table, type SortDirectionsType } from './Table';
import { chromaticViewports } from '../../../src/util/viewports';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    badges: ['1.1'],
  },
  argTypes: {
    children: {
      description:
        'Contains the sub-components for a table, including `.Body`, `.Cell`, `.Header`, `.Footer`, `.HeaderCell`, `.Row`, and `.Caption`',
      control: {
        type: null,
      },
    },
  },
  backgrounds: {
    default: 'eds-color-neutral-white',
  },
} as Meta<Args>;

type Args = React.ComponentProps<typeof Table>;
type Story = StoryObj<Args>;

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

/**
 * The basic structure of this component is defined here, and each cell can receive classes that
 * can augment layout, alignment, or other properties of the content.
 *
 * Use `Text` to update any typographical details, which will apply tokens to the content.
 */
export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row variant="header">
            {tableColumns.map((item) => {
              return (
                <Table.HeaderCell key={'table-header-row-' + item.title}>
                  {item.title}
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map((item) => {
            return (
              <Table.Row key={item.value1.slice(0, 11)}>
                <Table.Cell>{item.value1}</Table.Cell>
                <Table.Cell>{item.value2}</Table.Cell>
                <Table.Cell>{item.value3}</Table.Cell>
                <Table.Cell>{item.value4}</Table.Cell>
                <Table.Cell>{item.value5}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};

/**
 * Captions can be inserted into the body of the table, which will render content
 * above the table headers and content.
 */
export const TableWithCaption: Story = {
  args: {
    children: (
      <>
        <Table.Caption>
          Optional caption for the table. Must be first descendant of Table if
          used.
        </Table.Caption>

        <Table.Header>
          <Table.Row variant="header">
            {tableColumns.map((item) => {
              return (
                <Table.HeaderCell key={'table-header-row-' + item.title}>
                  {item.title}
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map((item) => {
            return (
              <Table.Row key={item.value1.slice(0, 11)}>
                <Table.Cell>{item.value1}</Table.Cell>
                <Table.Cell>{item.value2}</Table.Cell>
                <Table.Cell>{item.value3}</Table.Cell>
                <Table.Cell>{item.value4}</Table.Cell>
                <Table.Cell>{item.value5}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </>
    ),
  },
};

/**
 * This implementation example shows how one might implement sort. Sort can be implemented to work based
 * on the current content (if the full table is already rendered), or using request results from the server
 * if the table needs to contain any additional logic to sort (e.g., sorting needs to fetch different search
 * result pages).
 */
export const SortableInteractive: Story = {
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  render: () => {
    const values = [
      { col1: 'Value 1', col2: 'Value A' },
      { col1: 'Value 3', col2: 'Value B' },
      { col1: 'Value 2', col2: 'Value C' },
      { col1: 'Value 4', col2: 'Value D' },
    ];
    const [sortDirection, setSortDirection] =
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useState<SortDirectionsType>('default');
    const onSortClick = () => {
      if (sortDirection === 'descending') {
        setSortDirection('default');
      }
      if (sortDirection === 'default') {
        setSortDirection('ascending');
      }
      if (sortDirection === 'ascending') {
        setSortDirection('descending');
      }
    };
    const sortedValues = values.slice().sort((a, b) => {
      if (sortDirection === 'default') {
        if (a.col2 < b.col2) {
          return -1;
        } else {
          return 1;
        }
      }
      if (sortDirection === 'ascending') {
        if (a.col1 < b.col1) {
          return -1;
        } else {
          return 1;
        }
      }
      if (sortDirection === 'descending') {
        if (b.col1 < a.col1) {
          return -1;
        } else {
          return 1;
        }
      }
      return 0;
    });
    return (
      <Table>
        <Table.Header>
          <Table.Row variant="header">
            <Table.HeaderCell
              onSortClick={onSortClick}
              sortDirection={sortDirection}
            >
              Sortable
            </Table.HeaderCell>
            <Table.HeaderCell>Not sortable</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedValues.map(({ col1, col2 }) => (
            <Table.Row key={`row-${col1}-${col2}`}>
              <Table.Cell>{col1}</Table.Cell>
              <Table.Cell>{col2}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

/**
 * Responsive behavior can be built by combining different components and responsive logic
 *
 * Code: https://github.com/chanzuckerberg/edu-design-system/blob/main/src/components/Table/StackedCardsToTable.tsx
 */
export const StackedCardsExample: Story = {
  parameters: {
    badges: ['1.1', 'implementationExample'],
    chromatic: {
      viewports: [
        chromaticViewports.googlePixel2,
        chromaticViewports.ipadMini,
        chromaticViewports.chromebook,
      ],
    },
  },
  render: (args) => <StackedCardsToTable {...args} />,
};
