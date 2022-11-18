import clsx from 'clsx';
import type { ChangeEventHandler } from 'react';
import React, { forwardRef } from 'react';
import styles from './InputField.module.css';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * String that describes a type of file that may be selected by the user
   * https://developer.mozilla.org/en-US/docs/Web/*HTML/Element/input/file#Unique_file_type_specifiers
   */
  accept?: string;
  /**
   * HTML id of the helper text used to describe the component
   */
  'aria-describedby'?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
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
   * Max number of characters for the text input
   */
  maxLength?: number;
  /**
   * Minimum number the input can take. When this number equals the input value, the minus button becomes disabled.
   */
  min?: number;
  /**
   * Multiple is a boolean to allow multiple files to be uploaded
   */
  multiple?: boolean;
  /**
   * HTML name attribute for the input
   */
  name?: string;
  /**
   * Function that fires when field value has changed
   */
  onChange?: ChangeEventHandler;
  /**
   * Defines a regular expression that the input's value must match in order for the value to pass constraint validation.
   */
  pattern?: string;
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
    | 'file'
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {InputField} from "@chanzuckerberg/eds";`
 *
 * Text input component for one line of text. For multiple lines, consider the Textarea component.
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, disabled, id, isError, ...other }, ref) => {
    const componentClassName = clsx(
      styles['input-field'],
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
InputField.displayName = 'InputField';
