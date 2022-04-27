import clsx from 'clsx';
import React from 'react';
import styles from './HorizontalStepper.module.css';
import HorizontalStep from '../HorizontalStep';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const HorizontalStepper = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['horizontal-stepper'], className, {});
  return (
    <div className={componentClassName} {...other}>
      Hello!
    </div>
  );
};
