import clsx from 'clsx';
import React from 'react';
import styles from './DataBar.module.css';

import DataBarSegment from '../DataBarSegment';
import type { Variants } from '../DataBarSegment';

type DataBarSegmentProps = {
  /**
   * Tooltip text to be displayed when the segment is hovered.
   */
  text: React.ReactNode;
  /**
   * The value of the individual segment that accumulates towards the task goal.
   */
  value: number;
  /**
   * Color variant of the individual segment.
   */
  variant?: Variants;
};

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Max value to be represented by the data bar.
   */
  max: number;
  /**
   * A list of segments to be represented by the data bar.
   */
  segments: DataBarSegmentProps[];
  /**
   * Color variant of the data bar. Decorates the segments.
   */
  variant?: Variants;
} & React.HTMLAttributes<HTMLElement>;

/**
 * Primary UI component for user interaction
 */
export const DataBar = ({
  className,
  max = 100,
  segments,
  variant = 'brand',
  ...other
}: Props) => {
  /**
   * Warns the developer if the data bar has no accessible name.
   */
  if (
    process.env.NODE_ENV !== 'production' &&
    !other['id'] &&
    !other['aria-label'] &&
    !other['aria-labelledby']
  ) {
    console.warn('You must provide an accessible name for the data bar');
  }

  /**
   * Calculates the total of the segment values.
   */
  const totalSegmentValue = segments.reduce(
    (previousValue, segment) => previousValue + segment.value,
    0,
  );

  const isFull = totalSegmentValue >= max;

  /**
   * Calculates the total width the segments will take up where the width is at least 5% of the max value.
   */
  let totalSegmentWidth = 0;
  for (
    let index = 0;
    index < segments.length && totalSegmentWidth < max;
    index++
  ) {
    const segment = segments[index];
    const value = Math.max(segment.value, max / 20);
    totalSegmentWidth += value;
  }

  const segmentComponents: React.ReactElement<typeof DataBarSegment>[] = [];

  /**
   * Adds a segment component to the segmentComponents array
   * 1) Keeps a running accumulator to prevent adding any more segments if the accumulated value has already met max.
   * 2) Ensures a minimumum width of 5% for the segment.
   * 3) Rounds the right side of the segment if it completes the data bar.
   * 4) If both the DataBar container and segments specify variants, prioritizes the segment variant.
   */
  for (
    let index = 0, accumulator = 0 /* 1 */;
    index < segments.length && accumulator < max;
    index++
  ) {
    const segment = segments[index];
    accumulator += segment.value;

    const percentage = Math.max(5, (segment.value / max) * 100); /* 2 */

    const isRoundRight = accumulator >= max; /* 3 */
    segmentComponents.push(
      <DataBarSegment
        isRoundRight={isRoundRight}
        key={`segment-${index}`}
        text={segment.text}
        variant={segment.variant || variant} /* 4 */
        width={`${percentage}%`}
      />,
    );
  }

  /**
   * Adds a miniscule amount of segment as a visual indicator that the component is a data/progress bar and not a pill.
   */
  if (!segmentComponents.length) {
    segmentComponents.push(
      <DataBarSegment
        isHoverable={false}
        key="segment-empty"
        variant={variant}
        width={'var(--eds-size-1)'}
      />,
    );
  }

  const componentClassName = clsx(styles['data-bar'], className);

  /**
   * Leaves space if values do not total to max to visibly show space remaining.
   */
  const segmentSpaceClassName = clsx(
    styles['data-bar__segment-space'],
    !isFull && styles[`data-bar__segment-space--incomplete`],
  );

  return (
    <div>
      {/* the grey data bar */}
      <div className={componentClassName} {...other}>
        {/* the amount of space the segments take up */}
        <div className={segmentSpaceClassName}>{segmentComponents}</div>
      </div>
    </div>
  );
};
