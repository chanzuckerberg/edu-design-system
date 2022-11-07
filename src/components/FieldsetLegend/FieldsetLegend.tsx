import clsx from 'clsx';
import React from 'react';
import styles from './FieldsetLegend.module.css';

export interface FieldsetLegendProps {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * String to indicate required or optional state.
   */
  optionalLabel?: '(required)' | '(optional)';
  /**
   * Legend text string that names the fieldset.
   */
  text: string;
}

/**
 * `import {FieldsetLegend} from "@chanzuckerberg/eds";`
 *
 * Helper sub-component for styling the legend in a fieldset.
 */
export const FieldsetLegend = ({
  className,
  optionalLabel,
  text,
  ...other
}: FieldsetLegendProps) => {
  const componentClassName = clsx(styles['fieldset-legend'], className);
  return (
    <legend className={componentClassName} {...other}>
      {text}{' '}
      {optionalLabel && (
        <span className={styles['fieldset-legend__flag']}>{optionalLabel}</span>
      )}
    </legend>
  );
};
