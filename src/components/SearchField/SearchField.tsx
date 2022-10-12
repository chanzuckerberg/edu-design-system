import clsx from 'clsx';
import React from 'react';
import Icon from '../Icon';
import InputField, {InputFieldProps} from '../InputField';
import styles from './SearchField.module.css';

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchField} from "@chanzuckerberg/eds";
 * ```
 *
 * A search InputField component styled for use with the SearchBar.
 */
export const SearchField = ({
  className,
  disabled,
  ...other
}: InputFieldProps) => {
  const inputClassName = clsx(styles['search-field__input'], className);
  const iconClassName = clsx(
    styles['search-field__icon'],
    disabled && styles['search-field__icon--disabled'],
  );

  return (
    <div className={styles['search-field']}>
      <InputField
        className={inputClassName}
        disabled={disabled}
        placeholder="Search"
        type="search"
        {...other}
      />
      <Icon
        className={iconClassName}
        name="search"
        purpose="informative"
        size="1.25rem"
        title="search"
      />
    </div>
  );
};
