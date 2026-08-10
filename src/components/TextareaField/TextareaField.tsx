import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useState } from 'react';
import { getMinValue } from '../../util/getMinValue';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';

import type { Status } from '../../util/variant-types';
import Counter from '../Counter';
import FieldLabel from '../FieldLabel';
import FieldNote from '../FieldNote';
import Text from '../Text';

import styles from './TextareaField.module.css';

type TextareaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  // Component API
  /**
   * Text content of the field upon instantiation
   */
  children?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Text under the textarea used to provide validation hints or error message to describe the input error.
   */
  fieldNote?: ReactNode;
  /**
   * HTML id for the component. Can be used with a custom Label component
   */
  id?: string;
  // Design API
  /**
   * Behaves similar to `maxLength` but allows the user to continue typing more text.
   * Should not be larger than `maxLength`, if present.
   */
  recommendedMaxLength?: number;
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

type TextareaFieldType = ForwardedRefComponent<
  HTMLTextAreaElement,
  TextareaFieldProps
> & {
  TextArea?: typeof TextArea;
  Label?: typeof FieldLabel;
};

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * CSS class names that can be appended to the component
   */
  className?: string;
  /**
   * Text default contents of the field
   */
  children?: string;
  /**
   * Whether the disabled stat is active
   */
  disabled?: boolean;
  /**
   * Status for the field state
   *
   * **Default is `"default"`**.
   */
  status?: 'default' | Extract<Status, 'warning' | 'critical'>;
};

/**
 * Base component, applying styles to a <textarea> tag
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, disabled, status = 'default', ...other }, ref) => {
    const componentClassName = clsx(
      styles['textarea'],
      status === 'critical' && styles['error'],
      status === 'warning' && styles['warning'],
      disabled && styles['textarea--disabled'],
      className,
    );

    return (
      <textarea
        className={componentClassName}
        disabled={disabled}
        ref={ref}
        {...other}
      />
    );
  },
);

/**
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Standard | Multi-line input field for entering extended text. | Comments, descriptions, notes fields. |
 * | Auto-resizing | Expands vertically as the user types. | Messaging apps, forms with flexible input length. |
 * | Fixed-size | Has a set number of rows and does not resize. | Forms with a consistent layout, limited-screen environments. |
 * | Read-only | Displays pre-filled content that cannot be edited. | Code blocks, audit logs, view-only mode. |
 * | Disabled | Grayed out and non-editable; indicates inaccessibility. | Conditional logic states, feature restrictions. |
 * | Monospaced | Uses a monospaced font, often for structured text or code. | Code snippets, JSON input, command editors. |
 *
 * **NOTE**: This component requires a `label` or `aria-label` prop to support accessibility.
 *
 * ## Interaction
 *
 * When the amount of text exceeds the available space, the text scrolls to show the end of the string.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Always have a visible label when adding a hint.
 * * Use short, instructional labels when necessary and use sentence case.
 * * Use `fieldNote` helper text when necessary, favoring examples over instructions.
 * * For errors, provide instructions for fixing the issue and explain what is happening.
 *
 * ### Don'ts
 *
 * * Don't use colons or periods at the end of labels, and don't omit labels.
 * * Don't force the use of helper text—there is frequently no need for it.
 * * Don't place placeholder text within the field, as it can cause accessibility issues.
 */
export const TextareaField: TextareaFieldType = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedBy,
      children,
      className,
      defaultValue,
      disabled,
      fieldNote,
      id,
      label,
      maxLength,
      onChange,
      readOnly,
      recommendedMaxLength,
      required,
      showHint,
      status = 'default',
      subLabel,
      value,
      ...other
    },
    ref,
  ) => {
    const [fieldText, setFieldText] = useState(defaultValue);

    const shouldRenderOverline = !!(label || required);
    const fieldLength = fieldText?.toString().length ?? 0;
    const textExceedsMaxLength =
      maxLength !== undefined ? fieldLength > maxLength : false;

    const textExceedsRecommendedLength =
      recommendedMaxLength !== undefined
        ? fieldLength > recommendedMaxLength
        : false;

    const shouldRenderError =
      status === 'critical' ||
      textExceedsMaxLength ||
      textExceedsRecommendedLength;

    const componentClassName = clsx(styles['textarea-field'], className);
    const overlineClassName = clsx(
      styles['textarea-field__overline'],
      !label && styles['textarea-field__overline--no-label'],
      disabled && styles['textarea-field__overline--disabled'],
    );

    const labelClassName = clsx(
      disabled && styles['textarea-field__label--disabled'],
    );

    const subLabelClassName = clsx(
      styles['textarea-field__subLabel'],
      disabled && styles['textarea-field__label--disabled'],
    );

    const requiredTextClassName = clsx(
      styles['textarea-field__hint'],
      disabled && styles['textarea-field__required-text--disabled'],
    );

    const textareaClassName = clsx(
      readOnly && styles['textarea-field__textarea--read-only'],
    );

    // Accessibility: attach the IDs of fieldnote and/or subLabel to the input
    const generatedIdVar = React.useId();
    const idVar = id || generatedIdVar;
    const generatedFieldNoteId = React.useId();
    const generatedSubLabelId = React.useId();

    // set up the aria-describedby based on the following rules:
    // - describedby is blank if subLabel and fieldnote are not defined
    // - for each subLabel/fieldnote, append the space-separated, generated IDs to aria-describedby
    // - if the user has given a aria-describedby prop, override the calculation
    const completeDescribedByVar = ariaDescribedBy
      ? ariaDescribedBy
      : `${subLabel ? generatedSubLabelId : ''}${fieldNote ? ' ' + generatedFieldNoteId : ''}`;

    // Pick the smallest of the lengths to set as the maximum value allowed
    const maxLengthShown = getMinValue(maxLength, recommendedMaxLength);

    return (
      <div className={componentClassName}>
        {shouldRenderOverline && (
          <div className={overlineClassName}>
            {label && (
              <FieldLabel className={labelClassName} htmlFor={idVar} size="md">
                {label}
              </FieldLabel>
            )}
            {required && showHint && (
              <Text
                as="span"
                className={requiredTextClassName}
                preset="body-sm"
              >
                (Required)
              </Text>
            )}
            {!required && showHint && (
              <Text
                as="span"
                className={requiredTextClassName}
                preset="body-sm"
              >
                (Optional)
              </Text>
            )}
            {maxLengthShown && (
              <Counter
                className={styles['textarea-field__character-counter']}
                count={fieldLength}
                total={maxLengthShown}
              />
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
        <TextArea
          aria-describedby={completeDescribedByVar ?? undefined}
          aria-disabled={disabled}
          className={textareaClassName}
          defaultValue={defaultValue}
          disabled={disabled}
          id={idVar}
          maxLength={maxLength}
          onChange={(e) => {
            setFieldText(e.target.value);
            onChange && onChange(e);
          }}
          readOnly={readOnly}
          ref={ref}
          required={required}
          status={shouldRenderError ? 'critical' : status}
          value={value}
          {...other}
        >
          {children}
        </TextArea>
        {(fieldNote || maxLengthShown) && (
          <div className={styles['textarea-field__footer']}>
            {fieldNote && (
              <FieldNote
                className={styles['textarea-field__field-note']}
                disabled={disabled}
                id={generatedFieldNoteId}
                status={shouldRenderError ? 'critical' : status}
              >
                {fieldNote}
              </FieldNote>
            )}
          </div>
        )}
      </div>
    );
  },
);

TextareaField.displayName = 'TextareaField';
TextArea.displayName = 'TextareaField.Textarea';

TextareaField.TextArea = TextArea;
TextareaField.Label = FieldLabel;
