import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStep.module.css';
import Icon from '../Icon';
import Text from '../Text';

export interface Props {
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
}

/**
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
        purpose="decorative"
        size="1.5rem"
      />
    ) : variant === 'active' ? (
      <Text
        className={styles['horizontal-step__number']}
        size="sm"
        variant="inherit"
      >
        {stepNumber}
      </Text>
    ) : (
      <Icon
        className={styles['horizontal-step__incomplete-icon']}
        name="circle"
        purpose="decorative"
        size="0.5rem"
      />
    );

  const componentClassName = clsx(
    styles['horizontal-step'],
    styles[`horizontal-step--${variant}`],
    className,
  );
  return (
    <div className={componentClassName}>
      {icon}
      <Text as="span" size="sm" variant="inherit" weight="bold">
        {text}
      </Text>
    </div>
  );
};
