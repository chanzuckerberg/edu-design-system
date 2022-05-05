import clsx from 'clsx';
import React, { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './TextareaField.module.css';
import Button from '../../components/Button';
import Icon, { IconName } from '../../components/Icon';
import FieldNote from '../FieldNote';
import Label from '../Label';
import Textarea from '../Textarea';

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
  fieldButtonAriaLabel?: string;
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
   *  Specifies the visible number of lines in a text area
   */
  rows?: number;
  /**
   * Title attribute on input
   */
  title?: string;
  /**
   * Value passed down from higher levels for initial state
   */
  value?: string;
  /**
   * Default value passed down from higher levels for initial state
   */
  defaultValue?: string;
}

export const TextareaField = ({
  ariaDescribedBy,
  className,
  disabled,
  fieldButtonOnClick,
  fieldButtonAriaLabel,
  fieldButtonText,
  fieldNote,
  hideLabel,
  iconName,
  id,
  inputMode,
  isError,
  inverted,
  label,
  maxLength,
  name,
  onChange,
  optionalLabel,
  placeholder,
  readOnly,
  required,
  requiredLabel,
  rows,
  title,
  value,
  defaultValue,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const generatedAriaDescribedById = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedAriaDescribedById
    : undefined;

  const componentClassName = clsx(
    styles['textarea-field'],
    className,
    inverted && styles['textarea-field--inverted'],
    isError && styles['eds-is-error'],
    disabled && styles['eds-is-disabled'],
  );

  return (
    <div className={componentClassName}>
      <Label
        className={styles['textarea-field__label']}
        hideLabel={hideLabel}
        htmlFor={idVar}
        inverted={inverted}
        optionalLabel={optionalLabel}
        required={required}
        requiredLabel={requiredLabel}
        text={label}
      />

      <div className={styles['textarea-field__body']}>
        <Textarea
          aria-invalid={!!isError}
          ariaDescribedBy={ariaDescribedByVar}
          className={styles['textarea-field__textarea']}
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
          rows={rows}
          title={title}
          value={value}
          {...other}
        />
        {fieldButtonText && (
          <Button
            aria-label={fieldButtonAriaLabel}
            className={styles['textarea-field__button']}
            onClick={fieldButtonOnClick}
            size="sm"
            type="button"
            variant="icon"
          >
            {fieldButtonText}
          </Button>
        )}
        {iconName && (
          <Icon
            className={styles['textarea-field__icon']}
            name={iconName}
            purpose="decorative"
          />
        )}
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['textarea-field__note']}
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
