import clsx from 'clsx';
import type { MouseEventHandler } from 'react';
import React from 'react';
import Button from '../Button';
import styles from './SearchButton.module.css';

export type SearchButtonProps = {
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

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {SearchButton} from "@chanzuckerberg/eds";`
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
