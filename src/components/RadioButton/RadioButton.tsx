import clsx from 'clsx';
import React from 'react';
import styles from './RadioButton.module.css';

export type RadioButtonProps = {
  /**
   * Additional classnames passed in for styling
   */
  className?: string;
  /**
   * Label visible only to screen readers for cases where there is no visible label.
   * Prefer using `label` over this where possible.
   */
  'aria-label'?: string;
  /**
   * Name for the group the button is in.
   * Each button in the group should be given the same name.
   */
  name?: string;
  /**
   * Whether radio button starts checked. Defaults to false.
   */
  checked?: boolean;
  /**
   * Whether radio is disabled.
   */
  disabled?: boolean;
  /**
   * Value assigned to the radio button.
   */
  value?: string;
  /**
   * Callback when radio option is selected.
   * Usually requires value prop to identify which radio button has been selected.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * <RadioButton aria-label="Less preferred, circle part of radio button only" />
 *
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {RadioButton} from "@chanzuckerberg/eds";
 * ```
 *
 * The circle part of the radio button.
 * For flexibility regarding styling and label placement.
 * Should be associated with a <label>, or less preferred, aria-label.
 *
 * Style outer circle with "[data-bootstrap-override='radio'].radio"
 * and inner circle with "[data-bootstrap-override='radio'].radio::before"
 *
 * @example
 * <div>
 *   <RadioButton />
 *   <label>Label to describe the radio button</label>
 *  </div>
 *
 * @example
 */
export const RadioButton = ({ className, ...props }: RadioButtonProps) => {
  return (
    <input
      className={clsx(styles.radio, className)}
      data-bootstrap-override="radio"
      type="radio"
      {...props}
    />
  );
};
