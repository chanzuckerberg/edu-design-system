import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useId } from 'react';
import type {
  EitherInclusive,
  ForwardedRefComponent,
} from '../../util/utility-types';
import FieldNote from '../FieldNote';
import Label from '../Label';
import Text from '../Text';
import TextArea from '../TextArea';
import styles from './TextareaField.module.css';

export type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
  /**
   * Error state of the form field
   */
  isError?: boolean;
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

type TextareaFieldType = ForwardedRefComponent<HTMLTextAreaElement, Props> & {
  TextArea?: typeof TextArea;
};

/**
 * `import {TextareaField} from "@chanzuckerberg/eds";`
 *
 * Multi-line text input field with built-in labeling and accessory text to describe
 * the content. When a maximum text count is specified, component also shows relevant
 * text up to the maximum.
 *
 * NOTE: This component requires `label` or `aria-label` prop
 */
export const TextareaField: TextareaFieldType = forwardRef(
  (
    {
      'aria-describedby': ariaDescribedBy,
      children,
      className,
      disabled,
      fieldNote,
      id,
      isError,
      label,
      required,
      ...other
    },
    ref,
  ) => {
    const shouldRenderOverline = !!(label || required);
    const overlineClassName = clsx(
      styles['textarea-field__overline'],
      !label && styles['textarea-field__overline--no-label'],
      disabled && styles['textarea-field__overline--disabled'],
    );

    const generatedIdVar = useId();
    const idVar = id || generatedIdVar;

    const generatedAriaDescribedById = useId();
    const ariaDescribedByVar = fieldNote
      ? ariaDescribedBy || generatedAriaDescribedById
      : undefined;

    const componentClassName = clsx(styles['textarea-field'], className);

    return (
      <div className={componentClassName}>
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
        <TextArea
          aria-describedby={ariaDescribedByVar}
          aria-disabled={disabled}
          disabled={disabled}
          id={idVar}
          isError={isError}
          readOnly={disabled}
          ref={ref}
          required={required}
          {...other}
        >
          {children}
        </TextArea>
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

TextareaField.displayName = 'TextareaField';
TextareaField.TextArea = TextArea;
