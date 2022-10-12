import clsx from 'clsx';
import React, {forwardRef} from 'react';
import Button, {ButtonProps} from '../Button';
import Icon from '../Icon';
import styles from './FiltersButton.module.css';

export type FiltersButtonProps = {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Indicates status that filters have been selected, influencing toggle button variant.
   */
  hasSelectedFilters?: boolean;
  /**
   * Text to be placed in the button that activates the Filters.
   */
  triggerText: string;
} & Omit<ButtonProps, 'children'>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FiltersButton} from "@chanzuckerberg/eds";
 * ```
 *
 * Default button for triggering Filters components.
 */
export const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  ({className, hasSelectedFilters, triggerText, ...other}, ref) => {
    const componentClassName = clsx(styles['filters-button'], className);

    const buttonVariant = hasSelectedFilters ? 'primary' : 'secondary';
    const buttonStatus = hasSelectedFilters ? 'brand' : 'neutral';

    return (
      <Button
        className={componentClassName}
        ref={ref}
        status={buttonStatus}
        variant={buttonVariant}
        {...other}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {triggerText}
      </Button>
    );
  },
);

FiltersButton.displayName = 'FiltersButton';
