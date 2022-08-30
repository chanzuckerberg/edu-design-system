import clsx from 'clsx';
import React from 'react';
import styles from './SearchBar.module.css';
import SearchButton from '../SearchButton';
import SearchField from '../SearchField';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchBar} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const SearchBar = ({ className, disabled }: Props) => {
  const componentClassName = clsx(styles['search-bar'], className);

  return (
    <div className={componentClassName}>
      <SearchField disabled={disabled} />
      <SearchButton disabled={disabled} />
    </div>
  );
};

SearchBar.InputField = SearchField;
SearchBar.Button = SearchButton;
