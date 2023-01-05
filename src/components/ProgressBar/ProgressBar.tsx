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
   * Overrides the default "currentValue / maxValue" in cases where a different caption may be desired.
   */
  caption?: string;
  /**
   * The current amount of progress that has been made.
   */
  currentValue: number;
  /**
   * Label associated with naming the progress bar.
   */
  label: string;
  /**
   * Max possible value to be represented by the progress bar.
   */
  maxValue: number;
  /**
   * The amount of segments that make up the progress made.
   * Defaults to 1 and recommended max number of segments is 10.
   */
  totalSegments?: number;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {ProgressBar} from "@chanzuckerberg/eds";`
 *
 * Show the progression of a system operation: downloading, uploading, processing, etc., in a visual way
 */
export const ProgressBar = ({
  caption,
  className,
  label,
  currentValue,
  maxValue,
  totalSegments = 1,
  ...other
}: Props) => {
  // Creates list of segment divs depending on the number of totalSegments.
  const segments = Array.from({ length: totalSegments }, (_, index) => (
    <div
      className={styles['progress-bar__segment']}
      key={'progress-bar__segment-' + index}
    />
  ));

  // Creates a div to represent progress made with width currentProgress over maxProgress as a percent.
  // It is the parent to the segments.
  const segmentsWrapper = (
    <div
      className={styles['progress-bar__segments-wrapper']}
      style={{ width: (currentValue / maxValue) * 100 + '%' }}
    >
      {segments}
    </div>
  );

  const progressBarCaption = caption || currentValue + '/' + maxValue;

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
        aria-valuemax={maxValue}
        aria-valuenow={currentValue}
        className={styles['progress-bar']}
        // INFO: All descendants of role="progressbar" are presentational
        role="progressbar"
      >
        {segmentsWrapper}
      </div>
    </div>
  );
};
