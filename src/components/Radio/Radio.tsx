import clsx from 'clsx';
import React, { ChangeEventHandler } from 'react';
import styles from './Radio.module.css';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: string;
  /**
   * Toggles whether or not the checkbox is checked or unchecked
   */
  checked?: boolean;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * HTML name attribute for the radio button
   */
  name?: string;
  /**
   * Function that fires when field value has changed
   */
  onChange?: ChangeEventHandler;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly?: boolean;
  /**
   * Tabindex passed down from RadioFieldItem to add or remove focus capability
   */
  tabIndex?: number;
  /**
   * Inverted variation for dark backgrounds
   */
  inverted?: boolean;
  /**
   * A string representing the value of the radio button
   */
  value?: string | number;
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  ariaDescribedBy,
  id,
  name,
  value,
  className,
  checked,
  disabled,
  inverted,
  readOnly,
  onChange,
  tabIndex,
  ...other
}: Props) => {
  const componentClassName = clsx(
    styles['radio'],
    className,
    inverted && styles['radio--inverted'],
  );
  return (
    <div className={componentClassName} {...other}>
      <input
        aria-describedby={ariaDescribedBy}
        checked={checked}
        className={styles['radio__input']}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        tabIndex={tabIndex}
        type="radio"
        value={value}
      />
      <span className={styles['radio__custom-radio']} />
    </div>
  );
};
