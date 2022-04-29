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
   * Indicates whether segments should be hoverable.
   */
  isHoverable?: boolean;
  /**
   * Indicates if this segment should be rounded on the right side.
   * Used for data bars that are 100% complete.
   */
  isRoundRight?: boolean;
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
  isHoverable = true,
  isRoundRight,
  percentage,
  variant = 'brand',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['data-bar-segment'],
    styles[`data-bar-segment--${variant}`],
    isHoverable && styles['data-bar-segment--hoverable'],
    isRoundRight && styles['data-bar-segment--round-right'],
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
