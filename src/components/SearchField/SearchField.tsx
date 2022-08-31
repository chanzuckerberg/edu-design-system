import clsx from 'clsx';
import React from 'react';
import styles from './SearchField.module.css';
import Icon from '../Icon';
import TextInput, { TextInputProps } from '../TextInput';

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchField} from "@chanzuckerberg/eds";
 * ```
 *
 * A search TextInput component styled for use with the SearchBar.
 */
export const SearchField = ({
  className,
  disabled,
  ...other
}: TextInputProps) => {
  const inputClassName = clsx(styles['search-field__input'], className);
  const iconClassName = clsx(
    styles['search-field__icon'],
    disabled && styles['search-field__icon--disabled'],
  );

  return (
    <div className={styles['search-field']}>
      <TextInput
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
