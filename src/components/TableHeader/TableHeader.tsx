import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from '../Table/Table.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TableHeader} from "@chanzuckerberg/eds";
 * ```
 *
 * HTML `thead` of the `Table` component
 */
export const TableHeader = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['table__header'], className);

  return (
    <thead className={componentClassName} {...other}>
      {children}
    </thead>
  );
};
