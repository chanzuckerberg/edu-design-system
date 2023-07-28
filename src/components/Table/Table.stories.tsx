import type { StoryObj, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Filters } from './Filters';
import { StackedCardsToTable } from './StackedCardsToTable';
import { Table, type SortDirectionsType } from './Table';
import { chromaticViewports } from '../../../src/util/viewports';

import styles from './Table.stories.module.css';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: {
    'Table.Body': Table.Body,
    'Table.Caption': Table.Caption,
    'Table.Cell': Table.Cell,
    'Table.Header': Table.Header,
    'Table.Row': Table.Row,
  },
  parameters: {
    badges: ['1.1'],
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<Args>;

type Args = React.ComponentProps<typeof Table>;

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

export const Default: StoryObj<Args> = {
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

export const TableWithCaption: StoryObj<Args> = {
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
export const ZebraHover: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row className={styles['table__row--zebra']} variant="header">
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
              <Table.Row
                className={styles['table__row--zebra']}
                key={item.value1.slice(0, 11)}
              >
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
  parameters: {
    // No hover functionality on chromatic, no need to snap.
    chromatic: { disableSnapshot: true },
  },
};

export const AlignTableCellContentCenter: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row variant="header">
            {tableColumns.map(function (item) {
              return (
                <Table.HeaderCell
                  className="text-center"
                  key={'table-cell-' + item.title}
                >
                  {item.title}
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map(function (item) {
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

export const AlignTableCellContentRight: StoryObj<Args> = {
  args: {
    children: (
      <>
        <Table.Header>
          <Table.Row variant="header">
            {tableColumns.map(function (item) {
              return (
                <Table.HeaderCell
                  className="text-right"
                  key={'table-cell-' + item.title}
                >
                  {item.title}
                </Table.HeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableRows.map(function (item, index) {
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

export const SortableInteractive: StoryObj<Args> = {
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

export const FiltersInteractive: StoryObj<Args> = {
  parameters: {
    badges: ['1.1', 'implementationExample'],
  },
  render: () => <Filters />,
};

export const StackedCardsExample: StoryObj<Args> = {
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
  render: () => <StackedCardsToTable />,
};
