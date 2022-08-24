import clsx from 'clsx';
import React from 'react';
import { useUID } from 'react-uid';
import styles from './Radio.module.css';
import { RadioButton, RadioButtonProps } from '../RadioButton/RadioButton';

export type RadioProps = {
  /**
   * HTML id attribute. If not passed, this component
   * will generate an id to use for accessibility.
   */
  id?: string;
  /**
   * Visible text label for the checkbox.
   */
  label?: React.ReactNode;
} & RadioButtonProps;

/**
 * ```ts
 * import Radio from 'v2/core/EDSCandidates/Radio';
 * ```
 * ```ts
 * import {Label, RadioButton} from 'v2/core/EDSCandidates/Radio';
 * ```
 *
 * Radio button and commonly a visual label.
 *
 * @example
 * <Radio label="Option 1" />
 */
export const Radio = ({
  id,
  label,
  className,
  disabled,
  ...radioProps
}: RadioProps) => {
  if (
    process.env.NODE_ENV !== 'production' &&
    !label &&
    !('aria-label' in radioProps)
  ) {
    throw new Error('You must provide a visible label or aria-label');
  }
  const generatedId = useUID();
  const radioId = id || generatedId;

  const componentClassName = clsx(styles['radio'], className);

  const labelClassName = clsx(
    styles['radio__label'],
    disabled && styles['radio__label--disabled'],
  );

  return (
    <div className={componentClassName}>
      <RadioButton disabled={disabled} id={radioId} {...radioProps} />
      <label htmlFor={radioId}>{label}</label>
    </div>
  );
};
