import React, { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './InlineCheckbox.module.css';
import { nanoid } from 'nanoid';
import { Checkbox } from '../Checkbox/Checkbox';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: string;
  /**
   * Property that checks the checkbox when true and unchecks it when false
   */
  checked?: any;
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
   * HTML label text
   */
  label?: ReactNode;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * HTML name attribute for the checkbox
   */
  name?: string | undefined;
  /**
   * Function passed down from higher level component
   */
  onChange?: Function;
  /**
   * HTML value attribute for the checkbox
   */
  value?: string;
  /**
   * Boolean that determines whether the cb has Indeterminate states.
   */
  indeterminate?: boolean;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
   */
  readOnly?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const InlineCheckbox: React.FC<Props> = ({
  className,
  checked,
  id,
  indeterminate = false,
  name = '',
  label,
  ariaDescribedBy,
  disabled,
  readOnly,
  onChange,
  value = '',
  hideLabel,
  ...other
}) => {
  const ref = useRef<HTMLLabelElement | null>(null);

  const [checkedState, setCheckedState] = useState(checked ? checked : false);
  const [indeterminateState, setIndeterminateState] = useState(
    indeterminate ? indeterminate : false,
  );
  const [idVar, setId] = useState();

  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
   */
  function usePrevious(checked: any) {
    useEffect(() => {
      ref.current = checked;
    });
    return ref.current;
  }

  /**
   * Use effect
   * 1) Set prevChecked to previous checked prop
   * 2) If prevChecked is defined and previous checked prop is not equal
   * to current checked prop, toggle state
   */
  const prevChecked = usePrevious(checked); /* 1 */

  useEffect(() => {
    if ((prevChecked !== undefined || null) && prevChecked !== checked) {
      setCheckedState(checked);
    }
    if (checkedState) {
      setIndeterminateState(false);
    } else {
      setIndeterminateState(indeterminate);
    }
    setId(id || nanoid());
  }, [prevChecked, checked, checkedState, indeterminate]);

  function handleOnChange(e: any) {
    if (onChange) {
      onChange(e);
    }
    setCheckedState(!checkedState);

    if (indeterminateState === true) {
      setIndeterminateState(false);
      setCheckedState(false);
    }
  }

  const componentClassName = clsx(styles['inline-checkbox'], className, {
    [styles['inline-checkbox--hide-label']]: hideLabel,
  });

  return (
    <label className={componentClassName} htmlFor={idVar} ref={ref} {...other}>
      <Checkbox
        className={styles['inline-checkbox__control']}
        id={idVar}
        disabled={disabled}
        ariaDescribedBy={ariaDescribedBy}
        readOnly={readOnly}
        name={name}
        indeterminate={indeterminateState}
        checked={checkedState}
        value={value}
        onChange={(e: any) => handleOnChange(e)}
      />
      <div
        className={
          hideLabel
            ? 'inline-checkbox__text u-is-vishidden'
            : 'inline-checkbox__text'
        }
      >
        {label}
      </div>
    </label>
  );
};
