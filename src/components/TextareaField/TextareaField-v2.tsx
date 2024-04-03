import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useState } from 'react';
import { getMinValue } from '../../util/getMinValue';
import { useId } from '../../util/useId';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';

import { FieldNoteV2 as FieldNote } from '../FieldNote';
import { InputLabelV2 as InputLabel } from '../InputLabel';
import Text from '../Text';

import styles from './TextareaField-v2.module.css';

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
   * Text under the textarea used to provide a description or error message to describe the input.
   */
  fieldNote?: ReactNode;
  /**
   * HTML id for the component. Can be used with a custom Label component
   */
  id?: string;
  // Design API
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * Whether there is a warning state for the field note text (and icon)
   *
   * **Default is `false`**.
   */
  isWarning?: boolean;
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
  Label?: typeof InputLabel;
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
   * Whether the error state is active
   */
  isError?: boolean;
  /**
   * Whether there is a warning state for the field note text (and icon)
   *
   * **Default is `false`**.
   */
  isWarning?: boolean;
};

/**
 * Base component, applying styles to a <textarea> tag
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      children,
      disabled,
      defaultValue = '',
      isError = false,
      isWarning,
      readOnly,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['textarea'],
      isError && styles['error'],
      isWarning && styles['warning'],
      disabled && styles['textarea--disabled'],
      className,
    );

    return (
      <textarea
        className={componentClassName}
        defaultValue={children || defaultValue}
        disabled={disabled}
        readOnly={readOnly}
        ref={ref}
        {...other}
      ></textarea>
    );
  },
);

/**
 * `import {TextareaField} from "@chanzuckerberg/eds";`
 *
 * Multi-line text input field with built-in labeling and accessory text to describe
 * the content. When a maximum text count is specified, component also shows relevant
 * text up to the maximum.
 *
 * **NOTE**: This component requires `label` or `aria-label` prop to support accessibility.
 */
export const TextareaField: TextareaFieldType = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedBy,
      children,
      className,
      defaultValue = '',
      disabled,
      fieldNote,
      id,
      isError,
      isWarning,
      label,
      maxLength,
      onChange,
      readOnly,
      recommendedMaxLength,
      required,
      showHint,
      ...other
    },
    ref,
  ) => {
    const [fieldText, setFieldText] = useState(defaultValue);
    const generatedIdVar = useId();
    const generatedAriaDescribedById = useId();

    const idVar = id || generatedIdVar;
    const shouldRenderOverline = !!(label || required);
    const fieldLength = fieldText?.toString().length ?? 0;
    const textExceedsMaxLength =
      maxLength !== undefined ? fieldLength > maxLength : false;

    const textExceedsRecommendedLength =
      recommendedMaxLength !== undefined
        ? fieldLength > recommendedMaxLength
        : false;

    const shouldRenderError =
      isError || textExceedsMaxLength || textExceedsRecommendedLength;

    const ariaDescribedByVar = fieldNote
      ? ariaDescribedBy || generatedAriaDescribedById
      : undefined;

    const componentClassName = clsx(styles['textarea-field'], className);
    const overlineClassName = clsx(
      styles['textarea-field__overline'],
      !label && styles['textarea-field__overline--no-label'],
      disabled && styles['textarea-field__overline--disabled'],
    );
    const labelClassName = clsx(
      styles['textarea-field__label'],
      disabled && styles['textarea-field__label--disabled'],
    );

    const requiredTextClassName = clsx(
      disabled && styles['textarea-field__required-text--disabled'],
    );
    const fieldLengthCountClassName = clsx(
      (textExceedsMaxLength || textExceedsRecommendedLength) &&
        styles['textarea-field--invalid-length'],
    );

    // Pick the smallest of the lengths to set as the maximum value allowed
    const maxLengthShown = getMinValue(maxLength, recommendedMaxLength);

    return (
      <div className={componentClassName}>
        {shouldRenderOverline && (
          <div className={overlineClassName}>
            {label && (
              <InputLabel className={labelClassName} htmlFor={idVar}>
                {label}
              </InputLabel>
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
          </div>
        )}
        <TextArea
          aria-describedby={ariaDescribedByVar}
          aria-disabled={disabled}
          defaultValue={defaultValue}
          disabled={disabled}
          id={idVar}
          isError={shouldRenderError}
          isWarning={isWarning}
          maxLength={maxLength}
          onChange={(e) => {
            setFieldText(e.target.value);
            onChange && onChange(e);
          }}
          readOnly={readOnly}
          ref={ref}
          required={required}
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
                id={ariaDescribedByVar}
                isError={shouldRenderError}
                isWarning={isWarning}
              >
                {fieldNote}
              </FieldNote>
            )}
            {maxLengthShown && (
              <div className={styles['textarea-field__character-counter']}>
                <span className={fieldLengthCountClassName}>{fieldLength}</span>{' '}
                / {maxLengthShown}
              </div>
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
TextareaField.Label = InputLabel;
