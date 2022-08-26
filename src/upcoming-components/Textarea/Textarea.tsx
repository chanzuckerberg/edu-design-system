import clsx from 'clsx';
import React, { ChangeEventHandler } from 'react';
import styles from './Textarea.module.css';

export interface Props {
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
   * Gives a hint as to the type of data needed for textarea
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
   * Max number of characters for the text input
   */
  maxLength?: number;
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
   *  Specifies the visible number of lines in a text area
   */
  rows?: number;
  /**
   * Title attribute on input
   */
  title?: string;
  /**
   * The value of the textarea
   */
  value?: string;
  /**
   * The default value of the textarea
   */
  defaultValue?: string;
}

export const Textarea = ({
  'aria-describedby': ariaDescribedBy,
  className,
  disabled,
  id,
  inputMode,
  isError,
  maxLength,
  name,
  onChange,
  placeholder,
  readOnly,
  required,
  rows,
  title,
  value,
  defaultValue,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['textarea'],
    isError && styles['error'],
    className,
  );

  return (
    <textarea
      aria-describedby={ariaDescribedBy}
      className={componentClassName}
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      inputMode={inputMode}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      rows={rows}
      title={title}
      value={value}
      {...other}
    />
  );
};
