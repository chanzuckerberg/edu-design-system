import clsx from 'clsx';
import React from 'react';
import { Icon } from '../Icon/Icon';
import styles from './ModalStepper.module.css';

export interface Props {
  /**
   * Indicates which step is the active step. Must be one or more.
   */
  activeStep: number;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Indicates how many steps to represent. Must be one or more and
   * greater than or equal to activeStep.
   */
  totalSteps: number;
}

/**
 * `import {ModalStepper} from "@chanzuckerberg/eds";`
 *
 * Stepper for the modal to indicate page status.
 */
export const ModalStepper = ({
  activeStep,
  className,
  totalSteps,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['modal-stepper'], className);
  if (process.env.NODE_ENV !== 'production') {
    if (totalSteps < 1) {
      throw new Error('Must have more than one step in totalSteps.');
    }
    if (activeStep < 1) {
      throw new Error('activeStep must be one or more.');
    }
    if (totalSteps < activeStep) {
      throw new Error('activeStep cannot exceed totalSteps');
    }
  }

  const stepIcons = [];
  for (let i = 0; i < totalSteps; i++) {
    const isActivestep = i + 1 === activeStep;
    const name = isActivestep ? 'circle' : 'empty-circle';
    const title = isActivestep ? `Active Step ${i + 1}` : `Step ${i + 1}`;
    stepIcons.push(
      <Icon
        key={i}
        name={name}
        purpose="informative"
        size="0.5rem"
        title={title}
      />,
    );
  }
  return (
    <div className={componentClassName} {...other}>
      {stepIcons}
    </div>
  );
};
