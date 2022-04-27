import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStepper.module.css';
import HorizontalStep from '../HorizontalStep';

export interface Props {
  /**
   * Zero-based index that identifies which index is the active step.
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
}

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
  if (
    process.env.NODE_ENV !== 'production' &&
    !(activeIndex >= 0 && activeIndex <= steps.length)
  ) {
    console.warn(
      'The active index is an invalid index relative to the number of steps.',
    );
  }

  /**
   * Creates a list of <HorizontalStep> components with lines in between.
   * 1) If it is not the first step, add a line to stepComponents.
   * 2) Figure out what variant of step according to the activeIndex.
   * 3) Add step to stepComponents.
   */
  const stepComponents: React.ReactNode[] = [];
  steps.forEach((step, index) => {
    /* 1 */
    if (index > 0)
      stepComponents.push(
        <hr
          className={styles['horizontal-stepper__line']}
          key={`horziontal-stepper__line-${index}`}
        />,
      );

    /* 2 */
    const stepVariant =
      index < activeIndex
        ? 'complete'
        : index === activeIndex
        ? 'active'
        : 'incomplete';

    /* 3 */
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

  return <div className={componentClassName}>{stepComponents}</div>;
};
