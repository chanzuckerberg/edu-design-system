import clsx from 'clsx';
import React, { ChangeEventHandler, ReactNode } from 'react';
import { useUID } from 'react-uid';
import { Radio } from '../../components/Radio/Radio';
import styles from '../RadioField/RadioField.module.css';

export interface Props {
  /**
   * Toggles whether or not the radio is checked or unchecked
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
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * Tabindex passed down to Radio to add or remove focus capability
   */
  tabIndex?: number;
  /**
   * The label text for the RadioFieldItem
   */
  text?: string | ReactNode;
  /**
   * A string representing the value of the radio button
   */
  value?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {RadioFieldItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const RadioFieldItem = ({
  className,
  id,
  name,
  value,
  checked,
  onChange,
  disabled,
  readOnly,
  text,
  tabIndex,
  ...other
}: Props) => {
  const generatedId = useUID();
  const idVar = id || generatedId;

  const componentClassName = clsx(styles['radio-field__item'], className);
  return (
    <li className={componentClassName} {...other}>
      <Radio
        checked={checked}
        className={styles['radio-field__item-control']}
        disabled={disabled}
        id={idVar}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        tabIndex={tabIndex}
        value={value}
      />

      <label className={styles['radio-field__item-label']} htmlFor={idVar}>
        {text}
      </label>
    </li>
  );
};
