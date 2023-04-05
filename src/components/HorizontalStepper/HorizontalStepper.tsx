import clsx from 'clsx';
import React from 'react';
import HorizontalStep from '../HorizontalStep';
import styles from './HorizontalStepper.module.css';

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
   * CSS class names that can be appended to the separating horizontal lines.
   */
  linesClassName?: string;
  /**
   * Ordered list of step texts.
   */
  steps: string[];
};

/**
 * `import {HorizontalStepper} from "@chanzuckerberg/eds";`
 *
 * A stepper component used to display which steps have been completed, the current active step, and possible remaining steps.
 *
 * Example usage:
 *
 * ```tsx
 * <HorizontalStepper activeIndex={0} steps={['Step 1', 'Step 2', 'Step 3']} />
 * ```
 */
export const HorizontalStepper = ({
  activeIndex,
  className,
  linesClassName,
  steps,
}: Props) => {
  /**
   * Warns dev if the activeIndex is invalid
   */
  if (
    process.env.NODE_ENV !== 'production' &&
    /**
     * Negative conditional to account for 'NaN' values which pass the number type check since "typeof NaN === 'number'"
     */
    !(activeIndex >= 0 && activeIndex <= steps.length)
  ) {
    console.warn(
      'The active index is an invalid index relative to the number of steps.',
    );
  }

  /**
   * Creates a list of <HorizontalStep> components with lines in between.
   */
  const stepComponents: React.ReactNode[] = [];
  steps.forEach((step, index) => {
    /**
     * If it is not the first step, add a line to stepComponents.
     */
    if (index > 0) {
      const stepperLinesClassName = clsx(
        styles['horizontal-stepper__line'],
        linesClassName,
      );
      stepComponents.push(
        <hr
          aria-hidden
          /**
           * Hides the decorative line to prevent accessibility issue with it not being <li> in an <ol>.
           */
          className={stepperLinesClassName}
          // eslint-disable-next-line react/no-array-index-key
          key={`horizontal-stepper__line-${index}`}
        />,
      );
    }

    /**
     * Figure out what variant of step according to the activeIndex.
     */
    const stepVariant =
      index < activeIndex
        ? 'complete'
        : index === activeIndex
        ? 'active'
        : 'incomplete';

    /**
     * Add step to stepComponents.
     */
    stepComponents.push(
      <HorizontalStep
        // eslint-disable-next-line react/no-array-index-key
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
