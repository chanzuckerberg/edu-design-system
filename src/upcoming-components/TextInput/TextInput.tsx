import clsx from 'clsx';
import React, { ChangeEventHandler } from 'react';
import styles from './TextInput.module.css';

export interface Props {
  /**
   * String that describes a type of file that may be selected by the user
   * https://developer.mozilla.org/en-US/docs/Web/*HTML/Element/input/file#Unique_file_type_specifiers
   */
  accept?: string;
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: string;
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
   * Input pattern
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
}

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({
  accept,
  ariaDescribedBy,
  className,
  disabled,
  id,
  inputMode,
  isError,
  min,
  max,
  maxLength,
  multiple,
  name,
  pattern,
  onChange,
  placeholder,
  readOnly,
  required,
  type,
  title,
  value,
  defaultValue,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['text-input'],
    className,
    disabled && styles['eds-is-disabled'],
    isError && styles['eds-is-error'],
  );

  return (
    <input
      accept={accept}
      aria-describedby={ariaDescribedBy}
      className={componentClassName}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      inputMode={inputMode}
      max={max}
      maxLength={maxLength}
      min={min}
      multiple={multiple}
      name={name}
      onChange={onChange}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      title={title}
      type={type}
      value={value}
      {...other}
    />
  );
};
