import clsx from 'clsx';
import React, { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './TextField.module.css';
import FieldNote from '../../upcoming-components/FieldNote';
import Label from '../../upcoming-components/Label';
import TextInput from '../../upcoming-components/TextInput';
import Icon, { IconName } from '../Icon';

export interface Props {
  /**
   * Aria-describedby id string
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
   * FieldNote
   * Used as helper text or error message
   */
  fieldNote?: string | ReactNode;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * Screen reader text used for the button alongside the input field (i.e. show/hide password button)
   */
  fieldButtonScreenReaderText?: string;
  /**
   * Text used for the button alongside the input field (i.e. show/hide password button)
   */
  fieldButtonText?: string;
  /**
   * Function passed down from higher level component to trigger on click function of text field button
   */
  fieldButtonOnClick?: MouseEventHandler;
  /**
   * Name of SVG icon (i.e. chevron-down, minus, warning)
   */
  iconName?: IconName;
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
   * Node(s) that can be nested within the text field
   */
  inputWithin?: ReactNode;
  /**
   * Inverted variant for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Max number of characters for the text input
   */
  maxLength?: number;
  /**
   * Minimum value allowed for the input, if type is 'number'. When the input value matches this minimum, the minus button becomes disabled.
   */
  min?: number;
  /**
   * HTML name attribute for the input
   */
  name?: string;
  /**
   * Function that runs on change of the input
   */
  onChange?: ChangeEventHandler;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
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
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
  /**
   * Title attribute on input
   */
  title?: string;
  /**
   * HTML type attribute, allowing switching between text, password, and other HTML5 input field types
   */
  type:
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
   * Value passed down from higher levels for initial state
   */
  value?: string | number;
  /**
   * Default value passed down from higher levels for initial state
   */
  defaultValue?: string | number;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {TextField} from "@chanzuckerberg/eds";
 */
export const TextField = ({
  className,
  type = 'text',
  id,
  required,
  label,
  disabled,
  fieldNote,
  fieldButtonText,
  fieldButtonScreenReaderText,
  fieldButtonOnClick,
  inputWithin,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  readOnly,
  iconName,
  inverted,
  hideLabel,
  maxLength,
  inputMode,
  ariaDescribedBy,
  isError,
  optionalLabel,
  requiredLabel,
  title,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const generatedAriaDescribedById = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedAriaDescribedById
    : undefined;

  const componentClassName = clsx(
    styles['text-field'],
    className,
    inverted && styles['text-field--inverted'],
    isError && styles['eds-is-error'],
    disabled && styles['eds-is-disabled'],
  );

  return (
    <div className={componentClassName}>
      <Label
        className={styles['text-field__label']}
        hideLabel={hideLabel}
        htmlFor={idVar}
        inverted={inverted}
        optionalLabel={optionalLabel}
        required={required}
        requiredLabel={requiredLabel}
        text={label}
      />

      <div className={styles['text-field__body']}>
        <TextInput
          aria-invalid={!!isError}
          ariaDescribedBy={ariaDescribedByVar}
          className={styles['text-field__input']}
          defaultValue={defaultValue}
          disabled={disabled}
          id={idVar}
          inputMode={inputMode}
          isError={isError}
          maxLength={maxLength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          title={title}
          type={type}
          value={value}
          {...other}
        />
        {inputWithin && (
          <div className={styles['text-field__input-within']}>
            {inputWithin}
          </div>
        )}
        {iconName && (
          <Icon
            className={styles['text-field__icon']}
            name={iconName}
            purpose="decorative"
          />
        )}
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['text-field__note']}
          id={ariaDescribedByVar}
          inverted={inverted}
          isError={isError}
        >
          {fieldNote}
        </FieldNote>
      )}
    </div>
  );
};
