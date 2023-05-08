import { Menu as HeadlessMenu } from '@headlessui/react';
import clsx from 'clsx';
import type { MouseEventHandler } from 'react';
import { useContext, useState } from 'react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createPortal } from 'react-dom';

import { usePopper } from 'react-popper';

import type { ExtractProps } from '../../util/utility-types';

import Button from '../Button';
import Icon from '../Icon';
import type { IconName } from '../Icon';

import PopoverContainer, { defaultPopoverModifiers } from '../PopoverContainer';
import type { PopoverContext, PopoverOptions } from '../PopoverContainer';

import PopoverListItem from '../PopoverListItem';
import styles from './Menu.module.css';

// Note: added className here to prevent private interface collision within HeadlessUI
export type MenuProps = ExtractProps<typeof HeadlessMenu> &
  PopoverOptions & {
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

export type MenuButtonProps = {
  /**
   * The button contents placed left of the chevron icon.
   */
  children: React.ReactNode;
  /**
   * Allow custom classes to be applied to the menu button.
   */
  className?: string;
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
const MenuButton = ({ children, className, ...other }: MenuButtonProps) => {
  const buttonClassNames = clsx(styles['menu__button'], className);
  const { setReferenceElement } = useContext(MenuContext);

  return (
    <HeadlessMenu.Button as={React.Fragment} ref={setReferenceElement}>
      <Button className={buttonClassNames} status="neutral" {...other}>
        {children}
        <Icon
          className={styles['menu__button--with-chevron']}
          name="expand-more"
          purpose="decorative"
          size="1.25rem"
        />
      </Button>
    </HeadlessMenu.Button>
  );
};

/**
 * A minimally styled button that when clicked, shows or hides the Options.
 */
const MenuPlainButton = ({ className, ...other }: MenuPlainButtonProps) => {
  const buttonClassNames = clsx(styles['menu__plain-button'], className);
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

  return (
    <>{createPortal(<HeadlessMenu.Items {...optionProps} />, document.body)}</>
  );
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
Menu.PlainButton = MenuPlainButton;
Menu.Items = MenuItems;
Menu.Item = MenuItem;
