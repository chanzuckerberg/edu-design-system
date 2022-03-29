import clsx from 'clsx';
import { nanoid } from 'nanoid';
import React, {
  ChangeEventHandler,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { allByType } from 'react-children-by-type';
import styles from './RadioField.module.css';
import FieldNote from '../FieldNote';
import Legend from '../Legend';
import RadioFieldItem from '../RadioFieldItem';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  ariaDescribedBy?: any;
  /**
   * Property that checks the radio when true and unchecks it when false
   */
  checked?: boolean;
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
  fieldNote?: string | ReactNode;
  /**
   * Toggles the visibility of the legend
   */
  hideLegend?: boolean;
  /**
   * HTML id for the component
   */
  id?: string;
  /**
   * Inverted variation for dark backgrounds
   */
  inverted?: boolean;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label?: string;
  /**
   * Slot for ReactNode to appear directly after field legend. Typically used to include a Toolip
   */
  legendAfter?: ReactNode;
  /**
   * Calls back with the active index
   */
  onChange?: ChangeEventHandler;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: string;
  /**
   * Indicates that field is required for form to be successfully submitted
   */
  required?: boolean;
  /**
   * String for the required label to add additional information if needed.
   */
  requiredLabel?: string;
  /**
   * Size variations:
   * - **sm** yields a smaller radio button and text
   */
  size?: 'sm';
  /**
   * Stylistic variations:
   * - **inline** places each RadioFieldItem beside one another
   */
  variant?: 'inline';
}

/**
 * Primary UI component for user interaction
 */
export const RadioField: React.FC<Props> = ({
  className,
  children,
  variant,
  size,
  id,
  label,
  isError,
  fieldNote,
  disabled,
  inverted,
  required,
  checked,
  ariaDescribedBy,
  hideLegend,
  legendAfter,
  optionalLabel,
  requiredLabel,
  onChange,
  ...other
}) => {
  /**
   * Set children to only allow radio field items
   */
  function radioItems() {
    return allByType(children, RadioFieldItem);
  }

  /**
   * Initialize radio field items active item
   */
  const [checkedIndex, setCheckedIndex] = useState(
    radioItems().reduce(
      (acc, item, i) => (acc === null && item.checked ? i : acc),
      null,
    ),
  );

  /**
   * If the fieldNote is defined, add aria described by for accessibility
   */
  const [ariaDescribedByVar, setAriaDescribedBy] = useState();

  /**
   * Checked function for radio field items
   * 1) If onChange function passed from outside, run this when radio field item is checked
   * 2) Set the checked index value to the index of the radio field item selected
   */
  function onChecked(index, e) {
    if (onChange) {
      /* 1 */
      onChange(index);
    }
    setCheckedIndex(index); /* 2 */
  }

  useEffect(() => {
    if (fieldNote) {
      setAriaDescribedBy(ariaDescribedBy || nanoid());
    }
  }, [ariaDescribedBy, fieldNote]);

  /**
   * Pass in props from RadioField to each RadioFieldItem
   */
  radioItems().map((item, index) => {
    return React.cloneElement(item, {
      checked: checkedIndex === index,
      onChange: (e) => {
        onChecked(index, e);
      },
    });
  });

  const componentClassName = clsx(styles['radio-field'], className, {
    [styles['radio-field--inline']]: variant === 'inline',
    [styles['radio-field--sm']]: size === 'sm',
    [styles['radio-field--inverted']]: inverted === true,
    [styles['eds-is-error']]: isError,
    [styles['eds-is-disabled']]: disabled,
  });
  return (
    <fieldset className={componentClassName} id={id} {...other}>
      <Legend
        className={styles['radio-field__label']}
        hideLegend={hideLegend}
        text={label}
        required={required}
        optionalLabel={optionalLabel}
        requiredLabel={requiredLabel}
        aria-describedby={fieldNote && ariaDescribedByVar}
      />

      <div className={styles['radio-field__body']}>
        <ul className={styles['radio-field__list']}>{children}</ul>
      </div>
      {fieldNote && (
        <FieldNote
          className={styles['radio-field__note']}
          id={ariaDescribedByVar}
          inverted={inverted}
          isError={isError}
        >
          {fieldNote}
        </FieldNote>
      )}
    </fieldset>
  );
};
