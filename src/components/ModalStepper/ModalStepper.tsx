import clsx from 'clsx';
import React from 'react';
import styles from './ModalStepper.module.css';
import { Icon } from '../Icon/Icon';

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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {ModalStepper} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const ModalStepper = ({
  activeStep,
  className,
  totalSteps,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['modal-stepper'], className);
  if (
    process.env.NODE_ENV !== 'production' &&
    (totalSteps < 1 || activeStep < 1 || totalSteps < activeStep)
  ) {
    throw new Error('Invalid step numbers.');
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
