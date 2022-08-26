import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Band.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Stylistic variations of component.
   * - `brand` yields the primary brand color
   */
  variant?: 'brand';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Band} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const Band = ({ children, className, variant, ...other }: Props) => {
  const componentClassName = clsx(
    styles['band'],
    variant === 'brand' && styles['band--brand'],
    className,
  );

  return (
    <div className={componentClassName} {...other}>
      {children}
    </div>
  );
};
