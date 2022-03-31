import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Label.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * HTML `for` attribute, which maps the label to an associated input `id`
   */
  htmlFor?: string;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Inverted variation for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter?: ReactNode;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Indicates that field is required for form to be successfully submitted. Non-required fields will display a text "(optional)" beside the label text
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
  /**
   * The label text string
   */
  text?: string | boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Label: React.FC<Props> = ({
  className,
  id,
  htmlFor,
  inverted,
  labelAfter,
  optionalLabel = '(optional)',
  text = 'Label',
  required = true,
  requiredLabel,
  hideLabel,
  ...other
}) => {
  const componentClassName = clsx(
    styles['label'],
    className,
    inverted && styles['label--inverted'],
    hideLabel && styles['u-is-vishidden'],
  );

  return (
    <label className={componentClassName} htmlFor={htmlFor} id={id} {...other}>
      {text}{' '}
      {!required && (
        <span className={styles['label__flag']}>{optionalLabel}</span>
      )}
      {requiredLabel && (
        <span className={styles['label__flag']}>{requiredLabel}</span>
      )}
      {labelAfter && (
        <span className={styles['label__after']}>{labelAfter}</span>
      )}
    </label>
  );
};
