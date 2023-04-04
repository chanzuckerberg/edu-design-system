import { clsx } from 'clsx';
import React from 'react';
import type { ReactNode } from 'react';

import Icon from '../Icon';
import type { IconName } from '../Icon';
import styles from './PopoverListItem.module.css';

export interface Props {
  /**
   * Whether the list item is treated as highlighted in its container
   */
  active?: boolean;
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * Whether the list item is treated as disabled
   */
  disabled?: boolean;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Icon from the set of defined EDS icon set
   */
  icon?: IconName;
}

/**
 * `import {PopoverListItem} from "@chanzuckerberg/eds";`
 *
 * This abstracts the structure of an item in a popover, when the popover contains a
 * list of items (e.g., Menus and Selects)
 * - Contains styles for when active/disabled or not
 * - contains styles for when there is an icon on the left
 *
 * Given headless implements listbox options as a renderProp, this can work for both
 * Listbox and Menu examples, in the latter case not specifying an icon
 */
export const PopoverListItem = React.forwardRef<HTMLDivElement, Props>(
  ({ active, className, disabled, children, icon, ...other }, ref) => {
    const componentClassName = clsx(
      styles['popover-list-item'],
      active && styles['popover-list-item--active'],
      disabled && styles['popover-list-item--disabled'],
      className,
    );

    const ariaIsDisabled = disabled
      ? {
          'aria-disabled': true,
        }
      : {};

    return (
      <div
        className={componentClassName}
        {...other}
        {...ariaIsDisabled}
        ref={ref}
      >
        {icon ? (
          <div className={styles['popover-list-item__icon']}>
            <Icon name={icon} purpose="decorative" size="1.5rem" />
          </div>
        ) : (
          <div className={styles['popover-list-item__no-icon']}></div>
        )}
        {children}
      </div>
    );
  },
);
