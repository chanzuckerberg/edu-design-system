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
   * Defaults to 100 as a representation of percentage.
   */
  max?: number;
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

// If sum(..segmentValues[])/max > 95% && < 100%, segmentSpaceWidth is 95%. Otherwise 100%

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
  const segmentComponents = segments.map((segment, index) => (
    <DataBarSegment
      key={`segment-${index}`}
      percentage={segment.value}
      /**** case: variant passed for both bar and segments *****/
      variant={segment.variant || variant}
    />
  ));

  const totalSegmentWidth = segments.reduce(
    (previousValue, segment) => previousValue + segment.value,
    0,
  );

  // TODO: make into a multiplier to remove an element? Is that cheaper than calculations?
  // This calculates whether to leave a visible amount of space
  // if the total widths of segments is too big (> 95%) but under 100%.
  const shouldLeaveSpace =
    totalSegmentWidth > max * 0.95 && totalSegmentWidth < max;

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
      ></progress>
      {/* total bar */}
      <div className={componentClassName} {...other}>
        {/* bar amount segments take up */}
        <div className={segmentSpaceClassName}>{segmentComponents}</div>
      </div>
    </div>
  );
};
