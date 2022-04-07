import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './Fieldset.module.css';
import Legend from '../Legend';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Toggles the visibility of the form control legend
   */
  hideLegend?: boolean;
  /**
   * HTML legend title text
   */
  legend?: string;
  /**
   * Slot for node to appear directly after legend text. Typically used to include a Toolip
   */
  legendAfter?: ReactNode;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Required is passed down to the legend to display "optional" or not
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Fieldset = ({
  className,
  legend,
  legendAfter,
  hideLegend,
  required,
  children,
  optionalLabel,
  requiredLabel,
  ...other
}: Props) => {
  const componentClassName = clsx(styles['fieldset'], className, {});
  return (
    <fieldset className={componentClassName} {...other}>
      <Legend
        className={styles['fieldset__legend']}
        hideLegend={hideLegend}
        legendAfter={legendAfter}
        optionalLabel={optionalLabel}
        required={required}
        requiredLabel={requiredLabel}
        text={legend}
      />
      {children}
    </fieldset>
  );
};
