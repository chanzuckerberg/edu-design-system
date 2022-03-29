import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Grid.module.css';

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
   * Stylistic variations of the GridL
   * - **1up** yields a Grid whose GridItems span the entire width of the container
   * - **1-3up** yields a Grid whose GridItems are stacked on small screens and expand to fit 3 across when enough screen real estate becomes available to display them comfortably side-by-side
   * - **2up** yields a Grid whose GridItems are stacked on small screens but display side-by-side when enough screen real estate is available to do so
   * - **3up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern and then transforms again to a 3-across pattern
   * - **4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, transforms again to a 3-across pattern, and ultimately transforms to a 4-across pattern
   * - **1-2-4up** yields a Grid whose GridItems are stacked on small screens, transforms to a 2-across pattern, and ultimately transforms to a 4-across pattern
   * - **side-by-side** yields a Grid whose GridItems are always displayed side-by-side
   */
  variant?: '2up' | 'side-by-side' | '1-3up' | '3up' | '4up' | '1-2-4up';
}

/**
 * Primary UI component for user interaction
 */
export const Grid = ({ className, variant, children, ...other }: Props) => {
  const componentClassName = clsx(styles['grid'], className, {
    [styles['grid--2up']]: variant === '2up',
    [styles['grid--side-by-side']]: variant === 'side-by-side',
    [styles['grid--1-3up']]: variant === '1-3up',
    [styles['grid--3up']]: variant === '3up',
    [styles['grid--4up']]: variant === '4up',
    [styles['grid--1-2-4up']]: variant === '1-2-4up',
  });

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
