import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Grid.module.css';
import GridItem from '../GridItem';

export interface Props {
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
  /**
   * Stylistic variations of the GridL
   * - **1up** yields a Grid whose GridItems span the entire width of the container
   * - **1-3up** yields a Grid whose GridItems are stacked on small screens and expand to fit 3 across when enough screen real estate becomes available to display them comfortably side-by-side
   * - **2up** yields a Grid whose GridItems are stacked on small screens but display side-by-side when enough screen real estate is available to do so
   * - **3up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern
   * - **4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern
   * - **1-2-4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern
   * - **side-by-side** yields a Grid whose GridItems are always displayed side-by-side
   */
  variant?:
    | '2up'
    | 'side-by-side'
    | '1-3up'
    | '3up'
    | '4up'
    | '1-2-4up'
    | '1-2-1up';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Grid} from "@chanzuckerberg/eds";
 * ```
 *
 * Grid component used to layout GridItem components into a grid pattern. This is flexible component
 * allowing for a variety of responsive layout components.
 */
export const Grid = ({
  className,
  variant,
  children,
  gap,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['grid'],
    className,
    variant && styles[`grid--${variant}`],
    gap === 'sm' && styles['grid--gap-sm'],
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};

Grid.Item = GridItem;
