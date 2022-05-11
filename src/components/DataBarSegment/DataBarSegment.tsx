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
   * Indicates if this segment should be rounded on the right side.
   * Used for data bars that are 100% complete.
   */
  isRoundRight?: boolean;
  /**
   * Tooltip text to be displayed when the segment is hovered.
   */
  text?: string;
  /**
   * Width that the segment should consume.
   */
  width: string;
  /**
   * Color variant of the individual segment.
   */
  variant?: Variants;
} & React.HTMLAttributes<HTMLElement>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DataBarSegment} from "@chanzuckerberg/eds";
 * ```
 *
 * A segment sub component for the <DataBar>.
 *
 * Example usage:
 *
 * ```tsx
 * <DataBarSegment text="Segment 1" width="40%" />
 * ```
 */
export const DataBarSegment = React.forwardRef(
  (
    {
      className,
      isRoundRight,
      text,
      width,
      variant = 'brand',
      ...other
    }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const componentClassName = clsx(
      styles['data-bar-segment'],
      styles[`data-bar-segment--${variant}`],
      text && styles['data-bar-segment--hoverable'],
      isRoundRight && styles['data-bar-segment--round-right'],
      className,
    );
    const segmentComponent = (
      <div
        className={componentClassName}
        ref={ref}
        style={{ width: `${width}` }}
        {...other}
      />
    );
    return text ? (
      <Tooltip align="bottom" text={text}>
        {segmentComponent}
      </Tooltip>
    ) : (
      segmentComponent
    );
  },
);

DataBarSegment.displayName = 'DataBarSegment'; // Satisfy eslint
