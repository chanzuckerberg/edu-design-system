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
   * Overrides the default "totalValue / max" in cases where a different caption may be desired.
   */
  caption?: string;
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
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {ProgressBar} from "@chanzuckerberg/eds";`
 *
 * A progress bar component that indicates how much progress has been made on a task.
 */
export const ProgressBar = ({
  caption,
  className,
  label,
  segmentCount,
  segmentValue,
  max,
  ...other
}: Props) => {
  // Creates an array of length segmentCount and fills them with styled divs to represent the segments.
  const segments = segmentCount
    ? Array.from({ length: segmentCount }, (_, index) => {
        // Calculates the segment width to prevent jumping once progress bar is full
        const segmentsPerBar = Math.ceil(max / segmentValue);
        const gapMultiplier = (segmentsPerBar - 1) / segmentsPerBar;
        const segmentWidthBeforeGap = (segmentValue / max) * 100;
        const segmentWidth = `calc(${segmentWidthBeforeGap}% - var(--eds-size-half) * ${gapMultiplier})`;
        return (
          <div
            className={styles['progress-bar__segment']}
            key={'progress-bar__segment-' + index}
            style={{ width: segmentWidth }}
          />
        );
      })
    : undefined;

  const totalSegmentValue = segmentCount * segmentValue;
  const progressBarCaption = caption || totalSegmentValue + '/' + max;

  const labelId = useUID();
  const captionId = useUID();

  return (
    <div className={className} {...other}>
      <div className={styles['progress-bar__label-wrapper']}>
        <label className={styles['progress-bar__label']} id={labelId}>
          {label}
        </label>
        <Text as="span" id={captionId} size="caption">
          {progressBarCaption}
        </Text>
      </div>
      <div
        aria-describedby={captionId}
        aria-labelledby={labelId}
        aria-valuemax={max}
        aria-valuenow={totalSegmentValue}
        className={styles['progress-bar']}
        // INFO: All descendants of role="progressbar" are presentational
        role="progressbar"
      >
        {segments}
      </div>
    </div>
  );
};
