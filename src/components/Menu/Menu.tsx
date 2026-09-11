import {
  Menu as HeadlessMenu,
  MenuItem as HeadlessMenuItem,
  MenuItems as HeadlessMenuItems,
  MenuButton as HeadlessMenuButton,
  MenuSection as HeadlessMenuSection,
  MenuHeading as HeadlessMenuHeading,
  MenuSeparator as HeadlessMenuSeparator,
} from '@headlessui/react';

import clsx from 'clsx';
import type {
  ReactNode,
  MouseEventHandler,
  HTMLAttributeAnchorTarget,
} from 'react';
import React from 'react';

import {
  assertNoRemovedIconProp,
  type WithRemovedIconProps,
} from '../../util/logging';
import type { ExtractProps } from '../../util/utility-types';

import Button from '../Button';

import { hasSlotContent, useSemanticIcon } from '../Icon';

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
};

export type MenuSeparatorProps = ExtractProps<typeof HeadlessMenuSeparator>;
export type MenuPlainButtonProps = ExtractProps<typeof HeadlessMenuButton>;
export type MenuHeadingProps = ExtractProps<typeof HeadlessMenuHeading>;
export type MenuSectionProps = ExtractProps<typeof HeadlessMenuSection>;
export type MenuItemsProps = ExtractProps<typeof HeadlessMenuItems>;

export type MenuItemProps = ExtractProps<typeof HeadlessMenuItem> &
  PopoverListItemProps & {
    // Component API
    anchor?: MenuItemsProps['anchor'];
    /**
     * Target URL for the menu item action
     */
    href?: string;
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
 * ## Usage
 *
 * | Type/Use | Description | Example |
 * |----------|-------------|---------|
 * | Dropdown | A list of actions or links that appears when a button or label is clicked. | Filter selectors; user profile actions; navigation inside buttons. |
 * | Context | Appears on right-click or long-press; offers contextual options. | File actions; custom user interactions. |
 * | Hamburger | Collapsible navigation menu, often hidden behind an icon. | Mobile nav; space-constrained UIs. |
 * | Overflow/More | Compact menu for additional actions, often shown as "⋮" or "...". | Table row actions; toolbar options. |
 *
 * ## Interaction
 *
 * The most common trigger for a Menu is a button with a chevron. An icon-only button might also trigger a Menu, and designers can define a custom trigger.
 *
 * ## Content & Accessibility
 *
 * ### Do's
 *
 * * Use short, precise labels.
 * * Place the most-used options at the top of the menu.
 * * Group similar commands, and order meaningfully in long menus using dividers between sections.
 *
 * ### Don'ts
 *
 * * Overload menus; try to stay below 12 options in a menu.
 * * Use helper text with menu options unless absolutely necessary.
 * * Truncate menu items unless absolutely necessary. If truncation is required, use a tooltip to reveal the full text on hover.
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
const MenuButton = (props: MenuButtonProps) => {
  const {
    children,
    className,
    // TODO(next-major): remove these two, with the asserts below.
    icon: removedIcon,
    trailingContent: removedTrailingContent,
    ...other
  } = props as WithRemovedIconProps<
    MenuButtonProps,
    'icon' | 'trailingContent'
  >;

  // TODO(next-major): remove.
  assertNoRemovedIconProp('Menu.Button', 'icon', 'expand', removedIcon);
  // TODO(next-major): remove.
  assertNoRemovedIconProp(
    'Menu.Button',
    'trailingContent',
    'expand',
    removedTrailingContent,
  );

  const buttonClassNames = clsx(styles['menu__button'], className);

  // The chevron is semantic: it marks the button as the thing that expands the menu, and
  // reads as that role only if it looks the same on every menu in the app. It comes from
  // `IconProvider` for that reason, and not from a prop on this button.
  const expandIcon = useSemanticIcon('expand');

  return (
    <HeadlessMenuButton as={React.Fragment}>
      <Button
        // Spread first, so nothing reaching this component can displace the props below it.
        // `Button` still takes an `icon`, so an `icon` arriving here — from JavaScript that
        // has not run the codemod, or a dynamic spread — used to land after this one and win,
        // quietly putting the button back to a per-instance icon.
        {...other}
        className={buttonClassNames}
        icon={expandIcon}
        // A provider can turn the role off with `null`. The icon then renders nothing, but
        // the right-hand layout would still reserve its padding and leave a gap, so the
        // layout follows whether there is anything to lay out.
        iconLayout={hasSlotContent(expandIcon) ? 'right' : 'none'}
        rank="primary"
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
  <HeadlessMenuSeparator {...props} __type="separator" as={PopoverListItem} />
);

/**
 * Adds an accessible label to a `MenuSection`.
 *
 * @see https://headlessui.com/react/menu#menu-heading
 */
const MenuHeading = (props: MenuHeadingProps) => (
  <HeadlessMenuHeading {...props} __type="label" as={PopoverListItem} />
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
 * An individual option that represents an action in the menu. Can contain leading content, label, sublabel, and action (onClick).
 *
 * NOTE: for menus, all menu items should fill the leading slot, or none should; mixing the two is discouraged.
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
