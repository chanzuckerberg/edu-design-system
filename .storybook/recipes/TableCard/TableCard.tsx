import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './TableCard.module.css';

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
  ariaLabel: string;
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
 * Primary UI component for user interaction
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
          className="u-margin-bottom-md"
          size="title-sm"
          variant="base"
        >
          {title}
        </Heading>
        <Table
          caption="Standards coverage"
          className={styles['table-card__table']}
          hideCaption={true}
        >
          <TableHeader>
            <TableRow>
              {tableColumns.map((item, index) => {
                return (
                  <TableHeaderCell
                    className={styles['table-card__table-header-cell']}
                    key={'table-header-cell-' + index}
                  >
                    {item.title}
                  </TableHeaderCell>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRows.map((item, index) => {
              return (
                <TableRow key={`table-row-${index}`}>
                  <TableHeaderCell>{item.value1}</TableHeaderCell>
                  <TableCell>
                    <NumberIconList>
                      {item.projects.map((item, index) => {
                        return (
                          <NumberIcon
                            aria-label={item.ariaLabel}
                            incomplete={!item.complete}
                            key={`number-icon-${index}`}
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
