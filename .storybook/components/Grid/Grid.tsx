import clsx from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import styles from './Grid.module.css';

export type GridProps = {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Gap style variants
   * - **sm** renders a smaller gap between items than the default
   */
  gap?: 'sm';
};

export type GridItemProps = {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * The Grid component is deprecated and will be removed in an upcoming release.
 * Instead, please make use of utility libraries, like Tailwind CSS:
 * * https://tailwindcss.com/docs/display#grid
 *
 * `import {Grid} from "@chanzuckerberg/eds";`
 *
 * Grid component used to layout Grid item components into a grid pattern. This is flexible component
 * allowing for a variety of responsive layout components.
 */
export const Grid = ({ className, children, gap, ...other }: GridProps) => {
  const componentClassName = clsx(
    styles['grid'],
    gap === 'sm' && styles['grid--gap-sm'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

/**
 * Single grid item to be used in the Grid component.
 */
export const GridItem = ({ children, className, ...other }: GridItemProps) => {
  const componentClassName = clsx(styles['grid__item'], className);

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Grid.Item = GridItem;
