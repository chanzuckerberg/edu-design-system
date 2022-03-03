import React, {
  ChangeEventHandler,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { nanoid } from 'nanoid';
import clsx from 'clsx';
import styles from './TextField.module.css';
import { FieldNote } from '../FieldNote/FieldNote';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import { TextInput } from '../TextInput/TextInput';

export interface Props {
  /**
   * Aria-describedby id string
   */
  ariaDescribedBy?: any;
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
  iconName?: string;
  /**
   * HTML id for the component
   */
  id?: any;
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
 * Primary UI component for user interaction
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
  const [idVar, setId] = useState();
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();

  useEffect(() => {
    setId(id || nanoid());
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, []);

  let componentClassName = clsx(styles['text-field'], className, {
    [styles['text-field--inverted']]: inverted === true,
    [styles['eds-is-error']]: isError,
    [styles['eds-is-disabled']]: disabled,
  });

  return (
    <div className={componentClassName}>
      <Label
        className={styles['text-field__label']}
        htmlFor={idVar}
        text={label}
        inverted={inverted}
        hideLabel={hideLabel}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
      />

      <div className={styles['text-field__body']}>
        <TextInput
          className={styles['text-field__input']}
          type={type}
          id={idVar}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          inputMode={inputMode}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          ariaDescribedBy={fieldNote && ariaDescribedByVar}
          aria-invalid={!!isError}
          title={title}
          {...other}
        />
        {inputWithin && (
          <div className={styles['text-field__input-within']}>
            {inputWithin}
          </div>
        )}
        {iconName && (
          <Icon className={styles['text-field__icon']} name={iconName} />
        )}
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['text-field__note']}
          id={ariaDescribedByVar}
          isError={isError}
          inverted={inverted}
        >
          {fieldNote}
        </FieldNote>
      )}
    </div>
  );
};
