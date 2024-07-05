import clsx from 'clsx';
import type { ChangeEventHandler, ReactNode } from 'react';
import React, { forwardRef, useState } from 'react';
import { getMinValue } from '../../util/getMinValue';
import { useId } from '../../util/useId';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';
import type { Status } from '../../util/variant-types';
import Button from '../Button';
import FieldLabel from '../FieldLabel';
import FieldNote from '../FieldNote';
import Icon, { type IconName } from '../Icon';
import Input from '../Input';
import Text from '../Text';
import styles from './InputField.module.css';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Default value passed down from higher levels for initial state
   */
  defaultValue?: string | number;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Gives a hint as to the type of data needed for text input (e.g., to render the correct input keyboard on mobile).
   */
  inputMode?: React.InputHTMLAttributes<HTMLInputElement>['inputMode'];
  /**
   * Node(s) that can be nested within the input field (e.g., secondary and tertiary `Button` components)
   */
  inputWithin?: ReactNode;
  /**
   * Maximum value allowed for the input, if type is 'number'.
   */
  max?: number | string;
  /**
   * Minimum value allowed for the input, if type is 'number'.
   */
  min?: number | string;
  /**
   * HTML name attribute for the input
   */
  name?: string;
  /**
   * Function that runs on change of the input
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly?: boolean;
  /**
   * Title attribute on input
   */
  title?: string;
  /**
   * HTML type attribute, allowing switching between text, password, and other HTML5 input field types
   *
   * **NOTE**: this excludes types that correspond to non-text controls, like `checkbox`, `radio`, etc.
   */
  type?: Extract<
    React.InputHTMLAttributes<HTMLInputElement>['type'],
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
    | 'tel'
  >;
  /**
   * Value passed down from higher levels for initial state
   */
  value?: string | number;
  // Design API
  /**
   * Text under the text input used to provide a description or error message to describe the input.
   */
  fieldNote?: ReactNode;
  /**
   * An icon that prefixes the field input.
   */
  leadingIcon?: IconName;
  /**
   * Placeholder attribute for input. Note: placeholder should be used sparingly
   */
  placeholder?: string;
  /**
   * Behaves similar to `maxLength` but allows the user to continue typing more text.
   * Should not be larger than `maxLength`, if present.
   */
  recommendedMaxLength?: number;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Whether it should show the field hint or not
   *
   * **Default is `"false"`**.
   */
  showHint?: boolean;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
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

type InputFieldType = ForwardedRefComponent<
  HTMLInputElement,
  InputFieldProps
> & {
  Input?: typeof Input;
  Label?: typeof FieldLabel;
};

/**
 * `import {InputField} from "@chanzuckerberg/eds";`
 *
 * An input with optional labels and error messaging built-in.
 *
 * **NOTE**: This component requires `label` or `aria-label` prop
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
      label,
      leadingIcon,
      maxLength,
      onChange,
      readOnly,
      recommendedMaxLength,
      required,
      showHint,
      status = 'default',
      type = 'text',
      ...other
    },
    ref,
  ) => {
    const shouldRenderOverline = !!(label || required);
    const [fieldText, setFieldText] = useState(other.defaultValue);

    // Handling of behavior when field type is password. Show/hide button
    const revealShowHideButton = type === 'password';
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const overlineClassName = clsx(
      styles['input-field__overline'],
      !label && styles['input-field__overline--no-label'],
    );

    const labelClassName = clsx(
      styles['input-field__label'],
      disabled && styles['input-field__label--disabled'],
    );

    const requiredTextClassName = clsx(
      styles['input-field__required-text'],
      disabled && styles['input-field__required-text--disabled'],
    );

    const inputBodyClassName = clsx(
      styles['input-field__body'],
      fieldNote && styles['input-field--has-fieldNote'],
    );

    const fieldLength = fieldText?.toString().length ?? 0;

    const textExceedsMaxLength =
      maxLength !== undefined && fieldLength ? fieldLength > maxLength : false;

    const textExceedsRecommendedLength =
      recommendedMaxLength !== undefined && fieldLength
        ? fieldLength > recommendedMaxLength
        : false;

    const shouldRenderError =
      textExceedsMaxLength || textExceedsRecommendedLength;

    const generatedIdVar = useId();
    const idVar = id || generatedIdVar;

    const generatedAriaDescribedById = useId();
    const ariaDescribedByVar = fieldNote
      ? ariaDescribedBy || generatedAriaDescribedById
      : undefined;

    const fieldLengthCountClassName = clsx(
      (textExceedsMaxLength || textExceedsRecommendedLength) &&
        styles['input-field--invalid-length'],
    );

    // Modify the padding of `Input` to account for trailing/leading icons and trailing buttons
    const inputOverlayClassName = clsx(
      leadingIcon && styles['input-field__input--leading-icon'],
      inputWithin && styles['input-field__input--input-within'],
    );
    // Pick the smallest of the lengths to set as the maximum value allowed
    const maxLengthShown = getMinValue(maxLength, recommendedMaxLength);

    return (
      <div className={className}>
        {shouldRenderOverline && (
          <div className={overlineClassName}>
            {label && (
              <FieldLabel
                className={labelClassName}
                disabled={disabled}
                htmlFor={idVar}
              >
                {label}
              </FieldLabel>
            )}
            {required && showHint && (
              <Text
                aria-disabled={disabled ?? undefined}
                as="span"
                className={requiredTextClassName}
                preset="body-sm"
              >
                (Required)
              </Text>
            )}
            {!required && showHint && (
              <Text
                aria-disabled={disabled ?? undefined}
                as="span"
                className={requiredTextClassName}
                preset="body-sm"
              >
                (Optional)
              </Text>
            )}
            {maxLengthShown && (
              <div className={styles['input-field__character-counter']}>
                <span className={fieldLengthCountClassName}>{fieldLength}</span>{' '}
                / {maxLengthShown}
              </div>
            )}
          </div>
        )}

        <div className={inputBodyClassName}>
          <Input
            aria-describedby={ariaDescribedByVar}
            aria-invalid={!!(status === 'critical')}
            className={inputOverlayClassName}
            disabled={disabled}
            id={idVar}
            maxLength={maxLength}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFieldText(e.target.value);
              onChange && onChange(e);
            }}
            readOnly={readOnly}
            ref={ref}
            required={required}
            status={shouldRenderError ? 'critical' : status}
            type={isPasswordVisible ? 'text' : type}
            {...other}
          />
          {(inputWithin || type === 'password') && (
            <div className={styles['input-field__input-within']}>
              {inputWithin}
              {revealShowHideButton && fieldText && (
                <Button
                  aria-label={`${isPasswordVisible ? 'Hide' : 'Show'} password`}
                  icon={isPasswordVisible ? 'eye-closed' : 'eye-open'}
                  iconLayout="icon-only"
                  onClick={() => {
                    setIsPasswordVisible(!isPasswordVisible);
                  }}
                  rank="tertiary"
                  size="md"
                />
              )}
            </div>
          )}
          {leadingIcon && (
            <div className={styles['input-field__leading-icon']}>
              <Icon name={leadingIcon} purpose="decorative" size="1.5rem" />
            </div>
          )}
        </div>
        {maxLengthShown ? (
          <div className={styles['input-field__footer']}>
            {fieldNote && (
              <FieldNote
                disabled={disabled}
                id={ariaDescribedByVar}
                status={shouldRenderError ? 'critical' : status}
              >
                {fieldNote}
              </FieldNote>
            )}
          </div>
        ) : (
          <>
            {/* TODO: maintained for seamless upgrades; can be removed on next breaking change */}
            {fieldNote && (
              <FieldNote
                disabled={disabled}
                id={ariaDescribedByVar}
                status={shouldRenderError ? 'critical' : status}
              >
                {fieldNote}
              </FieldNote>
            )}
          </>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
InputField.Input = Input;
InputField.Label = FieldLabel;
