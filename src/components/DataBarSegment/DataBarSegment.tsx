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
  isHoverable?: boolean; // There may be no case for this and may be able to use text presence as hoverable
  /**
   * Indicates if this segment should be rounded on the right side.
   * Used for data bars that are 100% complete.
   */
  isRoundRight?: boolean;
  /**
   * Tooltip text to be displayed when the segment is hovered.
   */
  text?: React.ReactNode;
  /**
   * Width that the segment should consume.
   */
  width: string;
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
  text,
  width,
  variant = 'brand',
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['data-bar-segment'],
    styles[`data-bar-segment--${variant}`],
    isHoverable && styles['data-bar-segment--hoverable'],
    isRoundRight && styles['data-bar-segment--round-right'],
    className,
  );
  // Is there a better way to pass width?
  const segmentComponent = (
    <div
      className={componentClassName}
      style={{ width: `${width}` }}
      {...other}
    ></div>
  );
  return text ? (
    <Tooltip align="bottom" text={text}>
      {segmentComponent}
    </Tooltip>
  ) : (
    segmentComponent
  );
};
