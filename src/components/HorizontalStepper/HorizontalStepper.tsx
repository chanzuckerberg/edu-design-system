import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStepper.module.css';
import HorizontalStep from '../HorizontalStep';

export type Props = {
  /**
   * Zero-based index that identifies which index is the active step.
   * If all steps are completed, the activeIndex should match the length of steps. (e.g. activeIndex === steps.length)
   */
  activeIndex: number;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Ordered list of step texts.
   */
  steps: string[];
};

/**
 * ```ts
 * import {HorizontalStepper} from "@chanzuckerberg/eds";
 * ```
 *
 * A stepper component used to display which steps have been completed, the current active step, and possible remaining steps.
 *
 * Example usage:
 *
 * ```tsx
 * <HorizontalStepper activeIndex={0} steps={['Step 1', 'Step 2', 'Step 3']} />
 * ```
 */
export const HorizontalStepper = ({ activeIndex, className, steps }: Props) => {
  /**
   * Warns dev if the activeIndex is invalid
   * 1) Negative conditional to account for 'NaN' values which pass the number type check since "typeof NaN === 'number'"
   */
  if (
    process.env.NODE_ENV !== 'production' &&
    !(activeIndex >= 0 && activeIndex <= steps.length) /* 1 */
  ) {
    console.warn(
      'The active index is an invalid index relative to the number of steps.',
    );
  }

  /**
   * Creates a list of <HorizontalStep> components with lines in between.
   * 1) If it is not the first step, add a line to stepComponents.
   * 2) Hides the decorative line to prevent accessibility issue with it not being <li> in an <ol>.
   * 3) Figure out what variant of step according to the activeIndex.
   * 4) Add step to stepComponents.
   */
  const stepComponents: React.ReactNode[] = [];
  steps.forEach((step, index) => {
    /* 1 */
    if (index > 0)
      stepComponents.push(
        <hr
          aria-hidden /* 2 */
          className={styles['horizontal-stepper__line']}
          key={`horizontal-stepper__line-${index}`}
        />,
      );

    /* 3 */
    const stepVariant =
      index < activeIndex
        ? 'complete'
        : index === activeIndex
        ? 'active'
        : 'incomplete';

    /* 4 */
    stepComponents.push(
      <HorizontalStep
        key={`horizontal-stepper__step-${index}`}
        stepNumber={index + 1}
        text={step}
        variant={stepVariant}
      />,
    );
  });
  const componentClassName = clsx(styles['horizontal-stepper'], className);

  return <ol className={componentClassName}>{stepComponents}</ol>;
};
