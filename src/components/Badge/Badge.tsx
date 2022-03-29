import clsx from 'clsx';
import React from 'react';
import styles from './Badge.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Badge label text
   */
  text?: string;
  /**
   * Stylistic variations of the badge
   * - **warning** results in a badge with warning state
   * - **error** results in a badge with error state
   * - **success** results in a badge with success state
   * - **plum** results in a badge with plum state
   * - **teal** results in a badge with teal state
   * - **dark-gray** results in a sparkline text bubble with normal results
   */
  variant: 'warning' | 'error' | 'success';
}

/**
 * Primary UI component for user interaction
 */
export const Badge = ({ className, text, variant, ...other }: Props) => {
  const componentClassName = clsx(styles['badge'], className, {
    [styles['badge--success']]: variant === 'success',
    [styles['badge--warning']]: variant === 'warning',
    [styles['badge--success']]: variant === 'error',
  });
  return (
    <div className={componentClassName} {...other}>
      <span className={styles['badge__text']}>{text}</span>
    </div>
  );
};
