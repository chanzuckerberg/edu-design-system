import clsx from 'clsx';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { EitherInclusive } from '../../util/utility-types';
import Counter from '../Counter';
import FieldLabel from '../FieldLabel';
import Text from '../Text';

import styles from './ProgressBar.module.css';

// React.HTMLAttributes<HTMLProgressElement>
export type ProgressBarProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Determines the usage context of the progress bar.
   * * Labels and value strings are only valid for `context`=`standalone`.
   * * Never use `context`=`embedded` unless as a child of a container.
   *
   * **Default is `"standalone"`**.
   */
  context?: 'embedded' | 'standalone';
  /**
   * Determine whether the labels sit above or to the left of the progress bar
   *
   * **Default is `"vertical"`**.
   */
  labelLayout?: 'horizontal' | 'vertical';
  /**
   * The maximum numeric value allowed for the progress bar.
   *
   * ** Default is `1`**.
   */
  max?: number;
  /**
   * The “filled” portion of the progressBar is determined by the relationship between the minValue, maxValue, and Value. The var fills to a percentage = (value)/(maxValue–minValue).
   *
   * Value used by component is a number between 0 and 1.
   */
  value: number;
  /**
   * Human-readable representation of the progress shown in the bar.
   */
  valueLabel?: string;
} & EitherInclusive<
  {
    /**
     * Visible text label for the component.
     */
    descriptionLabel: string;
  },
  {
    /**
     * Aria-label to provide an accesible name for the text input if no visible label is provided.
     */
    'aria-label': string;
  }
>;

const PROGRESS_BAR_MINIMUM = 0;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ## Usage
 *
 * Show the level of completeness for a given task or process. Indicate the percentage of
 * completion for a discrete number of steps. Not to be confused with the `LoadingIndicator`, which
 * covers waiting rather than measured progress.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standalone | The default. Shows the bar with its labels above or beside it, set by `labelLayout`. | Page-level progress after a user action. |
 * | Embedded | `context="embedded"` drops the labels and lets the bar sit flush with its container's edges. | A bar along the edge of a `Modal` or `Card`. |
 *
 * `ProgressBar` can be the child of a container like `Modal` or `Card`. When used in such a
 * container, `context`=`embedded` should be used to ensure the left and right edges of the
 * progressBar sit flush within the edges of the container.
 *
 * `value` is read against `max` (default `1`) and clamped to that range, so the bar cannot report
 * below zero or above 100%. Supply `valueLabel` to replace the computed percentage with your own
 * text, or pass an empty string to suppress it.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use `ProgressBar` when content can be progressively completed and is triggered by user action (e.g., a click of a button) at the page level.
 * * Use `ProgressBar` to show a measure within a form or other display, where the bar is static and reflects useful details.
 * * Give every bar a name. The type requires either a visible `descriptionLabel` or an `aria-label`, which matters most for `context="embedded"`, where no visible label renders.
 *
 * ### Don'ts
 *
 * * Avoid using `ProgressBar` when you have a wizard-like, paginated experience. Use `VisualPageIndicator` instead.
 * * Avoid `ProgressBar` without labels for user feedback.
 */
export const ProgressBar = ({
  className,
  context = 'standalone',
  descriptionLabel,
  labelLayout = 'vertical',
  max = 1,
  value,
  valueLabel,
  ...other
}: ProgressBarProps) => {
  const componentClassName = clsx(
    styles['progress-bar'],
    labelLayout && styles[`progress-bar--labelLayout-${labelLayout}`],
    className,
  );

  const progressBarId = React.useId();

  // compute display values by checking ranges and normalizing outputs
  const computedValue = Math.max(Math.min(value, max), PROGRESS_BAR_MINIMUM);

  // A caller-supplied `valueLabel` replaces the computed percentage outright, including an empty
  // string used to suppress the value entirely
  const shouldRenderPercentage =
    valueLabel === undefined || valueLabel === null;

  const shouldRenderLabels = !!(
    descriptionLabel ||
    shouldRenderPercentage ||
    valueLabel
  );

  const trackClassName = clsx(
    styles['progress-bar__track'],
    context && styles[`progress-bar__track--context-${context}`],
  );

  assertEdsUsage(
    [
      context === 'embedded' && !!descriptionLabel,
      context === 'embedded' && !!value,
    ],
    'Labels are not allowed when context is embedded',
    'error',
  );

  assertEdsUsage(
    [value > max, value < PROGRESS_BAR_MINIMUM],
    `Value ${value} outside allowed range between ${PROGRESS_BAR_MINIMUM} and ${max}`,
  );

  // TODO: use <progress> component instead, and override appearance?
  return (
    <div className={componentClassName}>
      {context === 'standalone' && shouldRenderLabels && (
        <div className={styles['progress-bar__labels']}>
          {descriptionLabel && (
            <FieldLabel id={progressBarId} size="md">
              {descriptionLabel}
            </FieldLabel>
          )}
          {/*
            Always the percentage variant here: progress is a share of the whole, never a count
            of discrete items. `computedValue` is already clamped to `max`, so the counter's
            over-total treatment cannot trigger.
          */}
          {shouldRenderPercentage && (
            <Counter
              className={styles['progress-bar__valueLabel']}
              count={computedValue}
              total={max}
              variant="percentage"
            />
          )}
          {valueLabel && (
            <Text
              as="span"
              className={styles['progress-bar__valueLabel']}
              preset="body-sm"
            >
              {valueLabel}
            </Text>
          )}
        </div>
      )}
      <div
        aria-labelledby={progressBarId}
        className={trackClassName}
        role="progressbar"
        style={
          {
            '--progress-bar__progress': computedValue / max,
          } as React.CSSProperties
        }
        {...other}
      >
        <div className={styles['progress-bar__content']} />
      </div>
    </div>
  );
};
