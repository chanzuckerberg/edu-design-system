import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStepper.module.css';
import HorizontalStep from '../HorizontalStep';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Ordered list of step texts.
   */
  steps: string[];
  /**
   * Identifies which step is the active step.
   */
  activeIndex: number;
}

/**
 * Primary UI component for user interaction
 */
export const HorizontalStepper = ({
  activeIndex,
  className,
  steps,
  ...other
}: Props) => {
  const line = <hr className={styles['horizontal-stepper__line']} />;
  const stepComponents = steps.reduce((previousValue, step, index) => {
    if (index > 0 && index < steps.length) previousValue.push(line);
    const stepVariant =
      index < activeIndex
        ? 'complete'
        : index === activeIndex
        ? 'active'
        : 'incomplete';
    previousValue.push(
      <HorizontalStep
        stepNumber={index === activeIndex ? index + 1 : undefined}
        text={step}
        variant={stepVariant}
      />,
    );
    return previousValue;
  }, []);
  const componentClassName = clsx(styles['horizontal-stepper'], className);
  return (
    <div className={componentClassName} {...other}>
      {stepComponents}
    </div>
  );
};
