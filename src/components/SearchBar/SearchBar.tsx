import clsx from 'clsx';
import React, {ReactNode} from 'react';
import SearchButton from '../SearchButton';
import SearchField from '../SearchField';
import styles from './SearchBar.module.css';

export type Props = {
  /**
   * SearchBar subcomponents to be wrapped.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchBar} from "@chanzuckerberg/eds";
 * ```
 *
 * Input field and button used for searching through various data fields.
 */
export const SearchBar = ({children, className}: Props) => {
  const componentClassName = clsx(styles['search-bar'], className);

  return <div className={componentClassName}>{children}</div>;
};

SearchBar.InputField = SearchField;
SearchBar.Button = SearchButton;
