import clsx from 'clsx';
import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import { useUID } from 'react-uid';
import Checkbox from '../../components/Checkbox';
import styles from '../CheckboxField/CheckboxField.module.css';

export interface Props {
  checked?: boolean /* Toggles whether or not the checkbox is checked or unchecked */;
  className?: string /* CSS class names that can be appended to the component. */;
  disabled?: boolean /* Disables the field and prevents editing the contents */;
  id?: string /* HTML id for the component */;
  inverted?: boolean /* Inverted variant for dark backgrounds */;
  name?: string /* HTML name attribute for the checkbox */;
  onChange?: ChangeEventHandler /* Function that fires when the value changes */;
  readOnly?: boolean /* Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive */;
  required?: boolean /* Indicates that field is required for form to be successfully submitted */;
  text: string /* The label text for the CheckboxFieldItem */;
  value?: string /* A string representing the value of the checkbox */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {CheckboxFieldItem} from "@chanzuckerberg/eds";
 * ```
 *
 * CheckboxFieldItem are the checkbox component with properties: checked, disabled, readOnly, text, inverted passed in
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
   * UseEffect lifecycle hook
   * 1) When the component loads or updates, update the state if change from the outside
   */
  const prevChecked = usePrevious(checkboxChecked);
  useEffect(() => {
    if (prevChecked !== checkboxChecked) {
      /* 1 */
      setCheckedState(checkboxChecked);
    }
  }, [prevChecked, checkboxChecked]);

  /**
   * On change handler
   * 1) Toggle the checked state of item on change
   */
  function onChange() {
    setCheckedState(!checkboxChecked); /* 1 */
  }

  const componentClassName = clsx(
    'checkbox-field__item',
    inverted && styles['checkbox-field__item--inverted'],
    className,
  );
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
