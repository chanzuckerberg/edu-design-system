import clsx from 'clsx';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';
import Text from '../Text';

import styles from './Counter.module.css';

export type CounterProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component. Use this to position the counter
   * within its parent; the counter owns its own color treatment.
   */
  className?: string;
  // Design API
  /**
   * The current count (the numerator), e.g., the characters entered so far or the progress made.
   */
  count: number;
  /**
   * What the count is measured against (the denominator), e.g., the characters allowed. When
   * `count` exceeds this, the count takes on the critical treatment.
   */
  total: number;
  /**
   * How the count is written out. `"fraction"` reads as `"3 / 10"`, for counts of discrete
   * things. `"percentage"` reads as `"30%"`, rounded to a whole number, for a share of a whole;
   * it requires `total` to be greater than zero.
   *
   * **Default is `"fraction"`**.
   */
  variant?: 'fraction' | 'percentage';
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

/**
 * An internal count of a current value against its total, written either as a fraction
 * (`"3 / 10"`) or as a percentage (`"30%"`).
 *
 * This is shared by the components that show a counting construction, so the construction and
 * its error treatment stay consistent: the fields that limit text length (`InputField`,
 * `TextareaField`) use the fraction variant, and `ProgressBar` uses the percentage variant. It
 * is deliberately not exported from the package: it carries no semantics of its own and is only
 * meaningful next to the control it counts.
 *
 * Example usage:
 *
 * ```
 * <Counter
 *   className={styles['input-field__character-counter']}
 *   count={fieldLength}
 *   total={maxLengthShown}
 * />
 * ```
 */
export const Counter = ({
  className,
  count,
  total,
  variant = 'fraction',
  ...other
}: CounterProps) => {
  const componentClassName = clsx(styles['counter'], className);

  // The count is over its limit. In the fraction variant the total stays in the default
  // treatment, since it is the limit being violated rather than the thing in error.
  const isOverTotal = count > total;

  const countClassName = clsx(
    styles['counter__count'],
    isOverTotal && styles['counter__count--invalid'],
  );

  // Whole percentages only. A total that isn't positive has no percentage to report, so it reads
  // as zero rather than as a non-finite value.
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  assertEdsUsage(
    [count < 0, total < 0],
    `Counter values must not be negative (received ${count} / ${total})`,
  );

  // Dividing by a total of zero (or less) yields no usable percentage, so the fallback above is
  // covering for a caller that cannot get the answer it asked for
  assertEdsUsage(
    [variant === 'percentage' && total <= 0],
    `Counter cannot report ${count} as a percentage of ${total}; the percentage variant requires a total greater than zero`,
    'error',
  );

  return (
    <Text as="div" className={componentClassName} preset="body-sm" {...other}>
      {variant === 'fraction' && (
        <>
          <span className={countClassName}>{count}</span>
          {' / '}
          {total}
        </>
      )}
      {variant === 'percentage' && (
        <span className={countClassName}>{percentage}%</span>
      )}
    </Text>
  );
};

Counter.displayName = 'Counter';
