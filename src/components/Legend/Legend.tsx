import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Legend.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles the visibility of the legend
   */
  hideLegend?: boolean;
  /**
   * Slot for node to appear directly after field legend. Typically used to include a Toolip
   */
  legendAfter?: ReactNode;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * String for the optional legend. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * String for the required label to add brief additional information inline after the label
   */
  requiredLabel?: string;
  /**
   * Legend text string
   */
  text?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Legend: React.FC<Props> = ({
  className,
  id,
  optionalLabel = '(optional)',
  text,
  required = true,
  requiredLabel,
  hideLegend,
  legendAfter,
  ...other
}) => {
  const componentClassName = clsx(styles['legend'], className, {
    [styles['u-is-vishidden']]: hideLegend,
  });
  return (
    <legend className={componentClassName} id={id} {...other}>
      {text}{' '}
      {!required && (
        <span className={styles['legend__flag']}>{optionalLabel}</span>
      )}
      {requiredLabel && (
        <span className={styles['legend__flag']}>{requiredLabel}</span>
      )}
      {legendAfter && (
        <span className={styles['legend__after']}>{legendAfter}</span>
      )}
    </legend>
  );
};
