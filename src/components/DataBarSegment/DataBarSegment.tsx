import clsx from 'clsx';
import React from 'react';
import styles from './DataBarSegment.module.css';
import Tooltip from '../Tooltip';

export type Variants = 'brand' | 'success';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Percent relative to the data bar to be represented by the segment.
   */
  percentage: number;
  /**
   * Color variant of the individual segment.
   */
  variant: Variants;
};

/**
 * Primary UI component for user interaction
 */
export const DataBarSegment = ({
  className,
  percentage,
  variant = 'brand',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['data-bar-segment'],
    styles[`data-bar-segment--${variant}`],
    className,
    {},
  );
  // Is there a better way to pass width?
  return (
    <div
      className={componentClassName}
      style={{ width: `${percentage}%` }}
      {...other}
    ></div>
  );
};
