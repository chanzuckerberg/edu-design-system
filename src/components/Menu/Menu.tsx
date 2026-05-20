import {
  Menu as HeadlessMenu,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
  MenuButton as HeadlessMenuButton,
  MenuSection as HeadlessMenuSection,
  MenuHeading as HeadlessMenuHeading,
  MenuSeparator as HeadlessMenuSeparator,
} from '@headlessui/react';
import type { AnchorProps } from '@headlessui/react/dist/internal/floating';

import clsx from 'clsx';
import type {
  ReactNode,
  MouseEventHandler,
  HTMLAttributeAnchorTarget,
} from 'react';
import React from 'react';

import type { ExtractProps } from '../../util/utility-types';

import Button from '../Button';
import { type IconName } from '../Icon';

import PopoverContainer from '../PopoverContainer';

import PopoverListItem from '../PopoverListItem';
import type { PopoverListItemProps } from '../PopoverListItem/PopoverListItem';
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
  icon?: Extract<IconName, 'chevron-down'>; // TODO(next-major): change to `leadingContent`
};

export type MenuSeparatorProps = ExtractProps<typeof HeadlessMenuSeparator>;
export type MenuPlainButtonProps = ExtractProps<typeof HeadlessMenuButton>;
export type MenuHeadingProps = ExtractProps<typeof HeadlessMenuHeading>;
export type MenuSectionProps = ExtractProps<typeof HeadlessMenuSection>;
export type MenuItemsProps = ExtractProps<typeof HeadlessMenuItems>;

export type MenuItemProps = ExtractProps<typeof HeadlessMenuItem> &
  PopoverListItemProps & {
    // Component API
    anchor?: AnchorProps;
    /**
     * Target URL for the menu item action
     */
    href?: string;
    /**
     * Icons are able to appear next to each Option in the Options list if it is relevant; before using any icons, please refer to the appropriate icon usage guidelines. Deprecated in favor of `leadingContent`
     * @deprecated
     */
    icon?: IconName;
    /**
     * Configurable action for the menu item upon click
     */
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    __type?: PopoverListItemProps['__type'];
    /**
     * Specify the target of the link if present
     */
    target?: HTMLAttributeAnchorTarget;
  };

/**
 * `import {Menu} from "@chanzuckerberg/eds";`
 *
 * A popover that reveals or hides a list of actions. Menu items can contain icons (all should contain one, or none should), and other contents provided by `PopoverListItem`.
 */
export const Menu = ({ className, ...other }: MenuProps) => {
  const menuClassNames = clsx(className, styles['menu']);
  return <HeadlessMenu as="div" className={menuClassNames} {...other} />;
};

/**
 * A styled button that when clicked, shows or hides the Options.
 *
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
 *
 * @see https://headlessui.com/react/menu#menu-button
 */
const MenuPlainButton = ({ className, ...other }: MenuPlainButtonProps) => (
  <HeadlessMenuButton className={className} {...other} />
);

/**
 * Divides a list of `Menu.Item` components into sections with proper accessibility semantics.
 *
 * @see https://headlessui.com/react/menu#menu-section
 */
const MenuSection = (props: MenuSectionProps) => (
  <HeadlessMenuSection {...props} />
);

/**
 * Separates two `Menu.Section` components, with proper accessibility semantics.
 *
 * @see https://headlessui.com/react/menu#menu-separator
 */
const MenuSeparator = (props: MenuSeparatorProps) => (
  <HeadlessMenuSeparator __type="separator" as={PopoverListItem} />
);

/**
 * Adds an accessible label to a `MenuSection`.
 *
 * @see https://headlessui.com/react/menu#menu-heading
 */
const MenuHeading = (props: MenuHeadingProps) => (
  <HeadlessMenuHeading __type="label" as={PopoverListItem}>
    {props.children as ReactNode}
  </HeadlessMenuHeading>
);

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
 * An individual option that represent an action in the menu. Can contain an icon, label, sublabel, and action (onClick).
 *
 * NOTE: for menus, all menu items should have an icon, or no icon; mixing icon state is discouraged.
 *
 * @see https://headlessui.com/react/menu#menu-item
 */
const MenuItem = ({
  children,
  className,
  href,
  onClick,
  target,
  // Props from PopoverListItem
  icon,
  isDestructiveAction,
  isFocused,
  isDisabled,
  leadingContent,
  subLabel,
  trailingContent,
  __type = 'listitem',
  ...other
}: MenuItemProps) => {
  return __type === 'separator' ||
    __type === 'label' ||
    __type === 'caption' ? (
    <PopoverListItem
      __type={__type}
      isDestructiveAction={isDestructiveAction}
      isDisabled={isDisabled}
      isFocused={isFocused}
      leadingContent={leadingContent}
      subLabel={subLabel}
      trailingContent={trailingContent}
    >
      {children}
    </PopoverListItem>
  ) : (
    <HeadlessMenuItem {...other}>
      {({ focus, disabled }) => {
        const listItemView = (
          <PopoverListItem
            __type={__type}
            className={className}
            icon={icon}
            isDestructiveAction={isDestructiveAction}
            isDisabled={disabled}
            isFocused={focus}
            leadingContent={leadingContent}
            subLabel={subLabel}
            trailingContent={trailingContent}
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
            target={target}
          >
            {listItemView}
          </a>
        );
      }}
    </HeadlessMenuItem>
  );
};

MenuPlainButton.displayName = 'Menu.PlainButton';
MenuSeparator.displayName = 'Menu.Separator';
MenuSection.displayName = 'Menu.Section';
MenuHeading.displayName = 'Menu.Heading';
MenuButton.displayName = 'Menu.Button';
MenuItems.displayName = 'Menu.Items';
MenuItem.displayName = 'Menu.Item';
Menu.displayName = 'Menu';

Menu.PlainButton = MenuPlainButton;
Menu.Separator = MenuSeparator;
Menu.Heading = MenuHeading;
Menu.Section = MenuSection;
Menu.Button = MenuButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;
