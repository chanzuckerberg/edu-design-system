import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './GridItem.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * `import {GridItem} from "@chanzuckerberg/eds";`
 *
 * Single grid item to be used in the Grid component.
 */
export const GridItem = ({ children, className, ...other }: Props) => {
  const componentClassName = clsx(styles['grid__item'], className);

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
