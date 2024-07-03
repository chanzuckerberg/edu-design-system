import clsx from 'clsx';
import React from 'react';
import styles from './Hr.module.css';

export type HrProps = {
  /**
   * Stylistic variations for the horizontal rule
   *
   * **Default is `"brand"`**.
   *
   */
  variant?: 'brand';
  /**
   * Size variations for the horizontal rule.
   *
   * **Default is `"lg"`**.
   *
   */
  size?: 'lg';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * `import {Hr} from "@chanzuckerberg/eds";`
 *
 * Horizontal rule component to present a horizontal line separating content.
 */
export const Hr = ({ className, size, variant, ...other }: HrProps) => {
  const componentClassName = clsx(
    styles['hr'],
    size === 'lg' && styles[`hr--${size}`],
    variant === 'brand' && styles[`hr--${variant}`],
    className,
  );

  return <hr className={componentClassName} {...other} />;
};

Hr.displayName = 'Hr';
