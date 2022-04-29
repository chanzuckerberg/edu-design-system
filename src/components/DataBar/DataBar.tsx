import clsx from 'clsx';
import React from 'react';
import styles from './DataBar.module.css';

import DataBarSegment from '../DataBarSegment';
import type { Variants } from '../DataBarSegment';

type DataBarSegmentProps = {
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

// need max days = max

// calculate total days = totalledDays

// Max segmentWidth = segmentValue / Math.max(max, totalledDays) as a percentage

// Min segmentWidth = 5% or something

/**** case: no segments *****/

/**
 * Primary UI component for user interaction
 */
export const DataBar = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  className,
  id,
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
  const totalSegmentWidth = segments.reduce((previousValue, segment) => {
    const value = segment.value < max / 20 ? max / 20 : segment.value;
    return previousValue + value;
  }, 0);

  const segmentComponents = segments.map((segment, index) => {
    // Calculates width as a percentage, ensuring a minimumum width for the segment.
    const percentage = Math.max(
      5,
      (segment.value / Math.max(max, totalSegmentWidth)) * 100,
    );
    // The last segmented should be rounded if the sum of the values equals or exceeds the max.
    const isRoundRight =
      index === segments.length - 1 && totalSegmentValue >= max;
    return (
      <DataBarSegment
        isRoundRight={isRoundRight}
        key={`segment-${index}`}
        percentage={percentage}
        /**** case: variant passed for both bar and segments *****/
        variant={segment.variant || variant}
      />
    );
  });
  if (!segmentComponents.length) {
    segmentComponents.push(
      <DataBarSegment isHoverable={false} percentage={2} variant={variant} />,
    );
  }

  // Leaves space if values do not total to max to visibly show space remaining.
  const shouldLeaveSpace = totalSegmentValue < max;

  const componentClassName = clsx(styles['data-bar'], className);
  const segmentSpaceClassName = clsx(
    styles['data-bar__segment-space'],
    shouldLeaveSpace && styles[`data-bar__segment-space--95`],
  );
  return (
    <div>
      <progress
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        id={id}
        max={max}
        value={totalSegmentValue}
      ></progress>
      {/* total bar */}
      <div className={componentClassName} {...other}>
        {/* bar amount segments take up */}
        <div className={segmentSpaceClassName}>{segmentComponents}</div>
      </div>
    </div>
  );
};
