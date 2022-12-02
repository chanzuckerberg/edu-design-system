import clsx from 'clsx';
import React from 'react';
import styles from './ProgressBar.module.css';

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
 * TODO: update this comment with a description of the component.
 */
export const ProgressBar = ({
  className,
  segmentCount,
  segmentValue,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['progress-bar'], className);

  return (
    <div className={componentClassName} {...other}>
      {segments}
    </div>
  );
};
