import React, { ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.css';
import { nanoid } from 'nanoid';
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';
import { Label } from '../Label/Label';
import { FieldNote } from '../FieldNote/FieldNote';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: any;
  /**
   * HTML id of the helper text to connect label to input
   */
  ariaLabelledBy?: any;
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
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
  fieldNote?: string;
  /**
   * Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies
   */
  hideLabel?: boolean;
  /**
   * HTML id for the component
   */
  id?: any;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Slot for node to appear directly after field label. Typically used to include a Toolip
   */
  labelAfter?: ReactNode;
  /**
   * Maximum number the input can take. When this number equals the input value, the plus button becomes disabled.
   */
  max?: number;
  /**
   * Minimum number the input can take. When this number equals the input value, the minus button becomes disabled.
   */
  min?: number;
  /**
   * Screen reader instruction text for minus button. Example: "add one adult passenger"
   */
  minusButtonText: string;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Screen reader instruction text for plus button. Example: "subtract one bag"
   */
  plusButtonText: string;
  /**
   * Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive
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
   * The number value of the Counter input
   */
  value?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Counter: React.FC<Props> = ({
  className,
  disabled,
  min,
  max,
  readOnly,
  ariaDescribedBy,
  ariaLabelledBy,
  hideLabel,
  isError,
  fieldNote,
  id,
  label,
  minusButtonText = 'Subtract 1',
  optionalLabel,
  plusButtonText = 'Add 1',
  required = true,
  requiredLabel,
  labelAfter,
  value,
  ...other
}) => {
  const [count, setCountState] = useState(
    value !== undefined ? parseInt(value) : 1,
  );
  const [idVar, setId] = useState();
  const [ariaLabelledByVar, setAriaLabelledBy] = useState();
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();

  useEffect(() => {
    setId(id || nanoid());
    setAriaLabelledBy(ariaLabelledBy || nanoid());
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, [ariaDescribedBy, ariaLabelledBy, fieldNote, id]);

  function onIncrease(e) {
    e.preventDefault();
    setCountState(count + 1);
  }

  function onDecrease(e) {
    e.preventDefault();
    setCountState(count - 1);
  }

  function onChange(e) {
    setCountState(e.target.value.replace(/\D/, ''));
  }

  const componentClassName = clsx(styles['counter'], className, {
    [styles['eds-is-error']]: isError,
    [styles['eds-is-disabled']]: disabled,
  });
  return (
    <div className={componentClassName} {...other}>
      <Label
        className={styles['counter__label']}
        htmlFor={idVar}
        text={label}
        hideLabel={hideLabel}
        labelAfter={labelAfter}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
      />

      <div className={styles['counter__body']}>
        <Button
          className={styles['counter__btn']}
          variant="bare"
          iconPosition="after"
          iconName="minus"
          hideText={true}
          text={minusButtonText}
          disabled={disabled || (min !== undefined && count === min)}
          onClick={(e) => onDecrease(e)}
        />
        <TextInput
          className={styles['counter__input']}
          type="text"
          pattern="[0-9]*"
          min={min}
          max={max}
          disabled={disabled}
          readOnly={readOnly}
          aria-live="assertive"
          id={idVar}
          value={count}
          onChange={(e) => onChange(e)}
          aria-labelledby={ariaLabelledByVar}
          ariaDescribedBy={ariaDescribedByVar}
        />
        <Button
          className={styles['counter__btn']}
          variant="bare"
          iconPosition="after"
          iconName="plus"
          hideText={true}
          text={plusButtonText}
          disabled={disabled || (max !== undefined && count === max)}
          onClick={(e) => onIncrease(e)}
        />
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['counter-field__note']}
          id={ariaDescribedByVar}
        >
          {fieldNote}
        </FieldNote>
      )}
      <div id={ariaLabelledByVar} className={styles['u-is-vishidden']}>
        {count + ' ' + label}
      </div>
    </div>
  );
};
