import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStep.module.css';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import Text from '../Text';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {HorizontalStep} from "@chanzuckerberg/eds";
 * ```
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
  stepNumber,
  text,
  variant,
}: Props) => {
  /**
   * Determines which icon to display.
   */
  const icon =
    variant === 'complete' ? (
      <Icon
        className={styles['horizontal-step__complete-icon']}
        name="check-circle"
        purpose="informative"
        size="1.5rem"
        title={`completed step ${stepNumber} ${text}`}
      />
    ) : variant === 'active' ? (
      <NumberIcon
        aria-label={`current step ${stepNumber} ${text}`}
        number={stepNumber}
      />
    ) : (
      <Icon
        className={styles['horizontal-step__incomplete-icon']}
        name="circle"
        purpose="informative"
        size="0.5rem"
        title={`incomplete step ${stepNumber} ${text}`}
      />
    );

  const componentClassName = clsx(
    styles['horizontal-step'],
    styles[`horizontal-step--${variant}`],
    className,
  );
  return (
    <li className={componentClassName}>
      {icon}
      <Text as="span" size="sm" variant="inherit" weight="bold">
        {text}
      </Text>
    </li>
  );
};
