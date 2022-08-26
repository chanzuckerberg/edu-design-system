import clsx from 'clsx';
import React, { ReactNode, useState, FormEvent } from 'react';
import { allByType } from 'react-children-by-type';
import { useUID } from 'react-uid';
import styles from './RadioField.module.css';
import FieldNote from '../../components/FieldNote';
import Fieldset from '../../components/Fieldset';
import FieldsetItems from '../../components/FieldsetItems';
import FieldsetLegend from '../../components/FieldsetLegend';
import RadioFieldItem from '../RadioFieldItem';

export interface Props {
  /**
   * HTML id of the helper text used to describe the component
   */
  'aria-describedby'?: string;
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
   * HTML id for the component
   */
  id?: string;
  /**
   * Error state of the form field
   */
  isError?: boolean;
  /**
   * HTML label text
   */
  label: string;
  /**
   * Calls back with the active index
   */
  onChange?: (e?: FormEvent<HTMLElement>) => void;
  /**
   * String for the optional label. By default it is '(optional)'
   */
  optionalLabel?: '(required)' | '(optional)';
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
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {RadioField} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const RadioField = ({
  className,
  children,
  variant,
  size,
  id,
  label,
  isError,
  fieldNote,
  disabled,
  'aria-describedby': ariaDescribedBy,
  optionalLabel,
  onChange,
  ...other
}: Props) => {
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
    // TODO: improve `any` type
    radioItems().find((item: any) => item.checked),
  );

  /**
   * If the fieldNote is defined, add aria described by for accessibility
   */
  const generatedAriaDescribedById = useUID();
  const ariaDescribedByVar = fieldNote
    ? ariaDescribedBy || generatedAriaDescribedById
    : undefined;

  /**
   * Checked function for radio field items
   * 1) If onChange function passed from outside, run this when radio field item is checked
   * 2) Set the checked index value to the index of the radio field item selected
   */
  function onChecked(index: number, e: FormEvent<HTMLElement>) {
    if (onChange) {
      /* 1 */
      onChange(e);
    }
    setCheckedIndex(index); /* 2 */
  }

  /**
   * Pass in props from RadioField to each RadioFieldItem
   * TODO: improve `any` type
   */
  radioItems().map((item: any, index: number) => {
    return React.cloneElement(item, {
      checked: checkedIndex === index,
      onChange: (e) => {
        onChecked(index, e);
      },
    });
  });

  const componentClassName = clsx(
    styles['radio-field'],
    variant === 'inline' && styles['radio-field--inline'],
    size === 'sm' && styles['radio-field--sm'],
    inverted && styles['radio-field--inverted'],
    disabled && styles['radio-field--disabled'],
    className,
  );
  return (
    <Fieldset className={componentClassName} id={id} {...other}>
      <FieldsetLegend
        aria-describedby={fieldNote && ariaDescribedByVar}
        className={styles['radio-field__label']}
        optionalLabel={optionalLabel}
        text={label}
      />

      <FieldsetItems className={styles['radio-field__body']}>
        <ul className={styles['radio-field__list']}>{children}</ul>
      </FieldsetItems>
      {fieldNote && (
        <FieldNote id={ariaDescribedByVar} isError={isError}>
          {fieldNote}
        </FieldNote>
      )}
    </Fieldset>
  );
};

RadioField.Item = RadioFieldItem;
