import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { useUID } from 'react-uid';
import styles from './Counter.module.css';
import Button from '../../components/Button';
import FieldNote from '../../components/FieldNote';
import Icon from '../../components/Icon';
import Label from '../../components/Label';
import TextInput from '../../components/TextInput';

export interface Props {
  'aria-describedby'?: string /* HTML id of the helper text used to describe the component */;
  'aria-labelledby'?: string /* HTML id of the helper text to connect label to input */;
  children?: ReactNode /* Child node(s) that can be nested inside component */;
  className?: string /* CSS class names that can be appended to the component.*/;
  disabled?: boolean /* Disables the field and prevents editing the contents */;
  fieldNote?: string /* FieldNote Used as helper text or error message */;
  hideLabel?: boolean /* Toggles the visibility of the label. If hidden, the label text will still be accessible to assistive technologies */;
  id?: string /* HTML id for the component */;
  isError?: boolean /* Error state of the form field */;
  label?: string /* HTML label text */;
  labelAfter?: ReactNode /* Slot for node to appear directly after field label. Typically used to include a Toolip */;
  max?: number /* Maximum number the input can take. When this number equals the input value, the plus button becomes disabled. */;
  min?: number /* Minimum number the input can take. When this number equals the input value, the minus button becomes disabled. */;
  minusButtonText: string /* Screen reader instruction text for minus button. Example: "add one adult passenger" */;
  optionalLabel?: string /* String for the optional label. By default it is '(optional)' */;
  plusButtonText: string /* Screen reader instruction text for plus button. Example: "subtract one bag" */;
  readOnly?: boolean /* Toggles the form control's interactivity. When `readOnly` is set to `true`, the form control is not interactive */;
  required?: boolean /* Indicates that field is required for form to be successfully submitted */;
  requiredLabel?: string /* String for the required label to add additional information if needed. */;
  value?: number /* The number value of the Counter input */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {Counter} from "@chanzuckerberg/eds";
 * ```
 *
 * Counter component is used as button to add/subtract field items, disabled based on the error props passed in from children
 */
export const Counter = ({
  className,
  disabled,
  min,
  max,
  readOnly,
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
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
  value = 1,
  ...other
}: Props) => {
  const [count, setCountState] = useState(value);
  const generatedId = useUID();
  const idVar = id || generatedId;

  const generatedAriaLabelledById = useUID();
  const ariaLabelledByVar = ariaLabelledBy || generatedAriaLabelledById;

  const generatedAriaDescribedById = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedAriaDescribedById
    : undefined;

  // TODO: improve `any` type
  function onIncrease(e: any) {
    e.preventDefault();
    setCountState(count + 1);
  }

  // TODO: improve `any` type
  function onDecrease(e: any) {
    e.preventDefault();
    setCountState(count - 1);
  }

  // TODO: improve `any` type
  function onChange(e: any) {
    setCountState(e.target.value.replace(/\D/, ''));
  }

  const componentClassName = clsx(
    styles['counter'],
    isError && styles['counter--error'],
    className,
  );
  return (
    <div className={componentClassName} {...other}>
      {label && (
        <Label
          className={styles['counter__label']}
          hideLabel={hideLabel}
          htmlFor={idVar}
          labelAfter={labelAfter}
          optionalLabel={optionalLabel}
          required={required}
          requiredLabel={requiredLabel}
          text={label}
        />
      )}

      <div className={styles['counter__body']}>
        <Button
          className={styles['counter__btn']}
          disabled={disabled || (min !== undefined && count === min)}
          onClick={onDecrease}
          variant="icon"
        >
          <Icon name="remove" purpose="informative" title={minusButtonText} />
        </Button>
        <TextInput
          aria-describedby={ariaDescribedByVar}
          aria-labelledby={ariaLabelledByVar}
          aria-live="assertive"
          className={styles['counter__input']}
          disabled={disabled}
          id={idVar}
          isError={isError}
          max={max}
          min={min}
          onChange={onChange}
          pattern="[0-9]*"
          readOnly={readOnly}
          type="text"
          value={count}
        />
        <Button
          className={styles['counter__btn']}
          disabled={disabled || (max !== undefined && count === max)}
          onClick={onIncrease}
          variant="icon"
        >
          <Icon name="add" purpose="informative" title={plusButtonText} />
        </Button>
      </div>
      {fieldNote && (
        <FieldNote id={ariaDescribedByVar} isError={isError}>
          {fieldNote}
        </FieldNote>
      )}
      <div className={styles['u-is-vishidden']} id={ariaLabelledByVar}>
        {count + ' ' + label}
      </div>
    </div>
  );
};
