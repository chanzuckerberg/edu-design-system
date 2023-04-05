import clsx from 'clsx';
import React from 'react';
import Tooltip from '../Tooltip';
import styles from './DataBarSegment.module.css';

export type Variants = 'brand' | 'success';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
 * `import {DataBarSegment} from "@chanzuckerberg/eds";`
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
    { className, text, width, variant = 'brand', ...other }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const componentClassName = clsx(
      styles['data-bar-segment'],
      styles[`data-bar-segment--${variant}`],
      text && styles['data-bar-segment--hoverable'],
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
