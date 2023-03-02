import clsx from 'clsx';
import React, { useId } from 'react';
import type { RadioInputProps } from '../RadioInput';
import RadioInput from '../RadioInput';
import type { RadioLabelProps } from '../RadioLabel';
import RadioLabel from '../RadioLabel';
import styles from './Radio.module.css';

export type RadioProps = RadioInputProps & {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Visible text label for the radio.
   */
  label?: React.ReactNode;
  /**
   * Size of the radio label.
   */
  size?: RadioLabelProps['size'];
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Radio} from "@chanzuckerberg/eds";`
 *
 * This component provides a radio component and a label for form selection.
 */
export const Radio = ({
  className,
  disabled,
  label,
  id,
  size,
  ...other
}: RadioProps) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !label &&
    !('aria-label' in other)
  ) {
    throw new Error('You must provide a visible label or aria-label');
  }
  const generatedId = useId();
  const radioId = id || generatedId;

  const componentClassName = clsx(styles['radio'], className);

  return (
    <div className={componentClassName}>
      <RadioInput disabled={disabled} id={radioId} {...other} />
      <RadioLabel disabled={disabled} htmlFor={radioId} size={size}>
        {label}
      </RadioLabel>
    </div>
  );
};

Radio.Input = RadioInput;
Radio.Label = RadioLabel;
