import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useState } from 'react';
import { getMinValue } from '../../util/getMinValue';
import { useId } from '../../util/useId';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';

import type { Status } from '../../util/variant-types';
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
   * Text under the textarea used to provide a description or error message to describe the input.
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
  (
    {
      className,
      children,
      disabled,
      defaultValue = '',
      readOnly,
      status = 'default',
      ...other
    },
    ref,
  ) => {
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
      label,
      maxLength,
      onChange,
      readOnly,
      recommendedMaxLength,
      required,
      showHint,
      status = 'default',
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
      status === 'critical' ||
      textExceedsMaxLength ||
      textExceedsRecommendedLength;

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
      disabled && styles['textarea-field__label--disabled'],
    );

    const requiredTextClassName = clsx(
      styles['textarea-field__hint'],
      disabled && styles['textarea-field__required-text--disabled'],
    );
    const fieldLengthCountClassName = clsx(
      (textExceedsMaxLength || textExceedsRecommendedLength) &&
        styles['textarea-field--invalid-length'],
    );

    const textareaClassName = clsx(
      readOnly && styles['textarea-field__textarea--read-only'],
    );

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
              <Text
                className={styles['textarea-field__character-counter']}
                preset="body-sm"
              >
                <span className={fieldLengthCountClassName}>{fieldLength}</span>{' '}
                / {maxLengthShown}
              </Text>
            )}
          </div>
        )}
        <TextArea
          aria-describedby={ariaDescribedByVar}
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
