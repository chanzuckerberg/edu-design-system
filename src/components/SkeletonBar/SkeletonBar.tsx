import clsx from 'clsx';
import React from 'react';
import styles from './SkeletonBar.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations of the bar
   */
  size?: 'sm' | 'lg' | 'xl';
}

/**
 * Primary UI component for user interaction
 */
export const SkeletonBar = ({ className, size, ...other }: Props) => {
  const componentClassName = clsx(
    styles['skeleton-bar'],
    className,
    size === 'sm' && styles['skeleton-bar--sm'],
    size === 'lg' && styles['skeleton-bar--lg'],
    size === 'xl' && styles['skeleton-bar--xl'],
  );

  return <div className={componentClassName} {...other}></div>;
};
