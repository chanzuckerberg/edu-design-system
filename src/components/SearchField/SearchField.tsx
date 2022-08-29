import clsx from 'clsx';
import React, { ChangeEventHandler } from 'react';
import styles from './SearchField.module.css';
import Button from '../Button';
import Icon from '../Icon';
import TextInput from '../TextInput';

export type Props = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
};

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {SearchField} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
 */
export const SearchField = ({ className, ...other }: Props) => {
  const componentClassName = clsx(styles['search-field'], className);

  return (
    <div className={componentClassName}>
      <TextInput
        className={styles['search-field__input']}
        placeholder="Search"
        {...other}
      />
      <Icon
        className={styles['search-field__icon']}
        name="search"
        purpose="informative"
        size="1.25rem"
        title="search"
      />
      <Button className={styles['search-field__button']} variant="primary">
        Search
      </Button>
    </div>
  );
};
