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
  const componentClassName = clsx(styles['text-input'], className, {
    [styles['eds-is-disabled']]: disabled,
  });

  return (
    <input
      accept={accept}
      className={componentClassName}
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      min={min}
      max={max}
      maxLength={maxLength}
      inputMode={inputMode}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      pattern={pattern}
      required={required}
      title={title}
      multiple={multiple}
      defaultValue={defaultValue}
      aria-describedby={ariaDescribedBy}
      {...other}
    />
  );
};
