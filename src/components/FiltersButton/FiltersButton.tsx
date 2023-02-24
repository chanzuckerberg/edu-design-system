import clsx from 'clsx';
import React, { forwardRef } from 'react';
import Button, { type ButtonProps } from '../Button';
import type { VariantStatus } from '../ClickableStyle';
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
} & Omit<ButtonProps, 'children' | 'variant' | 'status'>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {FiltersButton} from "@chanzuckerberg/eds";`
 *
 * Default button for triggering Filters components.
 */
export const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  ({ className, hasSelectedFilters, triggerText, ...other }, ref) => {
    const componentClassName = clsx(styles['filters-button'], className);

    const variantStatus: VariantStatus = hasSelectedFilters
      ? {
          variant: 'primary',
          status: 'brand',
        }
      : {
          variant: 'secondary',
          status: 'neutral',
        };

    return (
      <Button
        className={componentClassName}
        ref={ref}
        {...other}
        {...variantStatus}
      >
        <Icon name="filter-list" purpose="decorative" size="1.5rem" />
        {triggerText}
      </Button>
    );
  },
);

FiltersButton.displayName = 'FiltersButton';
