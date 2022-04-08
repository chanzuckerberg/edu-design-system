import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox';
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
  id?: any;
  /**
   * Inverted variant for dark backgrounds
   */
  inverted?: boolean;
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
 * Primary UI component for user interaction
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
  inverted,
  ...other
}: Props) => {
  /**
   * Initialize state and setup automatic id generator if not provided by user
   */
  const [checkboxChecked, setCheckedState] = useState(
    checked ? checked : false,
  );
  const [idVar, setId] = useState();

  /**
   * Check for previous props/states
   */
  function usePrevious(checkboxChecked: any) {
    const ref = useRef();
    useEffect(() => {
      ref.current = checkboxChecked;
    });
    return ref.current;
  }

  /**
   * UseEffect lifecycle hook
   * 1) When the component loads or updates, update the state if change from the outside
   */
  const prevChecked = usePrevious(checkboxChecked);
  useEffect(() => {
    if (prevChecked !== checkboxChecked) {
      /* 1 */
      setCheckedState(checkboxChecked);
    }
    setId(id || nanoid());
  }, [prevChecked, checkboxChecked, id]);

  /**
   * On change handler
   * 1) Toggle the checked state of item on change
   */
  function onChange(e: any) {
    setCheckedState(!checkboxChecked); /* 1 */
  }

  const componentClassName = clsx(
    'checkbox-field__item',
    className,
    inverted && styles['checkbox-field__item--inverted'],
  );
  return (
    <li className={componentClassName}>
      <Checkbox
        id={idVar}
        label={text}
        name={name}
        value={value}
        className={styles['checkbox-field__item-control']}
        checked={checkboxChecked}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
      />
    </li>
  );
};
