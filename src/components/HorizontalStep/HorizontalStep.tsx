import { clsx } from 'clsx';
import React from 'react';
import Icon from '../Icon';
import NumberIcon from '../NumberIcon';
import Text from '../Text';
import styles from './HorizontalStep.module.css';

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
  stepNumber,
  text,
  variant,
}: Props) => {
  /**
   * Determines which icon to display.
   */
  const numberIconClassName = clsx(
    styles['horizontal-step__number-icon'],
    variant === 'incomplete' &&
      styles['horizontal-step__number-icon--incomplete'],
  );
  const icon =
    variant === 'complete' ? (
      <Icon
        className={styles['horizontal-step__complete-icon']}
        name="check-circle"
        purpose="informative"
        size="1.5rem"
        title={`completed step ${stepNumber} ${text}`}
      />
    ) : (
      <NumberIcon
        aria-label={`current step ${stepNumber} ${text}`}
        className={numberIconClassName}
        incomplete={variant !== 'active'}
        number={stepNumber}
        numberIconTitle={`incomplete step ${stepNumber} ${text}`}
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
      <Text
        as="span"
        className={styles['horizontal-step__text']}
        size="sm"
        variant="inherit"
        weight="bold"
      >
        {text}
      </Text>
    </li>
  );
};
