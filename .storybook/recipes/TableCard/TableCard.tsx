import React, { ReactNode } from 'react';
import clsx from 'clsx';
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
  const componentClassName = clsx(styles['standards-coverage'], className, {});

  return (
    <Card className={componentClassName} {...other}>
      <CardBody>
        <Heading className="u-margin-bottom-md" as="h2" size="title-sm">
          {title}
        </Heading>
        <Table
          className={styles['standards-coverage__table']}
          caption="Standards coverage"
          hideCaption={true}
        >
          <TableHeader>
            <TableRow>
              {tableColumns.map((item, index) => {
                return (
                  <TableHeaderCell
                    className={styles['standards-coverage__table-header-cell']}
                    key={'table-header-row-' + index}
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
                <TableRow>
                  <TableHeaderCell>{item.value1}</TableHeaderCell>
                  <TableCell>
                    <NumberIconList>
                      {item.projects.map((item, index) => {
                        return (
                          <NumberIcon
                            size="sm"
                            aria-label={item.ariaLabel}
                            number={index + 1}
                            incomplete={!item.complete}
                            numberIconTitle={`incomplete step ${index + 1}`}
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
