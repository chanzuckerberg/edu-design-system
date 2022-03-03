import React, {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import styles from '../RadioField/RadioField.module.css';
import { nanoid } from 'nanoid';
import { Radio } from '../Radio/Radio';

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
  id?: any;
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
   * Inverted is for a RadioFieldItem displayed on a dark background
   */
  inverted?: boolean;
  /**
   * A string representing the value of the radio button
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const RadioFieldItem: React.FC<Props> = ({
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
  inverted,
  ...other
}) => {
  const [idVar, setId] = useState();

  useEffect(() => {
    setId(id || nanoid());
  }, []);
  const componentClassName = clsx(styles['radio-field__item'], className, {
    [styles['radio-field__item--inverted']]: inverted === true,
  });
  return (
    <li className={componentClassName} {...other}>
      <Radio
        id={idVar}
        name={name}
        value={value}
        className={styles['radio-field__item-control']}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        tabIndex={tabIndex}
        inverted={inverted}
      />

      <label className={styles['radio-field__item-label']} htmlFor={idVar}>
        {text}
      </label>
    </li>
  );
};
