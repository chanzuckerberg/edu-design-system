import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useUID } from 'react-uid';
import styles from './CheckboxField.module.css';
import FieldNote from '../../components/FieldNote';
import Fieldset from '../../components/Fieldset';
import FieldsetItems from '../../components/FieldsetItems';
import FieldsetLegend from '../../components/FieldsetLegend';
import CheckboxFieldItem from '../CheckboxFieldItem';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  'aria-describedby'?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
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
   * HTML id for the component
   */
  id?: string;
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
  label: string;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: '(required)' | '(optional)';
  /**
   * Size variations for the CheckboxField
   * - **sm** results in a visually smaller CheckboxField
   */
  size?: 'sm';
  /**
   * Stylistic variants of the CheckboxField
   * - **inline** places each CheckboxFieldItem beside one another
   */
  variant?: 'inline';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {CheckboxField} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const CheckboxField = ({
  className,
  variant,
  size,
  id,
  label,
  isError,
  fieldNote,
  disabled,
  'aria-describedby': ariaDescribedBy,
  children,
  optionalLabel,
  inverted,
  ...other
}: Props) => {
  const generatedId = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedId
    : undefined;

  const componentClassName = clsx(
    styles['checkbox-field'],
    variant === 'inline' && styles['checkbox-field--inline'],
    size === 'sm' && styles['checkbox-field--sm'],
    inverted && styles['checkbox-field--inverted'],
    isError && styles['eds-is-error'],
    disabled && styles['eds-is-disabled'],
    className,
  );
  return (
    <Fieldset className={componentClassName} id={id} {...other}>
      <FieldsetLegend
        aria-describedby={fieldNote && ariaDescribedByVar}
        className={className}
        optionalLabel={optionalLabel}
        text={label}
      />

      <FieldsetItems className={styles['checkbox-field__body']}>
        <ul className={styles['checkbox-field__list']}>{children}</ul>
      </FieldsetItems>
      {fieldNote && (
        <FieldNote
          id={ariaDescribedByVar}
          inverted={inverted}
          isError={isError}
        >
          {fieldNote}
        </FieldNote>
      )}
    </Fieldset>
  );
};

CheckboxField.Item = CheckboxFieldItem;
