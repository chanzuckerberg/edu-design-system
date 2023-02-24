import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';

import {
  Card,
  CardBody,
  Heading,
  NumberIcon,
  TableHeader,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  Button,
  CardFooter,
} from '../../../src';

import NumberIconList from '../NumberIconList';
import styles from './TableCard.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  title?: string;
  buttonContent?: ReactNode;
  tableColumns: Columns;
  tableRows: Rows;
}

interface Item {
  'aria-label': string;
  complete: boolean;
}

export type Project = Item[];

interface Row {
  value1: string;
  projects: Project;
}

export type Rows = Row[];

interface Column {
  title: string;
}

export type Columns = Column[];

/**
 * A Card containing a Table.
 */
export const TableCard = ({
  className,
  title,
  buttonContent,
  tableRows,
  tableColumns,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['table-card'], className);

  return (
    <Card className={componentClassName} {...other}>
      <CardBody>
        <Heading
          as="h2"
          className="mb-4"
          size="title-sm"
          variant="neutral-strong"
        >
          {title}
        </Heading>
        <Table className={styles['table-card__table']} title={title}>
          <TableHeader>
            <TableRow variant="header">
              {tableColumns.map((item, index) => {
                return (
                  <TableHeaderCell
                    className={styles['table-card__table-header-cell']}
                    key={'table-header-cell-' + item.title}
                  >
                    {item.title}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((item) => {
              return (
                <TableRow key={`table-row-${item.value1}`}>
                  <TableHeaderCell variant="body">
                    {item.value1}
                  </TableHeaderCell>
                  <TableCell>
                    <NumberIconList>
                      {item.projects.map((item, index) => {
                        return (
                          <NumberIcon
                            aria-label={item['aria-label']}
                            incomplete={!item.complete}
                            key={`number-icon-${item['aria-label']}`}
                            number={index + 1}
                            numberIconTitle={`incomplete step ${index + 1}`}
                            size="sm"
                          />
                        );
                      })}
                    </NumberIconList>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardBody>
      <CardFooter>
        <Button status="neutral">{buttonContent}</Button>
      </CardFooter>
    </Card>
  );
};
