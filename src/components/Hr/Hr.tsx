import clsx from 'clsx';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';

import styles from './Hr.module.css';

export type HrProps = {
  /**
   * Stylistic variations for the horizontal rule
   *
   * **Default is `"brand"`**.
   * @deprecated
   */
  variant?: 'brand';
  /**
   * Size variations for the horizontal rule.
   *
   * **Default is `"lg"`**.
   * @deprecated
   */
  size?: 'lg';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * ## Usage
 *
 * Horizontal rules allow for separating vertically adjacent content in a layout.
 *
 * `Hr` renders one consistent rule with no supported variations. When a separator needs a
 * different weight or color, reach for spacing or a border on the surrounding block instead.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use when trying to separate content in adjacent elements in a page instead of applying a bottom border and padding.
 *
 * ### Don'ts
 *
 * * Never have adjacent `Hr` in a page or layout. Instead, consider using a top and bottom border to a block element.
 */
export const Hr = ({ className, size, variant, ...other }: HrProps) => {
  const componentClassName = clsx(
    styles['hr'],
    size === 'lg' && styles[`hr--${size}`],
    variant === 'brand' && styles[`hr--${variant}`],
    className,
  );

  assertEdsUsage(
    [!!(size || variant)],
    'size/variant props have been deprecated and will be removed from the next major version of EDS',
  );

  return <hr className={componentClassName} {...other} />;
};

Hr.displayName = 'Hr';
