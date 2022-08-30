import clsx from 'clsx';
import React from 'react';
import styles from './SearchButton.module.css';
import Button from '../Button';

export type SearchButtonProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchButton} from "@chanzuckerberg/eds";
 * ```
 *
 * A button styled for use with the SearchBar.
 */
export const SearchButton = ({ className, ...other }: SearchButtonProps) => {
  const componentClassName = clsx(styles['search-button'], className);

  return (
    <Button className={componentClassName} variant="primary" {...other}>
      Search
    </Button>
  );
};
