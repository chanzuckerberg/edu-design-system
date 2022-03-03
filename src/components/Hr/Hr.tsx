import React from 'react';
import clsx from 'clsx';
import styles from './Hr.module.css';

export interface Props {
  /**
   * Stylistic variations:
   * - **brand** yields a branded horizontal rule
   */
  variant?: 'brand';

  /**
   * Size variations:
   * - **lg** yields a thicker horizontal rule
   */
  size?: 'lg';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Hr: React.FC<Props> = ({ className, size, variant, ...other }) => {
  const componentClassName = clsx(styles['hr'], className, {
    [styles['hr--lg']]: size === 'lg',
    [styles['hr--brand']]: variant === 'brand',
  });

  return <hr className={componentClassName} {...other} />;
};
