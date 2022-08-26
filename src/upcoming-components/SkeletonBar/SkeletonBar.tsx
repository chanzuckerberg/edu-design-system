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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SkeletonBar} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const SkeletonBar = ({ className, size, ...other }: Props) => {
  const componentClassName = clsx(
    styles['skeleton-bar'],
    size === 'sm' && styles['skeleton-bar--sm'],
    size === 'lg' && styles['skeleton-bar--lg'],
    size === 'xl' && styles['skeleton-bar--xl'],
    className,
  );

  return <div className={componentClassName} {...other}></div>;
};
