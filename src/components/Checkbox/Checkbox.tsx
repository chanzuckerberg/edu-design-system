import clsx from 'clsx';
import React, {
  useRef,
  useEffect,
  ChangeEventHandler,
  MutableRefObject,
} from 'react';
import styles from './Checkbox.module.css';
import { ENTER_KEYCODE } from '../../util/keycodes';

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
   * Indeterminate prop that turns the checkbox indeterminate state on
   */
  indeterminate?: boolean;
  /**
   * Inverted variation for dark backgrounds
   */
  inverted?: boolean;
  /**
   * HTML name attribute for the checkbox
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
   * A string representing the value of the checkbox
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  ariaDescribedBy,
  id,
  name,
  value,
  className,
  inverted,
  indeterminate = false,
  checked,
  disabled,
  readOnly,
  onChange,
  ...other
}: Props) => {
  const checkboxRef = useRef() as MutableRefObject<HTMLInputElement>;
  /**
   * On Keydown
   */
  function onKeyDown(e: any) {
    /**
     * If enter key is pressed, trigger on change event
     */
    if (onChange && e.code === ENTER_KEYCODE) {
      onChange(e);
    }
  }

  useEffect(() => {
    checkboxRef.current.indeterminate = indeterminate;
  });

  const componentClassName = clsx(styles['checkbox'], className, {
    [styles['checkbox--inverted']]: inverted === true,
  });

  return (
    <div className={componentClassName} {...other}>
      <input
        id={id}
        ref={checkboxRef}
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        className={styles['checkbox__input']}
        disabled={disabled}
        readOnly={readOnly}
        onChange={onChange && onChange}
        aria-describedby={ariaDescribedBy}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <span className={styles['checkbox__custom-check']} />
    </div>
  );
};
