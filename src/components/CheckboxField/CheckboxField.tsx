import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './CheckboxField.module.css';
import FieldNote from '../FieldNote';
import Legend from '../Legend';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: any;
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
   * Toggles the visibility of the form control legend
   */
  hideLegend?: boolean;
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
  label?: string;
  /**
   * Slot for node to appear directly after field legend. Typically used to include a Toolip
   */
  legendAfter?: ReactNode;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
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
 * Primary UI component for user interaction
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
  required,
  ariaDescribedBy,
  hideLegend,
  legendAfter,
  children,
  optionalLabel,
  requiredLabel,
  inverted,
  ...other
}: Props) => {
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();

  useEffect(() => {
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, [ariaDescribedBy, fieldNote]);

  const componentClassName = clsx(
    styles['checkbox-field'],
    className,
    variant === 'inline' && styles['checkbox-field--inline'],
    size === 'sm' && styles['checkbox-field--sm'],
    inverted && styles['checkbox-field--inverted'],
    isError && styles['eds-is-error'],
    disabled && styles['eds-is-disabled'],
  );
  return (
    <fieldset className={componentClassName} id={id} {...other}>
      <Legend
        className={styles['checkbox-field__label']}
        hideLegend={hideLegend}
        text={label}
        legendAfter={legendAfter}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
        aria-describedby={fieldNote && ariaDescribedByVar}
      />

      <div className={styles['checkbox-field__body']}>
        <ul className={styles['checkbox-field__list']}>{children}</ul>
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['checkbox-field__note']}
          id={ariaDescribedByVar}
          inverted={inverted}
          isError={isError}
        >
          {fieldNote}
        </FieldNote>
      )}
    </fieldset>
  );
};
