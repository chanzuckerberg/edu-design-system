import { useId } from '@reach/auto-id';
import clsx from 'clsx';
import React from 'react';
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
 * `import {DataBar} from "@chanzuckerberg/eds";`
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
   */
  /* Used to set tabIndex of the segment components. */
  const [focusableElementIndex, setFocusableElementIndex] = React.useState(0);
  /* Collects a list of element refs to set focus. */
  const segmentsRef = React.useRef<Array<HTMLDivElement | null>>([]);
  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      /* Manage tabIndex to allow focus before setting focus. */
      setFocusableElementIndex(index - 1);
      /* Set focus on the next or previous element respective to the arrow key interaction. */
      segmentsRef.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < segmentComponents.length - 1) {
      /*  Manage tabIndex to allow focus before setting focus. */
      setFocusableElementIndex(index + 1);
      /* Set focus on the next or previous element respective to the arrow key interaction. */
      segmentsRef.current[index + 1]?.focus();
    }
  };

  /**
   * Adds a segment component to the segmentComponents array.
   */
  for (
    /* Keeps a running accumulator to prevent adding any more segments if the accumulated value has already met max. */
    let index = 0, accumulator = 0;
    index < segments.length && accumulator < max;
    index++
  ) {
    const segment = segments[index];
    accumulator += segment.value;
    /* Ensures a minimumum width of 5% for the segment. */
    const percentage = Math.max(5, (segment.value / max) * 100);
    segmentComponents.push(
      <DataBarSegment
        aria-label={segment.text}
        key={`segment-${index}`}
        onKeyDown={(e) => handleOnKeyDown(e, index)}
        ref={(el) => (segmentsRef.current[index] = el)}
        role="gridcell"
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
        role="gridcell"
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

  const id = useId();
  const captionId = useId();
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
        role="grid"
        {...other}
      >
        {/* the amount of space the segments take up */}
        <div className={segmentSpaceClassName} role="row">
          {segmentComponents}
        </div>
      </div>
    </div>
  );
};
