import clsx from 'clsx';
import React from 'react';

import { assertEdsUsage } from '../../util/logging';
import Text from '../Text';

import styles from './CharacterCounter.module.css';

export type CharacterCounterProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component. Use this to position the counter
   * within its parent; the counter owns its own color treatment.
   */
  className?: string;
  // Design API
  /**
   * The number of characters entered so far (the numerator).
   */
  count: number;
  /**
   * The number of characters allowed (the denominator). When `count` exceeds this, the count
   * takes on the critical treatment.
   */
  total: number;
  /**
   * How the count is written out. `"fraction"` reads as `"3 / 10"`; `"percentage"` reads as
   * `"30%"`, rounded to a whole number to match `ProgressBar`. The percentage variant requires
   * `total` to be greater than zero.
   *
   * **Default is `"fraction"`**.
   */
  variant?: 'fraction' | 'percentage';
} & React.HTMLAttributes<HTMLElement>;

/**
 * An internal count of entered characters against the total allowed, written either as a
 * fraction (`"3 / 10"`) or as a percentage (`"30%"`).
 *
 * This is shared by the field components that limit text length (e.g., `InputField`,
 * `TextareaField`) so the counting construction and its error treatment stay consistent. It is
 * deliberately not exported from the package: it carries no field semantics of its own and is
 * only meaningful next to the control it counts.
 *
 * Example usage:
 *
 * ```
 * <CharacterCounter
 *   className={styles['input-field__character-counter']}
 *   count={fieldLength}
 *   total={maxLengthShown}
 * />
 * ```
 */
export const CharacterCounter = ({
  className,
  count,
  total,
  variant = 'fraction',
  ...other
}: CharacterCounterProps) => {
  const componentClassName = clsx(styles['character-counter'], className);

  // The count is over its limit. In the fraction variant the total stays in the default
  // treatment, since it is the limit being violated rather than the thing in error.
  const isOverTotal = count > total;

  const countClassName = clsx(
    styles['character-counter__count'],
    isOverTotal && styles['character-counter__count--invalid'],
  );

  // Whole percentages only, matching how `ProgressBar` reports progress. A total that isn't
  // positive has no percentage to report, so it reads as zero rather than as a non-finite value.
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;

  assertEdsUsage(
    [count < 0, total < 0],
    `Character counter values must not be negative (received ${count} / ${total})`,
  );

  // Dividing by a total of zero (or less) yields no usable percentage, so the fallback above is
  // covering for a caller that cannot get the answer it asked for
  assertEdsUsage(
    [variant === 'percentage' && total <= 0],
    `Character counter cannot report ${count} as a percentage of ${total}; the percentage variant requires a total greater than zero`,
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

CharacterCounter.displayName = 'CharacterCounter';
