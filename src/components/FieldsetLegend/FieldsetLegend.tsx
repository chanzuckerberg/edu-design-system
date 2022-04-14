import clsx from 'clsx';
import React from 'react';
import styles from './FieldsetLegend.module.css';

export interface FieldsetLegendProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * String for the optional legend. By default it is '(optional)'.
   */
  optionalLabel?: string;
  /**
   * Indicates that field is required for form to be successfully submitted.
   */
  required?: boolean;
  /**
   * Legend text string that names the fieldset.
   */
  text: string;
}

/**
 * Primary UI component for user interaction
 */
export const FieldsetLegend = ({
  className,
  optionalLabel = '(optional)',
  text,
  required = true,
  ...other
}: FieldsetLegendProps) => {
  const componentClassName = clsx(styles['fieldset-legend'], className);
  return (
    <legend className={componentClassName} {...other}>
      {text}{' '}
      {!required && (
        <span className={styles['fieldset-legend__flag']}>{optionalLabel}</span>
      )}
    </legend>
  );
};
