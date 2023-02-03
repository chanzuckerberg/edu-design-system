import { useId } from '@reach/auto-id';
import clsx from 'clsx';
import type { ChangeEventHandler, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import styles from './TextField.module.css';
import FieldNote from '../FieldNote';
import Input from '../Input';
import Label from '../Label';
import Text from '../Text';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Aria-describedby id string
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
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Text under the text input used to provide a description or error message to describe the input.
   */
  fieldNote?: ReactNode;
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
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Maximum value allowed for the input, if type is 'number'. When the input value matches this maximum, the plus button becomes disabled.
   */
  max?: number;
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
   * Value passed down from higher levels for initial state
   */
  value?: string | number;
  /**
   * Default value passed down from higher levels for initial state
   */
  defaultValue?: string | number;
};

/**
 * `import {TextField} from "@chanzuckerberg/eds";`
 *
 * A text input with optional labels and error messaging built-in.
 */
export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      'aria-describedby': ariaDescribedBy,
      className,
      disabled,
      fieldNote,
      id,
      inputWithin,
      isError,
      label,
      required,
      type = 'text',
      ...other
    },
    ref,
  ) => {
    if (
      process.env.NODE_ENV !== 'production' &&
      !label &&
      !other['aria-label']
    ) {
      throw new Error('You must provide a visible label or aria-label');
    }

    const shouldRenderOverline = !!(label || required);
    const overlineClassName = clsx(
      styles['text-field__overline'],
      !label && styles['text-field__overline--no-label'],
      disabled && styles['text-field__overline--disabled'],
    );

    const generatedIdVar = useId(id);
    const idVar = String(generatedIdVar);

    const generatedAriaDescribedById = useId(ariaDescribedBy);
    const ariaDescribedByVar = fieldNote
      ? ariaDescribedBy || String(generatedAriaDescribedById)
      : undefined;

    return (
      <div className={className}>
        {shouldRenderOverline && (
          <div className={overlineClassName}>
            {label && <Label htmlFor={idVar} text={label} />}
            {required && (
              <Text as="p" size="sm">
                Required
              </Text>
            )}
          </div>
        )}

        <div className={styles['text-field__body']}>
          <Input
            aria-describedby={ariaDescribedByVar}
            aria-invalid={!!isError}
            data-bootstrap-override="inputfield"
            disabled={disabled}
            id={idVar}
            isError={isError}
            ref={ref}
            required={required}
            type={type}
            {...other}
          />
          {inputWithin && (
            <div className={styles['text-field__input-within']}>
              {inputWithin}
            </div>
          )}
        </div>
        {fieldNote && (
          <FieldNote
            disabled={disabled}
            id={ariaDescribedByVar}
            isError={isError}
          >
            {fieldNote}
          </FieldNote>
        )}
      </div>
    );
  },
);
TextField.displayName = 'TextField';
