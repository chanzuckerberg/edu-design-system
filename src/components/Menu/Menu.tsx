import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import type { ReactNode, MouseEventHandler } from 'react';
import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePopper } from 'react-popper';

import type { ExtractProps } from '../../util/utility-types';

import Button from '../Button';
import { type IconName } from '../Icon';

import {
  PopoverContainerV2 as PopoverContainer,
  defaultPopoverModifiers,
} from '../PopoverContainer';
import type { PopoverContext, PopoverOptions } from '../PopoverContainer';

import PopoverListItem from '../PopoverListItem';
import styles from './Menu.module.css';

// Note: added className here to prevent private interface collision within HeadlessUI
export type MenuProps = ExtractProps<typeof HeadlessMenu> &
  PopoverOptions & {
    // TODO: document children?
    /**
     * Allow custom classes to be applied to the menu container.
     */
    className?: string;
  };

export type MenuItemProps = ExtractProps<typeof HeadlessMenu.Item> & {
  // Component API
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

export type MenuPlainButtonProps = ExtractProps<typeof HeadlessMenu.Button>;

export type MenuItemsProps = ExtractProps<typeof HeadlessMenu.Items>;

type MenuContextType = PopoverContext;

const MenuContext = React.createContext<MenuContextType>({});

/**
 * `import {Menu} from "@chanzuckerberg/eds";`
 *
 * A dropdown that reveals or hides a list of actions.
 */
export const Menu = ({
  className,
  placement = 'bottom-start',
  modifiers = defaultPopoverModifiers,
  strategy,
  onFirstUpdate,
  ...other
}: MenuProps) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles: popperStyles, attributes: popperAttributes } = usePopper(
    referenceElement,
    popperElement,
    { placement, modifiers, strategy, onFirstUpdate },
  );
  const menuClassNames = clsx(className, styles['menu']);
  return (
    <MenuContext.Provider
      value={{
        setReferenceElement: setReferenceElement as React.Dispatch<
          React.SetStateAction<Element | null | undefined>
        >,
        setPopperElement: setPopperElement as React.Dispatch<
          React.SetStateAction<HTMLElement | null | undefined>
        >,
        popperStyles: popperStyles.popper,
        popperAttributes: popperAttributes.popper,
      }}
    >
      <HeadlessMenu as="div" className={menuClassNames} {...other} />
    </MenuContext.Provider>
  );
};

/**
 * A styled button that when clicked, shows or hides the Options.
 */
const MenuButton = ({
  children,
  className,
  icon = 'chevron-down',
  ...other
}: MenuButtonProps) => {
  const buttonClassNames = clsx(styles['menu__button'], className);
  const { setReferenceElement } = useContext(MenuContext);

  return (
    <HeadlessMenu.Button as={React.Fragment} ref={setReferenceElement}>
      <Button
        className={buttonClassNames}
        icon={icon}
        iconLayout="right"
        rank="primary"
        {...other}
      >
        {children}
      </Button>
    </HeadlessMenu.Button>
  );
};

/**
 * A minimally styled button that when clicked, shows or hides the Options.
 */
const MenuPlainButton = ({ className, ...other }: MenuPlainButtonProps) => {
  const buttonClassNames = clsx(className);
  const { setReferenceElement } = useContext(MenuContext);

  return (
    <HeadlessMenu.Button
      className={buttonClassNames}
      ref={setReferenceElement}
      {...other}
    />
  );
};

/**
 * A list of actions that are revealed in the menu
 *
 * @param props Props used on the set of menu items
 * @see https://headlessui.com/react/menu#menu-items
 */
const MenuItems = (props: MenuItemsProps) => {
  const { setPopperElement, popperStyles, popperAttributes } =
    useContext(MenuContext);
  const optionProps = {
    as: PopoverContainer,
    ref: setPopperElement,
    style: popperStyles,
    ...props,
    ...popperAttributes,
  };
  if (typeof document !== 'undefined') {
    return (
      <>
        {createPortal(<HeadlessMenu.Items {...optionProps} />, document.body)}
      </>
    );
  }
  return null;
};

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
  return (
    <HeadlessMenu.Item {...other}>
      {({ active, disabled }) => {
        const listItemView = (
          <PopoverListItem
            className={className}
            icon={icon}
            isDisabled={disabled}
            isFocused={active}
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
    </HeadlessMenu.Item>
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
