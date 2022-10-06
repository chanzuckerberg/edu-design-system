import clsx from 'clsx';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useUID } from 'react-uid';
import Checkbox from '../../components/Checkbox';
import styles from '../CheckboxField/CheckboxField.module.css';

export interface Props {
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
   /**
    * HTML name attribute for the checkbox
    */
  name?: string;
  /**
   * Function that fires when the value changes
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
   * The label text for the CheckboxFieldItem
   */
  text: string;
  /**
   * A string representing the value of the checkbox
   */
  value?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {CheckboxFieldItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const CheckboxFieldItem = ({
  className,
  id,
  name,
  value,
  checked,
  disabled,
  readOnly,
  text,
  ...other
}: Props) => {
  /**
   * Initialize state and setup automatic id generator if not provided by user
   */
  const [checkboxChecked, setCheckedState] = useState(
    checked ? checked : false,
  );
  const generatedId = useUID();
  const idVar = id || generatedId;

  /**
   * Check for previous props/states
   */
  function usePrevious(checkboxChecked: boolean) {
    const ref = useRef(false);
    useEffect(() => {
      ref.current = checkboxChecked;
    });
    return ref.current;
  }

  /**
   * When the component loads or updates, update the state if changed from the outside.
   */
  const prevChecked = usePrevious(checkboxChecked);
  useEffect(() => {
    if (prevChecked !== checkboxChecked) {
      setCheckedState(checkboxChecked);
    }
  }, [prevChecked, checkboxChecked]);

  /**
   * Toggle the checked state of item on change.
   */
  function onChange() {
    setCheckedState(!checkboxChecked);
  }

  const componentClassName = clsx('checkbox-field__item', className);
  return (
    <li className={componentClassName}>
      <Checkbox
        checked={checkboxChecked}
        className={styles['checkbox-field__item-control']}
        disabled={disabled}
        id={idVar}
        label={text}
        name={name}
        onChange={onChange}
        readOnly={readOnly}
        value={value}
      />
    </li>
  );
};
