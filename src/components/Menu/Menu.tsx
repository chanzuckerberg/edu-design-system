import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import type { MouseEventHandler } from 'react';

import styles from './Menu.module.css';
import type { ExtractProps } from '../../util/utility-types';

import ClickableStyle from '../ClickableStyle';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import PopoverContainer from '../PopoverContainer';
import PopoverListItem from '../PopoverListItem';

// Note: added className here to prevent private interface collision within HeadlessUI
export type MenuProps = ExtractProps<typeof HeadlessMenu> & {
  /**
   * Allow custom classes to be applied to the menu container.
   */
  className?: string;
};

export type MenuItemProps = ExtractProps<typeof HeadlessMenu.Item> & {
  href?: string;
  icon?: IconName;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type MenuButtonProps = ExtractProps<typeof HeadlessMenu.Button>;
export type MenuItemsProps = ExtractProps<typeof HeadlessMenu.Items>;

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * `import {Menu} from "@chanzuckerberg/eds";`
 *
 * Creates a list of actions which appear next to a trigger component. This should
 * be used when there is a discrete number of actions such as user navigations (e.g.,
 * a profile menu with links to settings) or a set of actions
 */
export const Menu = ({ className, ...other }: MenuProps) => {
  const menuClassNames = clsx(className, styles['menu']);
  return <HeadlessMenu as="div" className={menuClassNames} {...other} />;
};

/**
 * Trigger for the popover menu (dropdown)
 */
const MenuButton = ({ children, className, ...other }: MenuButtonProps) => {
  const buttonClassNames = clsx(styles['menu__button'], className);
  return (
    <HeadlessMenu.Button
      as={ClickableStyle}
      className={buttonClassNames}
      status="neutral"
      {...other}
    >
      {children}
      <Icon
        className={styles['menu__button--icon']}
        name="expand-more"
        purpose="decorative"
        size="1.5rem"
      />
    </HeadlessMenu.Button>
  );
};

/**
 * A set of menu items in the Menu
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
 * Individual menu items, styled with the popover list item component
 */
const MenuItem = ({
  children,
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
          <PopoverListItem active={active} disabled={disabled} icon={icon}>
            {children}
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
