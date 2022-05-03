import clsx from 'clsx';
import React from 'react';
import styles from './DataBar.module.css';

import DataBarSegment from '../DataBarSegment';
import type { Variants } from '../DataBarSegment';

type DataBarSegmentProps = {
  text: React.ReactNode;
  value: number;
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
  if (
    process.env.NODE_ENV !== 'production' &&
    !other['id'] &&
    !other['aria-label'] &&
    !other['aria-labelledby']
  ) {
    console.warn('You must provide an accessible name for the data bar');
  }

  // This calculates the total of the segment values.
  const totalSegmentValue = segments.reduce(
    (previousValue, segment) => previousValue + segment.value,
    0,
  );

  // This calculates the total space as a percentage that the segments will take up.
  let totalSegmentWidth = 0;
  for (
    let index = 0;
    index < segments.length && totalSegmentWidth < max;
    index++
  ) {
    const segment = segments[index];
    const value = segment.value < max / 20 ? max / 20 : segment.value;
    totalSegmentWidth += value;
  }

  const isFull = totalSegmentValue >= max;

  const segmentComponents: React.ReactElement<typeof DataBarSegment>[] = [];
  for (
    let index = 0, accumulator = 0;
    index < segments.length && accumulator < max;
    index++
  ) {
    const segment = segments[index];
    accumulator += segment.value;
    // Calculates width as a percentage, ensuring a minimumum width for the segment.
    const percentage = Math.max(
      5,
      (segment.value / Math.max(max, totalSegmentWidth)) * 100,
    );
    // The last segmented should be rounded if the sum of the values equals or exceeds the max.
    const isRoundRight = accumulator >= max;
    segmentComponents.push(
      <DataBarSegment
        isRoundRight={isRoundRight}
        key={`segment-${index}`}
        text={segment.text}
        variant={segment.variant || variant}
        /**** case: variant passed for both bar and segments *****/
        width={`${percentage}%`}
      />,
    );
  }

  // Adds small segment in the empty state
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
  /* 1) Leaves space if values do not total to max to visibly show space remaining. */
  const segmentSpaceClassName = clsx(
    styles['data-bar__segment-space'],
    !isFull && styles[`data-bar__segment-space--incomplete`] /* 1 */,
  );

  return (
    <div>
      {/* <progress
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        id={id}
        max={max}
        value={totalSegmentValue}
      ></progress> */}
      {/* total bar */}
      <div className={componentClassName} {...other}>
        {/* bar amount segments take up */}
        <div className={segmentSpaceClassName}>{segmentComponents}</div>
      </div>
    </div>
  );
};
