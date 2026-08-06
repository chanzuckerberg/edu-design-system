import clsx from 'clsx';
import type { ChangeEventHandler, ReactNode } from 'react';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { getMinValue } from '../../util/getMinValue';
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
   *
   * The space reserved for this content is measured from what you pass in, so the content is free
   * to be as wide as it needs. To reserve a fixed amount instead, set
   * `--input-field__input-within-width` via `style`.
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
   * CSS properties defined for the input element. Includes the component's CSS Custom Properties:
   *
   * - `--input-field__input-within-width`
   */
  style?: InputFieldCSSProperties;
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
   * Text under the textarea used to provide validation hints or error message to describe the input error.
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
   * Indicates that field is required for form to be successfully submitted. Consumers must implement handling for error states using `status="critical"`
   */
  required?: boolean;
  /**
   * Whether it should show the field hint or not
   *
   * **Default is `"false"`**.
   */
  showHint?: boolean;
  /**
   * Status for the field state. Use `"critical"` for an error state.
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
  /**
   * Add additional descriptive text for the field name.
   */
  subLabel?: ReactNode;
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

export interface InputFieldCSSProperties extends React.CSSProperties {
  /**
   * The space reserved at the trailing edge of the input for `inputWithin` content. The component
   * measures this from the rendered content, so it only needs setting to override that measurement
   * with a fixed size.
   */
  '--input-field__input-within-width'?: string;
}

type InputFieldType = ForwardedRefComponent<
  HTMLInputElement,
  InputFieldProps
> & {
  Input?: typeof Input;
  Label?: typeof FieldLabel;
};

/**
 * ## Usage
 *
 * **NOTE**: This component requires a `label` or `aria-label` prop.
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Text | Standard single-line input for free-form text. | Name fields, search bars, tags. |
 * | Search | Optimized for searching, often with a search icon or clear button. | Site/app search bars, filter queries. |
 * | Date/Time | Opens a date/time picker depending on browser support. | Scheduling. |
 * | Masked | Formats input while typing. | Passwords, phone numbers, credit card entries. |
 * | Disabled/Read-Only | Prevents user interaction or editing. | Prefilled info, summary/review forms. |
 * | Validation | Displays real-time validation (e.g., success, error states). | Required fields, format enforcement. |
 *
 * ## Interaction
 *
 * When the text exceeds the available space, it scrolls to show the end of the string.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use short, precise labels in sentence case.
 * * Use helper text only when necessary, preferring examples (e.g., yourname@emaildomain.com) over instructions.
 * * For errors, provide instructions for fixing the issue and explain what is happening.
 * * Use `fieldNote` for examples or instructions explaining what should be entered.
 *
 * ### Don'ts
 *
 * * Don't use colons or periods at the end of labels, and don't omit labels.
 * * Don't use placeholder text within the field; it can cause accessibility issues.
 * * Don't stack field notes on top of error messages.
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
      subLabel,
      type = 'text',
      ...other
    },
    ref,
  ) => {
    const shouldRenderOverline = !!(label || required);
    // Default to `.value` to match React's preference order
    const [fieldText, setFieldText] = useState(
      other.value || other.defaultValue,
    );

    // Handling of behavior when field type is password. Show/hide button
    const revealShowHideButton = type === 'password';
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // The slot renders for caller-provided content and for the password show/hide button
    const shouldRenderInputWithin = !!(inputWithin || revealShowHideButton);

    // Measure the slot so the input's trailing padding can track the width of whatever is rendered
    // in it, rather than constraining that content to a fixed size.
    const inputWithinRef = useRef<HTMLDivElement>(null);
    const [inputWithinWidth, setInputWithinWidth] = useState<number>();

    useEffect(() => {
      const inputWithinNode = inputWithinRef.current;

      if (!inputWithinNode || typeof ResizeObserver === 'undefined') {
        return;
      }

      const observer = new ResizeObserver(([entry]) => {
        // Round up, so a fractional width can't leave the content overlapping the text area
        setInputWithinWidth(
          Math.ceil(
            entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width,
          ),
        );
      });

      observer.observe(inputWithinNode);

      return () => observer.disconnect();
    }, [shouldRenderInputWithin]);

    // set up base and conditional styles
    const overlineClassName = clsx(
      styles['input-field__overline'],
      !label && styles['input-field__overline--no-label'],
    );

    const labelClassName = clsx(
      styles['input-field__label'],
      disabled && styles['input-field__label--disabled'],
    );

    const subLabelClassName = clsx(
      styles['input-field__subLabel'],
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

    // Modify the padding of `Input` to account for trailing/leading icons and trailing buttons
    const inputOverlayClassName = clsx(
      leadingIcon && styles['input-field__input--leading-icon'],
      shouldRenderInputWithin && styles['input-field__input--input-within'],
    );

    // Publish the measured slot width for the input's trailing padding to consume. Left unset until
    // measured, so the stylesheet's fallback covers the first render (and non-browser environments).
    // A caller-supplied value in `style` lands on the input itself, so it takes precedence.
    const inputBodyStyle =
      inputWithinWidth === undefined
        ? undefined
        : ({
            '--input-field__input-within-width': `${inputWithinWidth}px`,
          } as InputFieldCSSProperties);

    // When field length is specified, handle calculations for current and total size (with styles)
    const fieldLength = fieldText?.toString().length ?? 0;

    const textExceedsMaxLength =
      maxLength !== undefined && fieldLength ? fieldLength > maxLength : false;

    const textExceedsRecommendedLength =
      recommendedMaxLength !== undefined && fieldLength
        ? fieldLength > recommendedMaxLength
        : false;

    const shouldRenderError =
      textExceedsMaxLength || textExceedsRecommendedLength;

    const fieldLengthCountClassName = clsx(
      (textExceedsMaxLength || textExceedsRecommendedLength) &&
        styles['input-field--invalid-length'],
    );

    // Pick the smallest of the lengths to set as the maximum value allowed
    const maxLengthShown = getMinValue(maxLength, recommendedMaxLength);

    const generatedIdVar = React.useId();
    const idVar = id || generatedIdVar;

    // Accessibility: attach the IDs of fieldnote and/or subLabel to the input
    const generatedFieldNoteId = React.useId();
    const generatedSubLabelId = React.useId();

    // set up the aria-describedby based on the following rules:
    // - describedby is blank if subLabel and fieldnote are not defined
    // - for each subLabel/fieldnote, append the space-separated, generated IDs to aria-describedby
    // - if the user has given a aria-describedby prop, override the calculation
    const completeDescribedByVar = ariaDescribedBy
      ? ariaDescribedBy
      : `${subLabel ? generatedSubLabelId : ''}${fieldNote ? ' ' + generatedFieldNoteId : ''}`;

    return (
      <div className={className}>
        {shouldRenderOverline && (
          <div className={overlineClassName}>
            {label && (
              <FieldLabel
                className={labelClassName}
                disabled={disabled}
                htmlFor={idVar}
                size="md"
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
              <Text
                as="div"
                className={styles['input-field__character-counter']}
                preset="body-sm"
              >
                <span className={fieldLengthCountClassName}>{fieldLength}</span>{' '}
                / {maxLengthShown}
              </Text>
            )}
            {label && subLabel && (
              <div className={subLabelClassName}>
                <Text as="span" id={generatedSubLabelId} preset="body-sm">
                  {subLabel}
                </Text>
              </div>
            )}
          </div>
        )}

        <div className={inputBodyClassName} style={inputBodyStyle}>
          <Input
            aria-describedby={completeDescribedByVar ?? undefined}
            aria-invalid={!!(status === 'critical')}
            className={inputOverlayClassName}
            disabled={disabled}
            id={idVar}
            maxLength={maxLength}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // when uncontrolled, update field text counter source
              // when controlled, only update when onchange is specified
              other.defaultValue && setFieldText(e.target.value);
              if (onChange) {
                setFieldText(e.target.value);
                onChange(e);
              }
            }}
            readOnly={readOnly}
            ref={ref}
            required={required}
            status={shouldRenderError ? 'critical' : status}
            type={isPasswordVisible ? 'text' : type}
            {...other}
          />
          {shouldRenderInputWithin && (
            <div
              className={styles['input-field__input-within']}
              ref={inputWithinRef}
            >
              {inputWithin}
              {revealShowHideButton && (
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
              <Icon name={leadingIcon} purpose="decorative" size="24px" />
            </div>
          )}
        </div>
        {fieldNote && (
          <div className={styles['input-field__footer']}>
            <FieldNote
              disabled={disabled}
              id={generatedFieldNoteId}
              status={shouldRenderError ? 'critical' : status}
            >
              {fieldNote}
            </FieldNote>
          </div>
        )}
      </div>
    );
  },
);

InputField.displayName = 'InputField';
InputField.Input = Input;
InputField.Label = FieldLabel;
