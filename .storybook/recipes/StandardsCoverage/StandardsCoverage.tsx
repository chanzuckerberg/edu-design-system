import React from 'react';
import clsx from 'clsx';
import styles from './StandardsCoverage.module.css';

import {
  Panel,
  Heading,
  NumberIcon,
  TableHeader,
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHeaderCell,
  Button,
} from '../../../src';

import NumberIconList from '../NumberIconList';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const StandardsCoverage = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['standards-coverage'], className, {});
  return (
    <Panel className={componentClassName} {...other}>
      <Heading className="u-margin-bottom-md" as="h2" size="title-sm">
        Standards coverage
      </Heading>
      <Table
        className={styles['standards-coverage__table']}
        caption="Standards coverage"
        hideCaption={true}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell
              className={styles['standards-coverage__table-header-cell']}
            >
              Least covered Cognitive Skills
            </TableHeaderCell>
            <TableHeaderCell
              className={styles['standards-coverage__table-header-cell']}
            >
              Projects
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHeaderCell>Argumentative Claim</TableHeaderCell>
            <TableCell>
              <NumberIconList>
                <NumberIcon size="sm" aria-label="Project 1" number={1} />
                <NumberIcon size="sm" aria-label="Project 2" number={2} />
                <NumberIcon size="sm" aria-label="Project 3" number={3} />
                <NumberIcon size="sm" aria-label="Project 4" number={4} />
                <NumberIcon size="sm" aria-label="Project 5" number={5} />
                <NumberIcon size="sm" aria-label="Project 1" number={6} />
                <NumberIcon size="sm" aria-label="Project 2" number={7} />
                <NumberIcon size="sm" aria-label="Project 3" number={8} />
                <NumberIcon size="sm" aria-label="Project 4" number={9} />
                <NumberIcon size="sm" aria-label="Project 5" number={10} />
              </NumberIconList>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>Making Connections and Inferences</TableHeaderCell>
            <TableCell>
              <NumberIconList>
                <NumberIcon size="sm" aria-label="Project 1" number={1} />
                <NumberIcon size="sm" aria-label="Project 2" number={2} />
                <NumberIcon size="sm" aria-label="Project 3" number={3} />
                <NumberIcon size="sm" aria-label="Project 4" number={4} />
                <NumberIcon size="sm" aria-label="Project 5" number={5} />
              </NumberIconList>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell>
              A longer heading that is super duper long
            </TableHeaderCell>
            <TableCell>
              <NumberIconList>
                <NumberIcon size="sm" aria-label="Project 1" number={1} />
                <NumberIcon size="sm" aria-label="Project 2" number={2} />
                <NumberIcon size="sm" aria-label="Project 3" number={3} />
                <NumberIcon size="sm" aria-label="Project 4" number={4} />
                <NumberIcon size="sm" aria-label="Project 5" number={5} />
              </NumberIconList>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button status="neutral">View All Cognitive Skills</Button>
    </Panel>
  );
};
