import clsx from 'clsx';
import React, { createContext, useContext, type ReactNode } from 'react';

import { createPortal } from 'react-dom';

import Button from '../Button';
import Hr from '../Hr';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import Text from '../Text';

import styles from './AppHeader.module.css';

/**
 * Data Types for the navigation items
 */

/**
 * A nav group is a set of navigation items of the types listed below
 */
type NavGroup = {
  /**
   * Identifier for the nav group (used to distinguish it from other navigation groups)
   */
  name: string;
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navItems: (NavLink | NavButton | NavSeparator)[];
};

/**
 * Abstract type for every possible navigation bar item in an `AppHeader`. This should not be used directly.
 */
type NavItem = {
  /**
   * Identifier for the nav item (used to distinguish it from other navigation items)
   */
  name: string;
  /**
   * Icon from the set of defined EDS icon set, when `iconLayout` is used.
   */
  icon?: IconName;

  /**
   * Allows configuation of the icon's positioning within `AppHeader`.
   *
   * - When set to a value besides `"none"`, an icon must be specified.
   * - When `"icon-only"`, `aria-label` must be given a value.
   */
  iconLayout?: 'none' | 'left' | 'right' | 'icon-only';
};

/**
 * Nav links are a type of nav item, that can be used for directing users to different locations.
 * They should not be used for modifying or acting on the contents of a given page.
 */
type NavLink = NavItem & {
  /**
   * Defines the type of nav item as a link, with the appropriate / related properties.
   */
  type: 'link';
  /**
   * Link: whether the associated nav item is marking the current page / location
   */
  isCurrent?: boolean;
  /**
   * Link: the target URL for the navigation item
   */
  href: string;
};

/**
 * Nav buttons are a type of nav item, that can be wired to trigger an interaction. They should not
 * be used for navigation.
 */
type NavButton = NavItem & {
  /**
   * Defines the type of nav item as a button, with the appropriate / related properties.
   */
  type: 'button';
};

/**
 * Separators exist as a separate and distinct Nav item, for maximum customizability
 */
type NavSeparator = NavItem & {
  type: 'separator';
};

// TODO(EDS-1691): add nav menu as a type

export type AppHeaderProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Handle the click event for any given button in the header
   */
  onButtonClick?: React.ReactEventHandler;
  // Design API
  /**
   * Web location for the home page. Use this to direct where the main page of the application lives.
   */
  href?: string;
  /**
   * Sets of navigation groups in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navGroups?: NavGroup[];
  /**
   * Sets the default orientation of the App Header.
   *
   * * `vertical` alignment places the navigation along the left edge of the screen
   * * `horizontal` alignment spans the top portion of the screen and can flex into a responsive display with an expanding vertical menu
   *
   * **Default is `"horizontal"`**.
   */
  orientation?: 'vertical' | 'horizontal';
  /**
   * Text used to describe the contents of the page with more detail.
   */
  subTitle?: string;
  /**
   * Element used for the application's logo (can be text or an image)
   */
  title: ReactNode;
};

type AppHeaderTitleProps = {
  // Component API
  // Design API
  // Insert props/values as defined in figma for AppHeader
  /**
   * Element used for the application's logo (can be text or an image)
   */
  title?: ReactNode;
  /**
   * Text used to describe the contents of the page with more detail.
   */
  subTitle?: string;
};

type AppHeaderNavGroupProps = NavGroup & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Handle the click event for any given button in the header
   */
  onButtonClick?: React.ReactEventHandler;
  // Design API
};

// TODO: support handling router links like with the link component
type AppHeaderLinkProps = NavLink &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    // Component API
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    // Design API
  };

type AppHeaderButtonProps = NavButton &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    // Component API
    /**
     * CSS class names that can be appended to the component.
     */
    className?: string;
    /**
     * Handle the click event for any given button in the header
     */
    onButtonClick?: React.ReactEventHandler;
    // Design API
  };

type AppHeaderDrawerProps = {
  /**
   * Sets of navigation groups in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  navGroups?: NavGroup[];
};

// Handling for any properties that should be used in sub-components
const AppHeaderContext = createContext<
  Pick<AppHeaderProps, 'orientation' | 'href'>
>({
  orientation: 'horizontal',
  href: '#',
});

/**
 * `import {AppHeader} from "@chanzuckerberg/eds";`
 *
 * Provides app-level navigation and serves as the <header> for accessibility landmarks
 */
export const AppHeader = ({
  className,
  href,
  navGroups,
  onButtonClick,
  orientation = 'horizontal',
  subTitle,
  title,
  ...other
}: AppHeaderProps) => {
  const componentClassName = clsx(
    styles['app-header'],
    orientation && styles[`app-header--orientation-${orientation}`],
    className,
  );

  const drawerComponentClassName = clsx(styles['app-header__drawer']);

  return (
    <AppHeaderContext.Provider value={{ href, orientation }}>
      <header className={componentClassName} {...other}>
        <div>
          <div className={styles['app-header__titles']}>
            {href ? (
              <a aria-label="homepage" href={href}>
                <AppHeaderTitle subTitle={subTitle} title={title} />
              </a>
            ) : (
              <AppHeaderTitle subTitle={subTitle} title={title} />
            )}
          </div>
          {orientation === 'horizontal' && (
            <>
              <div className={styles['app-header__nav-groups']}>
                {navGroups?.map((navGroup) => (
                  <AppHeaderNavGroup
                    key={`navGroup-${navGroup.name}`}
                    name={navGroup.name}
                    navItems={navGroup.navItems}
                    onButtonClick={onButtonClick}
                  />
                ))}
              </div>
              <div className={styles['app-header__menu']}>
                <AppHeaderButton
                  aria-label="Show Menu"
                  icon="menu"
                  iconLayout="icon-only"
                  name="hamburger-menu"
                  onClick={() => {
                    document.getElementById('popover')?.showPopover();
                  }}
                  type="button"
                />
              </div>
            </>
          )}
          {orientation === 'vertical' && (
            <AppHeaderDrawerContent navGroups={navGroups} />
          )}
        </div>
      </header>
      {orientation === 'horizontal'
        ? createPortal(
            <div
              className={drawerComponentClassName}
              id="popover"
              // @ts-expect-error popover properly supported in React 19 ; useId to keep unique?
              popover="auto"
            >
              <div className={styles['app-header__drawer-button']}>
                <Button
                  aria-label="Show Menu"
                  icon="close"
                  iconLayout="icon-only"
                  onClick={() => {
                    document.getElementById('popover')?.hidePopover();
                  }}
                  rank="tertiary"
                  size="lg"
                />
              </div>
              <AppHeaderDrawerContent navGroups={navGroups} />
            </div>,
            document.body,
          )
        : null}
    </AppHeaderContext.Provider>
  );
};

/**
 * Sub-component for handling the title elements of the AppHeader
 * @param props Properties for use with the AppHeaderTitleProps
 * @returns ReactNode
 */
const AppHeaderTitle = ({ title, subTitle }: AppHeaderTitleProps) => {
  const componentClassName = clsx(
    styles['app-header-title__title'],
    typeof title === 'object' && styles['app-header-title--has-logo'],
  );
  return (
    <>
      <div className={componentClassName}>
        {typeof title === 'string' ? (
          <Text as="span" preset="headline-md">
            {title}
          </Text>
        ) : (
          <>{title}</>
        )}
      </div>
      {subTitle && (
        <div className={styles['app-header-title__sub-title']}>
          <Text as="span" preset="body-lg">
            {subTitle}
          </Text>
        </div>
      )}
    </>
  );
};

/**
 * Sub-component for the individual navigation groups within the app header.
 * @param props properties for AppHeaderNavGroupProps
 * @returns ReactNode
 */
const AppHeaderNavGroup = ({
  name,
  navItems,
  onButtonClick,
  ...other
}: AppHeaderNavGroupProps) => {
  const { orientation } = useContext(AppHeaderContext);
  const componentClassName = clsx(
    styles['app-header-nav-group'],
    orientation && styles[`app-header-nav-group--orientation-${orientation}`],
  );
  return (
    <nav aria-label={name} className={componentClassName} {...other}>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.name}>
              {navItem.type === 'button' && (
                <AppHeaderButton {...navItem} onClick={onButtonClick} />
              )}
              {navItem.type === 'link' && (
                <AppHeaderLink key={navItem.name} {...navItem} />
              )}
              {/* In horizontal layouts, we never render the horizontal rule */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

/**
 * Sub-component for the individual app header links.
 *
 * @param props Properties for the links within the App Header
 * @returns ReactNode
 */
const AppHeaderLink = ({
  className,
  icon,
  iconLayout = 'none',
  isCurrent = false,
  name,
  type,
  ...other
}: AppHeaderLinkProps) => {
  const componentClassName = clsx(
    styles['app-header__nav-item'],
    styles[`app-header__nav-item--link`],
    isCurrent && styles['app-header__nav-item--is-current'],
  );
  return (
    <a className={componentClassName} {...other}>
      <span
        className={clsx(
          styles['app-header__nav-item--link'],
          iconLayout &&
            styles[`app-header__nav-item--icon-layout-${iconLayout}`],
        )}
      >
        {!(iconLayout === 'icon-only') && (
          <Text as="span" preset="label-lg">
            {name}
          </Text>
        )}
        {icon && iconLayout && (
          <Icon
            name={icon}
            purpose="decorative"
            size={`${iconLayout === 'icon-only' ? 24 : 16}px`}
          />
        )}
      </span>
    </a>
  );
};

/**
 * Sub-component for the individual app header buttons.
 *
 * @param props Properties for the button within the App Header
 * @returns ReactNode
 */
const AppHeaderButton = ({
  className,
  icon,
  iconLayout = 'none',
  name,
  type,
  ...other
}: AppHeaderButtonProps) => {
  const componentClassName = clsx(
    styles['app-header__nav-item'],
    styles[`app-header__nav-item--button`],
    iconLayout && styles[`app-header__nav-item--icon-layout-${iconLayout}`],
  );
  return (
    <button className={componentClassName} {...other}>
      <span
        className={clsx(
          styles['app-header__nav-item--button'],
          iconLayout &&
            styles[`app-header__nav-item--icon-layout-${iconLayout}`],
        )}
      >
        {!(iconLayout === 'icon-only') && (
          <Text as="span" preset="label-lg">
            {name}
          </Text>
        )}
        {icon && iconLayout && (
          <Icon
            name={icon}
            purpose="decorative"
            size={`${iconLayout === 'icon-only' ? 24 : 16}px`}
          />
        )}
      </span>
    </button>
  );
};

const AppHeaderDrawerContent = ({ navGroups }: AppHeaderDrawerProps) => (
  <div className={styles['drawer-content']}>
    {navGroups?.map((navGroup) => (
      <nav
        aria-label={navGroup.name}
        className={styles['drawer-content__nav-group']}
        key={navGroup.name}
      >
        <ul>
          {navGroup.navItems.map((navItem) => {
            return (
              <li
                className={clsx(
                  styles['drawer-content__nav-group-item'],
                  navItem.type &&
                    styles[
                      `drawer-content__nav-group-item--type-${navItem.type}`
                    ],
                )}
                key={navItem.name}
              >
                {navItem.type === 'button' && (
                  <AppHeaderButton key={navItem.name} {...navItem} />
                )}
                {navItem.type === 'link' && (
                  <AppHeaderLink key={navItem.name} {...navItem} />
                )}
                {navItem.type === 'separator' && (
                  <Hr key={navItem.name} {...navItem} />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    ))}
  </div>
);

AppHeader.displayName = 'AppHeader';

// TODO(EDS-1691): create vertical and horizontal wrappers that use orientation to render
// TODO(EDS-1691): add sub-components as key/value pairs to `AppHeader`
