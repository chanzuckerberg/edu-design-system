import clsx from 'clsx';
import type { ChangeEventHandler, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { useId } from '../../util/useId';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';
import FieldNote from '../FieldNote';
import Input from '../Input';
import Label from '../Label';
import Text from '../Text';
import styles from './InputField.module.css';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
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
   * Node(s) that can be nested within the input field
   */
  inputWithin?: ReactNode;
  /**
   * Error state of the form field
   */
  isError?: boolean;
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
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
} & EitherInclusive<
    {
      /**
       * Visible text label for the component.
       */
      label: string;
    },
    {
      /**
       * Aria-label to provide an accesible name for the text input if no visible label is provided.
       */
      'aria-label': string;
    }
  >;

type InputFieldType = ForwardedRefComponent<HTMLInputElement, Props> & {
  Input?: typeof Input;
};

/**
 * `import {InputField} from "@chanzuckerberg/eds";`
 *
 * An input with optional labels and error messaging built-in.
 *
 * NOTE: This component requires `label` or `aria-label` prop
 */
export const InputField: InputFieldType = forwardRef(
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
    const shouldRenderOverline = !!(label || required);
    const overlineClassName = clsx(
      styles['input-field__overline'],
      !label && styles['input-field__overline--no-label'],
      disabled && styles['input-field__overline--disabled'],
    );

    const inputBodyClassName = clsx(
      styles['input-field__body'],
      fieldNote && styles['input-field--has-fieldNote'],
    );

    const generatedIdVar = useId();
    const idVar = id || generatedIdVar;

    const generatedAriaDescribedById = useId();
    const ariaDescribedByVar = fieldNote
      ? ariaDescribedBy || generatedAriaDescribedById
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

        <div className={inputBodyClassName}>
          <Input
            aria-describedby={ariaDescribedByVar}
            aria-invalid={!!isError}
            disabled={disabled}
            id={idVar}
            isError={isError}
            ref={ref}
            required={required}
            type={type}
            {...other}
          />
          {inputWithin && (
            <div className={styles['input-field__input-within']}>
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
InputField.displayName = 'InputField';
InputField.Input = Input;
