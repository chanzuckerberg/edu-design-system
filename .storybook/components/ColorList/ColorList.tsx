import React from 'react';
import Table from '../../../src/components/Table';
import styles from './ColorList.module.css';

type ListItem = {
  name: string;
  value: string;
  figmaToken?: string;
  tailwindClass?: string;
};

type Props = {
  listItems: ListItem[];
};

export const ColorList = (props: Props) => (
  <Table>
    <Table.Header>
      <Table.Row variant="header">
        <Table.HeaderCell className="w-72">CSS Variable</Table.HeaderCell>
        <Table.HeaderCell className="w-40">Figma Token Name</Table.HeaderCell>
        <Table.HeaderCell className="w-72">
          Tailwind Class Name(s)
        </Table.HeaderCell>
        <Table.HeaderCell className="w-40">Raw Value</Table.HeaderCell>
        <Table.HeaderCell>Clickable Color Palatte</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.listItems.map((listItem) => (
        <Table.Row key={listItem.name}>
          <Table.Cell>
            <label
              className={styles['color-list__label']}
              htmlFor={listItem.name}
            >
              <code>{listItem.name}</code>
            </label>
          </Table.Cell>
          <Table.Cell>{listItem.figmaToken}</Table.Cell>
          <Table.Cell>{listItem.tailwindClass}</Table.Cell>
          <Table.Cell>{listItem.value}</Table.Cell>
          <Table.Cell>
            <input
              className={styles['color-list__input']}
              id={listItem.name}
              readOnly
              type="color"
              value={listItem.value}
            />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
