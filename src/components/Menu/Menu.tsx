import {
  Menu as HeadlessMenu,
  MenuButton as HeadlessMenuButton,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
} from '@headlessui/react';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';

import clsx from 'clsx';
import type { ReactNode, MouseEventHandler } from 'react';
import React from 'react';

import type { ExtractProps } from '../../util/utility-types';

import Button from '../Button';
import { type IconName } from '../Icon';

import PopoverContainer from '../PopoverContainer';

import PopoverListItem from '../PopoverListItem';
import styles from './Menu.module.css';

// Note: added className here to prevent private API collision within HeadlessUI
export type MenuProps = ExtractProps<typeof HeadlessMenu> & {
  /**
   * Allow custom classes to be applied to the menu container.
   */
  className?: string;
};

export type MenuButtonProps = {
  // Component API
  /**
   * The button contents placed left of the chevron icon.
   */
  children: string;
  /**
   * Allow custom classes to be applied to the menu button.
   */
  className?: string;
  /**
   * Icon override for component. Default is 'chevron-down'
   */
  icon?: Extract<IconName, 'chevron-down'>;
};

export type MenuPlainButtonProps = ExtractProps<typeof HeadlessMenuButton>;

export type MenuItemsProps = ExtractProps<typeof HeadlessMenuItems>;

export type MenuItemProps = ExtractProps<typeof HeadlessMenuItem> & {
  // Component API
  anchor?: AnchorProps;
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
   * Configurable action for the menu item upon click
   */
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/**
 * `import {Menu} from "@chanzuckerberg/eds";`
 *
 * A dropdown that reveals or hides a list of actions.
 */
export const Menu = ({ className, ...other }: MenuProps) => {
  const menuClassNames = clsx(className, styles['menu']);
  return <HeadlessMenu as="div" className={menuClassNames} {...other} />;
};

/**
 * A styled button that when clicked, shows or hides the Options.
 * @see https://headlessui.com/react/menu#menu-button
 */
const MenuButton = ({
  children,
  className,
  icon = 'chevron-down',
  ...other
}: MenuButtonProps) => {
  const buttonClassNames = clsx(styles['menu__button'], className);
  return (
    <HeadlessMenuButton as={React.Fragment}>
      <Button
        className={buttonClassNames}
        icon={icon}
        iconLayout="right"
        rank="primary"
        {...other}
      >
        {children}
      </Button>
    </HeadlessMenuButton>
  );
};

/**
 * A minimally styled button that when clicked, shows or hides the Options.
 */
const MenuPlainButton = ({ className, ...other }: MenuPlainButtonProps) => {
  return <HeadlessMenuButton className={className} {...other} />;
};

/**
 * A list of actions that are revealed in the menu
 *
 * @param props Props used on the set of menu items
 *
 * @see https://headlessui.com/react/menu#menu-items
 */
const MenuItems = ({
  anchor = { to: 'bottom start', gap: 12 },
  ...other
}: MenuItemsProps) => {
  return (
    <HeadlessMenuItems
      anchor={anchor}
      as={PopoverContainer}
      modal={false}
      {...other}
    />
  );
};

/**
 * An individual option that represent an action in the menu
 *
 * @see https://headlessui.com/react/menu#menu-item
 */
const MenuItem = ({
  children,
  className,
  href,
  icon,
  onClick,
  ...other
}: MenuItemProps) => {
  return (
    <HeadlessMenuItem {...other}>
      {({ focus, disabled }) => {
        const listItemView = (
          <PopoverListItem
            className={className}
            icon={icon}
            isDisabled={disabled}
            isFocused={focus}
          >
            {children as ReactNode}
          </PopoverListItem>
        );
        return disabled ? (
          listItemView
        ) : (
          <a
            className={clsx(styles['menu__item'])}
            href={href}
            onClick={onClick}
          >
            {listItemView}
          </a>
        );
      }}
    </HeadlessMenuItem>
  );
};

Menu.displayName = 'Menu';
MenuButton.displayName = 'Menu.Button';
MenuPlainButton.displayName = 'Menu.PlainButton';
MenuItems.displayName = 'Menu.Items';
MenuItem.displayName = 'Menu.Item';

Menu.Button = MenuButton;
Menu.PlainButton = MenuPlainButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;
