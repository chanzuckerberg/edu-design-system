import clsx from 'clsx';
import type { ChangeEventHandler } from 'react';
import React, { forwardRef } from 'react';
import styles from './Input.module.css';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * HTML id of the helper text used to describe the component
   */
  'aria-describedby'?: string;
  /**
   * Aria-label to provide an accesible name for the text input if no visible label is provided.
   */
  'aria-label'?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the input and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Gives a hint as to the type of data needed for text input
   */
  inputMode?:
    | 'text'
    | 'email'
    | 'url'
    | 'search'
    | 'tel'
    | 'none'
    | 'numeric'
    | 'decimal';
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * Maximum number the input can take. When this number equals the input value, the plus button becomes disabled.
   */
  max?: number;
  /**
   * Minimum number the input can take. When this number equals the input value, the minus button becomes disabled.
   */
  min?: number;
  /**
   * HTML name attribute for the input
   */
  name?: string;
  /**
   * Function that fires when field value has changed
   */
  onChange?: ChangeEventHandler;
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder?: string;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly?: boolean;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Title attribute on input
   */
  title?: string;
  /**
   * HTML type attribute, allowing switching between text, password, and other HTML5 input field types
   */
  type?:
    | 'text'
    | 'password'
    | 'datetime'
    | 'datetime-local'
    | 'date'
    | 'month'
    | 'time'
    | 'week'
    | 'number'
    | 'email'
    | 'url'
    | 'search'
    | 'tel';
  /**
   * The value of the input
   */
  value?: string | number;
  /**
   * The default value of the input
   */
  defaultValue?: string | number;
};

/**
 * Input component for one line of text.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, id, isError, ...other }, ref) => {
    const componentClassName = clsx(
      styles['input'],
      isError && styles['error'],
      className,
    );

    return (
      <input
        className={componentClassName}
        disabled={disabled}
        id={id}
        ref={ref}
        {...other}
      />
    );
  },
);
Input.displayName = 'Input';
