import clsx from 'clsx';
import React from 'react';
import { useUID } from 'react-uid';
import styles from './DataBar.module.css';

import DataBarSegment from '../DataBarSegment';
import type { Variants } from '../DataBarSegment';
import Text from '../Text';

type Segment = {
  /**
   * Tooltip text to be displayed when the segment is hovered.
   */
  text: string;
  /**
   * The value of the individual segment that accumulates towards the task goal.
   */
  value: number;
};

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Label associated with naming the data bar.
   */
  label: string;
  /**
   * Max value to be represented by the data bar.
   * Defaults to 100 to act as a percentage bar.
   */
  max: number;
  /**
   * A list of segments to be represented by the data bar.
   */
  segments: Segment[];
  /**
   * Color variant of the data bar. Decorates the segments.
   */
  variant?: Variants;
} & React.HTMLAttributes<HTMLElement>;

/**
 * ```ts
 * import {DataBar} from "@chanzuckerberg/eds";
 * ```
 *
 * A data bar component that represents the relative completion of a task represented by one or more segments.
 *
 * Example usage:
 *
 * ```tsx
 * <DataBar
 *  id="data-bar"
 *  max={100}
 *  segments={[
 *    { value: 25, text: 'Segment 1' },
 *    { value: 10, text: 'Segment 2' },
 *    { value: 15, text: 'Segment 3' },
 *  ]} />
 * ```
 */
export const DataBar = ({
  className,
  label,
  max = 100,
  segments,
  variant = 'brand',
  ...other
}: Props) => {
  /**
   * Calculates the total of the segment values.
   */
  const totalSegmentValue = segments.reduce(
    (previousValue, segment) => previousValue + segment.value,
    0,
  );

  const isFull = totalSegmentValue >= max;

  const segmentComponents: React.ReactElement<typeof DataBarSegment>[] = [];

  /**
   * Manages focus of the progress bar elements and implements left and right arrow key interaction.
   * 1) Used to set tabIndex of the segment components.
   * 2) Collects a list of element refs to set focus.
   * 3) Manage tabIndex to allow focus before setting focus.
   * 4) Set focus on the next or previous element respective to the arrow key interaction.
   */
  /* 1 */
  const [focusableElementIndex, setFocusableElementIndex] = React.useState(0);
  const segmentsRef = React.useRef([]); /* 2 */
  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      setFocusableElementIndex(index - 1); /* 3 */
      segmentsRef.current[index - 1].focus(); /* 4 */
    }
    if (e.key === 'ArrowRight' && index < segmentComponents.length - 1) {
      setFocusableElementIndex(index + 1); /* 3 */
      segmentsRef.current[index + 1].focus(); /* 4 */
    }
  };

  /**
   * Adds a segment component to the segmentComponents array
   * 1) Keeps a running accumulator to prevent adding any more segments if the accumulated value has already met max.
   * 2) Ensures a minimumum width of 5% for the segment.
   * 3) Rounds the right side of the segment if it completes the data bar.
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
        aria-label={segment.text}
        isRoundRight={isRoundRight}
        key={`segment-${index}`}
        onKeyDown={(e) => handleOnKeyDown(e, index)}
        ref={(el) => (segmentsRef.current[index] = el)}
        tabIndex={focusableElementIndex === index ? 0 : -1}
        text={segment.text}
        variant={variant}
        width={`${percentage}%`}
      />,
    );
  }

  /**
   * If bar is empty, adds a miniscule amount of segment as a visual indicator that the component is a data/progress bar and not a pill.
   */
  if (!segmentComponents.length) {
    segmentComponents.push(
      <DataBarSegment
        key="segment-empty"
        variant={variant}
        width={'var(--eds-size-1)'}
      />,
    );
  }

  /**
   * Leaves space if values do not total to max to visibly show space remaining.
   */
  const segmentSpaceClassName = clsx(
    styles['data-bar__segment-space'],
    !isFull && styles[`data-bar__segment-space--incomplete`],
  );

  const id = useUID();
  const captionId = useUID();
  const caption = totalSegmentValue + '/' + max;
  return (
    <div className={className}>
      <div className={styles['data-bar__label-wrapper']}>
        <label className={styles['data-bar__label']} htmlFor={id}>
          {label}
        </label>
        <Text as="span" id={captionId} size="caption">
          {caption}
        </Text>
      </div>
      {/* the grey data bar */}
      <div
        aria-describedby={captionId}
        className={styles['data-bar']}
        id={id}
        {...other}
      >
        {/* the amount of space the segments take up */}
        <div className={segmentSpaceClassName}>{segmentComponents}</div>
      </div>
    </div>
  );
};
