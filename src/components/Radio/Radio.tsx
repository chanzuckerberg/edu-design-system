import clsx from 'clsx';
import React from 'react';
import { useUID } from 'react-uid';
import styles from './Radio.module.css';
import RadioInput, { RadioInputProps } from '../RadioInput';
import RadioLabel, { RadioLabelProps } from '../RadioLabel';

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
 * ```ts
 * import {Radio} from "@chanzuckerberg/eds";
 * ```
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
  const generatedId = useUID();
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
