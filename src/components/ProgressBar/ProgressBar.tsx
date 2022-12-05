import React from 'react';
import { useUID } from 'react-uid';
import styles from './ProgressBar.module.css';
import Text from '../Text';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Label associated with naming the progress bar.
   */
  label: string;
  /**
   * Max value to be represented by the progress bar.
   */
  max: number;
  /**
   * The amount of segments to be represented by the progress bar.
   * Recommended max number of segments is 10.
   */
  segmentCount: number;
  /**
   * The value that each segment represents.
   */
  segmentValue: number;
  /**
   * An optional unit of measurement to describe the progress.
   */
  unit?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {ProgressBar} from "@chanzuckerberg/eds";`
 *
 * A progress bar component that indicates how much progress has been made on a task.
 */
export const ProgressBar = ({
  className,
  label,
  segmentCount,
  segmentValue,
  max,
  unit,
  ...other
}: Props) => {
  if (process.env.NODE_ENV !== 'production' && segmentCount > 10) {
    console.warn('Progress bar segment count should be capped at 10');
  }

  // Creates an array of length segmentCount and fills them with styled divs to represent the segments.
  const segments = segmentCount
    ? Array.from({ length: segmentCount }, (_, index) => (
        <div
          className={styles['progress-bar__segment']}
          key={'progress-bar__segment-' + index}
          style={{ width: `${(segmentValue / max) * 100}%` }}
        />
      ))
    : undefined;

  const totalSegmentValue = segmentCount * segmentValue;
  let caption: string = totalSegmentValue + '/' + max;
  if (unit) {
    caption += ' ' + unit;
  }

  const labelId = useUID();
  const captionId = useUID();

  return (
    <div className={className} {...other}>
      <div className={styles['progress-bar__label-wrapper']}>
        <label className={styles['progress-bar__label']} id={labelId}>
          {label}
        </label>
        <Text as="span" id={captionId} size="caption">
          {caption}
        </Text>
      </div>
      <div
        aria-describedby={captionId}
        aria-labelledby={labelId}
        aria-valuemax={max}
        aria-valuenow={totalSegmentValue}
        aria-valuetext={unit}
        className={styles['progress-bar']}
        // INFO: All descendants of role="progressbar" are presentational
        role="progressbar"
      >
        {segments}
      </div>
    </div>
  );
};
