import clsx from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';
import Icon, { type IconName } from '../Icon';
import NumberIcon from '../NumberIcon';
import Text from '../Text';

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

export type StepProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Icon override for component.'
   */
  icon?: Extract<IconName, 'checkmark-encircled-filled'>;
  /**
   * Indicates which number the step is.
   */
  stepNumber: number;
  /**
   * Text that describes the step.
   */
  text: string;
  /**
   * Indicates the state of the step.
   */
  variant: 'complete' | 'active' | 'incomplete';
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
 *
 * @deprecated
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
  const stepComponents: ReactNode[] = [];
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

/**
 * `import {HorizontalStep} from "@chanzuckerberg/eds";`
 *
 * A step sub component for the <HorizontalStepper>.
 * Determines which icon to use and places the text next to it.
 *
 * Example usage:
 *
 * ```tsx
 * <HorizontalStep stepNumber={1} text="Step 1"  variant="incomplete" />
 * ```
 */
export const HorizontalStep = ({
  className,
  icon = 'checkmark-encircled-filled',
  stepNumber,
  text,
  variant,
}: StepProps) => {
  /**
   * Determines which icon to display.
   */
  const numberIconClassName = clsx(
    styles['horizontal-step__number-icon'],
    variant === 'incomplete' &&
      styles['horizontal-step__number-icon--incomplete'],
  );
  const stepIcon =
    variant === 'complete' ? (
      <Icon
        className={styles['horizontal-step__complete-icon']}
        name={icon}
        purpose="informative"
        size="1.75rem"
        title={`completed step ${stepNumber} ${text}`}
      />
    ) : (
      <NumberIcon
        aria-label={`current step ${stepNumber} ${text}`}
        className={numberIconClassName}
        number={stepNumber}
        size="md"
        status={variant === 'active' ? 'default' : 'incomplete'}
      />
    );

  const componentClassName = clsx(
    styles['horizontal-step'],
    styles[`horizontal-step--${variant}`],
    className,
  );
  return (
    <li className={componentClassName}>
      {stepIcon}
      <Text
        as="span"
        className={styles['horizontal-step__text']}
        preset="body-sm"
      >
        {text}
      </Text>
    </li>
  );
};

HorizontalStepper.displayName = 'HorizontalStepper';
HorizontalStep.displayName = 'HorizontalStepper.Step';

HorizontalStepper.Step = HorizontalStep;
