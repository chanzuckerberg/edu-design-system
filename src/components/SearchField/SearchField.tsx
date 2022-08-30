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
export const SearchField = ({ className, ...other }: TextInputProps) => {
  const componentClassName = clsx(styles['search-field'], className);

  return (
    <>
      <TextInput
        className={componentClassName}
        placeholder="Search"
        type="search"
        {...other}
      />
      <Icon
        className={styles['search-field__icon']}
        name="search"
        purpose="informative"
        size="1.25rem"
        title="search"
      />
    </>
  );
};
