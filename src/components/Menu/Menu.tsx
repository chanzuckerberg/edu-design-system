import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import type { MouseEventHandler } from 'react';

import type { ExtractProps } from '../../util/utility-types';

import type { ButtonProps } from '../Button';
import Button from '../Button';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import PopoverContainer from '../PopoverContainer';
import PopoverListItem from '../PopoverListItem';
import styles from './Menu.module.css';

// Note: added className here to prevent private interface collision within HeadlessUI
export type MenuProps = ExtractProps<typeof HeadlessMenu> & {
  /**
   * Allow custom classes to be applied to the menu container.
   */
  className?: string;
};

export type MenuItemProps = ExtractProps<typeof HeadlessMenu.Item> & {
  /**
   * Allow custom classes to be applied to the menu container.
   */
  className?: string;
  /**
   * Target URL for the menu item action
   */
  href?: string;
  /**
   * Icons are able to appear next to each Option in the Options list if it is relevant; before using any icons, please refer to the appropriate icon usage guidelines
   */
  icon?: IconName;
  /**
   * Configurable action for the menu item action. If both `href` and `onClick` are used, `onClick` takes precedent.
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type MenuButtonProps = Omit<
  ExtractProps<typeof HeadlessMenu.Button>,
  // we want Button children
  'children'
> &
  ButtonProps & {
    /**
     * Show decorative downward chevron icon after Menu Button content.
     * Defaults to true.
     */
    showExpandIcon?: boolean;
  };
export type MenuItemsProps = ExtractProps<typeof HeadlessMenu.Items>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Menu} from "@chanzuckerberg/eds";`
 *
 * A dropdown that reveals or hides a list of actions
 */
export const Menu = ({ className, ...other }: MenuProps) => {
  const menuClassNames = clsx(className, styles['menu']);
  return <HeadlessMenu as="div" className={menuClassNames} {...other} />;
};

/**
 * A button that when clicked, shows or hides the Options
 * Refer to Button documentation for more style variants.
 */
const MenuButton = ({
  children,
  className,
  showExpandIcon = true,
  status,
  ...other
}: MenuButtonProps) => {
  const buttonClassNames = clsx(styles['menu__button'], className);
  return (
    <HeadlessMenu.Button
      as={Button}
      className={buttonClassNames}
      status={status || 'neutral'}
      {...other}
    >
      <>
        {children}
        {showExpandIcon && (
          <Icon
            className={styles['menu__button--icon']}
            name="expand-more"
            purpose="decorative"
            size="1.25rem"
          />
        )}
      </>
    </HeadlessMenu.Button>
  );
};

/**
 * A list of actions that are revealed in the menu
 *
 * @param props Props used on the set of menu items
 * @see https://headlessui.com/react/menu#menu-items
 */
const MenuItems = (props: MenuItemsProps) => (
  <HeadlessMenu.Items
    as={PopoverContainer}
    className={clsx(styles['menu__popover'])}
    {...props}
  />
);

/**
 * An individual option that represent an action in the menu
 */
const MenuItem = ({
  children,
  className,
  href,
  icon,
  onClick,
  ...other
}: MenuItemProps) => {
  // If we have an event handler, avoid navigation by discarding the href
  const destinationUrl = !onClick ? href : undefined;
  return (
    <HeadlessMenu.Item {...other}>
      {({ active, disabled }) => {
        const listItemView = (
          <PopoverListItem
            active={active}
            className={className}
            disabled={disabled}
            icon={icon}
          >
            {children as React.ReactNode}
          </PopoverListItem>
        );
        return disabled ? (
          listItemView
        ) : (
          <a
            className={clsx(styles['menu__item'])}
            href={destinationUrl}
            onClick={onClick}
          >
            {listItemView}
          </a>
        );
      }}
    </HeadlessMenu.Item>
  );
};

Menu.Button = MenuButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;
