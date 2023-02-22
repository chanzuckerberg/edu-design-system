import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef, useId } from 'react';
import styles from './TextareaField.module.css';
import FieldNote from '../FieldNote';
import Label from '../Label';
import Text from '../Text';
import TextArea from '../TextArea';

export type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * Aria-label to provide an accesible name for the text input if no visible label is provided.
   */
  'aria-label'?: string;
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
  /**
   * HTML label text (used in an accessory label component)
   */
  label?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {TextareaField} from "@chanzuckerberg/eds";`
 *
 * Multi-line text input field with built-in labeling and accessory text to describe
 * the content. When a maximum text count is specified, component also shows relevant
 * text up to the maximum.
 */
export const TextareaField = forwardRef<HTMLTextAreaElement, Props>(
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
    if (
      process.env.NODE_ENV !== 'production' &&
      !label &&
      !other['aria-label']
    ) {
      throw new Error('You must provide a visible label or aria-label');
    }

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
