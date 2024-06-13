import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import Button from '../Button';
import Icon, { type IconName } from '../Icon';
import Input, { type InputProps } from '../Input';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  /**
   * SearchBar sub-components to be wrapped.
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

type SearchButtonProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the button and prevents button use.
   */
  disabled?: boolean;
  /**
   * On click handler for component
   */
  onClick?: MouseEventHandler;
};

type SearchFieldProps = InputProps & {
  icon?: Extract<IconName, 'search'>;
};

/**
 * A search Input component styled for use with the SearchBar.
 */
const SearchField = ({
  className,
  disabled,
  icon = 'search',
  ...other
}: SearchFieldProps) => {
  const inputClassName = clsx(styles['search-field__input'], className);
  const iconClassName = clsx(
    styles['search-field__icon'],
    disabled && styles['search-field__icon--disabled'],
  );

  return (
    <div className={styles['search-field']}>
      <Input
        className={inputClassName}
        disabled={disabled}
        placeholder="Search"
        type="search"
        {...other}
      />
      <Icon
        className={iconClassName}
        name={icon}
        purpose="informative"
        size="1.25rem"
        title="search"
      />
    </div>
  );
};

/**
 * A button styled for use with the SearchBar.
 */
const SearchButton = ({ className, disabled, ...other }: SearchButtonProps) => {
  const componentClassName = clsx(styles['search-button'], className);

  return (
    <Button
      className={componentClassName}
      isDisabled={disabled}
      rank="primary"
      {...other}
    >
      Search
    </Button>
  );
};

/**
 * In Review: This component is in design review and is subject to change.
 *
 * `import {SearchBar} from "@chanzuckerberg/eds";`
 *
 * Input field and button used for searching through various data fields.
 */
export const SearchBar = ({ children, className }: SearchBarProps) => {
  const componentClassName = clsx(styles['search-bar'], className);

  return <div className={componentClassName}>{children}</div>;
};

SearchBar.displayName = 'SearchBar';
SearchField.displayName = 'Searchbar.Field';
SearchButton.displayName = 'SearchBar.Button';

SearchBar.Field = SearchField;
SearchBar.Button = SearchButton;
