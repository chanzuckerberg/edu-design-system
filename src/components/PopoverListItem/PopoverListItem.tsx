import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';
import styles from './PopoverListItem.module.css';

export interface PopoverListItemProps {
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  /**
   * Icon from the set of defined EDS icon set
   */
  icon?: IconName;
  /**
   * Handling behavior for whether the marked menu item is destructive or not (deletes, removes, etc.)
   */
  isDestructiveAction?: boolean;
  /**
   * Whether the component is in focus (programmatically or otherwise)
   */
  isFocused?: boolean;
  /**
   * Whether the list item is treated as disabled
   */
  isDisabled?: boolean;
  /**
   * Text below the main menu item call-to-action, briefly describing the menu item's function
   */
  subLabel?: string;
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
export const PopoverListItem = React.forwardRef<
  HTMLDivElement,
  PopoverListItemProps
>(
  (
    {
      className,
      isDestructiveAction = false,
      isDisabled = false,
      isFocused = false,
      children,
      icon,
      subLabel,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['popover-list-item'],
      isDisabled && styles['popover-list-item--disabled'],
      isDestructiveAction && styles['popover-list-item--destructive-action'],
      isFocused && styles['popover-list-item--focused'],
      className,
    );

    const ariaIsDisabled = isDisabled
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
            <Icon name={icon} purpose="decorative" size="1rem" />
          </div>
        ) : (
          <div className={styles['popover-list-item__no-icon']}></div>
        )}
        <div className={styles['popover-list-item__menu-labels']}>
          <Text as="div" preset="body-md">
            {children}
          </Text>
          {subLabel && (
            <Text
              as="div"
              className={styles['popover-list-item__sub-label']}
              preset="body-sm"
            >
              {subLabel}
            </Text>
          )}
        </div>
      </div>
    );
  },
);

PopoverListItem.displayName = 'PopoverListItem';
