import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';
import styles from './Textarea.module.css';

export interface Props {
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

export const Textarea: React.FC<Props> = ({
  ariaDescribedBy,
  className,
  disabled,
  id,
  inputMode,
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
}) => {
  const componentClassName = clsx(styles['textarea'], className, {});

  return (
    <textarea
      className={componentClassName}
      id={id}
      name={name}
      rows={rows}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      maxLength={maxLength}
      inputMode={inputMode}
      disabled={disabled}
      readOnly={readOnly}
      onChange={onChange}
      required={required}
      title={title}
      aria-describedby={ariaDescribedBy}
      {...other}
    />
  );
};
