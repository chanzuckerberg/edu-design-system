import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './SelectField.module.css';
import { FieldNote } from '../FieldNote/FieldNote';
import { Icon } from '../Icon/Icon';
import { Label } from '../Label/Label';
import { Select } from '../Select/Select';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: any;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * FieldNote
   * Used as helper text or error message
   */
  fieldNote?: string | ReactNode;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * Inverted variant for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: any;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Function that fires when field value has changed
   */
  onChange?: ChangeEventHandler;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Turns on read only status for select
   */
  readOnly?: boolean;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
  /**
   * A string representing the value of the checkbox
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const SelectField = ({
  className,
  id,
  label,
  disabled,
  required,
  ariaDescribedBy,
  isError,
  inverted,
  fieldNote,
  hideLabel,
  onChange,
  optionalLabel,
  requiredLabel,
  items,
  readOnly,
  value,
  ...other
}: Props) => {
  /**
   * Initialize states, constants, and refs
   */
  const [valueState, setValue] = useState(value ? value : '');
  const [idVar, setId] = useState();
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  /**
   * Get previous prop
   * 1) This is used to compare the previous prop to the current prop
   */
  function usePrevious(value: any) {
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  /**
   * Use effect
   * 1) Set prevValue to previous value prop
   * 2) If prevValue is defined and previous value prop is not equal
   * to current value prop, toggle state
   */
  const prevValue = usePrevious(value); /* 1 */
  useEffect(() => {
    if (prevValue !== undefined || null) {
      setValue(valueState); /* 2 */
    }
    setId(id || nanoid());
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, [ariaDescribedBy, fieldNote, id, prevValue, valueState]);

  /**
   * Handle onChange
   * 1) On change, set value to the event target value
   * 2) If onChange prop exists, run the function passed into it on change
   */
  function handleOnChange(e: any) {
    setValue(e.target.value); /* 1 */
    if (onChange) {
      onChange(e);
    }
  }

  const componentClassName = clsx(styles['select-field'], className, {
    [styles['select-field--inverted']]: inverted === true,
    [styles['eds-is-error']]: isError,
    [styles['eds-is-disabled']]: disabled,
  });
  return (
    <div className={componentClassName} ref={ref}>
      <Label
        className={styles['select-field__label']}
        htmlFor={idVar}
        text={label}
        hideLabel={hideLabel}
        required={required}
        inverted={inverted}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
      />

      <div className={styles['select-field__body']}>
        <Select
          className={styles['select-field__control']}
          items={items}
          id={idVar}
          readOnly={readOnly}
          disabled={disabled}
          ariaDescribedBy={fieldNote && ariaDescribedByVar}
          value={valueState}
          required={required}
          onChange={(e) => handleOnChange(e)}
          {...other}
        />
        <Icon name="chevron-down" className={styles['select-field__icon']} />
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['select-field__note']}
          id={ariaDescribedByVar}
          isError={isError}
          inverted={inverted}
        >
          {fieldNote}
        </FieldNote>
      )}
    </div>
  );
};
