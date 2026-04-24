import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Icon, { type IconName } from '../Icon';
import Text from '../Text';
import styles from './PopoverListItem.module.css';

export type PopoverListItemProps = {
  // Component API
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  __type?: 'selectitem' | 'listitem' | 'label' | 'separator' | 'caption';
  // Design API
  /**
   * Icon from the set of defined EDS icon set. This prop is deprecated in favor of `leadingContent`.
   * @deprecated
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
   * Content (icon, text, other component) to appear at the start of the list item. Recommended maximum size of 24 pixels.
   */
  leadingContent?: ReactNode;
  /**
   * Text below the main menu item call-to-action, briefly describing the menu item's function
   */
  subLabel?: ReactNode;
  /**
   * Content (icon, text, other component) to appear at the end of the list item. Recommended maximum size of 24 pixels.
   */
  trailingContent?: ReactNode;
};

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
      leadingContent,
      subLabel,
      trailingContent,
      __type,
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['popover-list-item'],
      isDisabled && styles['popover-list-item--disabled'],
      isDestructiveAction && styles['popover-list-item--destructive-action'],
      isFocused && styles['popover-list-item--focused'],
      __type && styles[`popover-list-item--type-${__type}`],
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
        {icon || leadingContent ? (
          <div className={styles['popover-list-item__leading-content']}>
            {icon && <Icon name={icon} purpose="decorative" size="24px" />}
            {leadingContent}
          </div>
        ) : (
          <div className={styles['popover-list-item__no-icon']}></div>
        )}
        <div className={styles['popover-list-item__menu-labels']}>
          {__type === 'label' ? (
            <Text
              as="div"
              className={styles['popover-list-item__label']}
              preset="overline-sm"
            >
              {children}
            </Text>
          ) : (
            <>
              <Text
                as="div"
                preset={__type === 'caption' ? 'body-xs' : 'body-md'}
              >
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
            </>
          )}
        </div>
        {trailingContent && (
          <div className={styles['popover-list-item__trailing-content']}>
            {typeof trailingContent === 'string' ? (
              <Text as="span" preset="body-xs">
                {trailingContent}
              </Text>
            ) : (
              trailingContent
            )}
          </div>
        )}
      </div>
    );
  },
);

PopoverListItem.displayName = 'PopoverListItem';
