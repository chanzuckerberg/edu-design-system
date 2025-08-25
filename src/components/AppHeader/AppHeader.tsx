import clsx from 'clsx';
import React, { createContext, useContext, type ReactNode } from 'react';
import type { IconName } from '../Icon';
import styles from './AppHeader.module.css';

export type AppHeaderProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
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
  // Design API
};

type NavGroup = {
  label: string;
  /**
   * Sets of navigation targets in the header. Consider using 2-3 at maximum. Each NavGroup can contain many NavItems
   */
  /** TODO-AH: add nav menu as a type */
  navItems: (NavLink | NavButton)[];
};

type NavItem = {
  label: string;
  /**
   * Icon from the set of defined EDS icon set, when `iconLayout` is used.
   */
  icon?: IconName;

  iconLayout?: 'none' | 'left' | 'right' | 'icon-only'; // TODO-AH: from button
};

type NavLink = NavItem & {
  type: 'link';
  isCurrent?: boolean;
  href: string;
};

type NavButton = NavItem & {
  type: 'button';
};

type AppHeaderLinkProps = NavLink & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  // Insert props/values as defined in figma for AppHeaderLink
};

type AppHeaderButtonProps = NavButton & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  // Insert props/values as defined in figma for AppHeaderButton
};

// TODO-AH: create useContext to give the orientation to any sub-components as needed
// TODO-AH: codify and document JSON structure of nav groups, items, and how they change with

const AppHeaderContext = createContext<Pick<AppHeaderProps, 'orientation'>>({
  orientation: 'horizontal',
});

/**
 * `import {AppHeader} from "@chanzuckerberg/eds";`
 *
 * Standardized application header that can handle links, buttons, and other navigation aids. Handles responsive behavior, and both
 * vertical and horizontal orientations.
 */
export const AppHeader = ({
  className,
  navGroups,
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

  return (
    <AppHeaderContext.Provider value={{ orientation }}>
      <div
        className={componentClassName}
        {...other}
        title={JSON.stringify(navGroups)}
      >
        {/* TODO-AH: add in a slot for triggering the hambuger menu when contextually relevant */}
        <div className={styles['app-header__titles']}>
          <AppHeaderTitle subTitle={subTitle} title={title} />
        </div>
        <div className={styles['app-header__nav-groups']}>
          {/* TODO-AH: process the JSON blob here: use nav groups, and within each, nav links or buttons */}
          {navGroups?.map((navGroup) => (
            <AppHeaderNavGroup
              key={`navGroup-${navGroup.label}`}
              label={navGroup.label}
              navItems={navGroup.navItems}
            />
          ))}
        </div>
      </div>
    </AppHeaderContext.Provider>
  );
};

// These sub-components are used internally
const AppHeaderTitle = ({
  className,
  title,
  subTitle,
  ...other
}: AppHeaderTitleProps) => {
  const componentClassName = clsx(styles['app-header-title'], className);
  return (
    <header className={componentClassName} {...other}>
      <div className={styles['app-header-title__title']}>{title}</div>
      <div className={styles['app-header-title__sub-title']}>{subTitle}</div>
    </header>
  );
};

const AppHeaderNavGroup = ({
  label,
  navItems,
  ...other
}: AppHeaderNavGroupProps) => {
  const { orientation } = useContext(AppHeaderContext);
  const componentClassName = clsx(
    styles['app-header-nav-group'],
    orientation && styles[`app-header-nav-group--orientation-${orientation}`],
  );
  return (
    <nav className={componentClassName} {...other}>
      {navItems.map((navItem) => {
        return navItem.type === 'button' ? (
          <AppHeaderButton {...navItem} />
        ) : (
          <AppHeaderLink {...navItem} />
        );
      })}
    </nav>
  );
};

const AppHeaderLink = ({ className, label, ...other }: AppHeaderLinkProps) => {
  return (
    <a className={styles[`app-header__link`]} {...other}>
      {label}
    </a>
  );
};

const AppHeaderButton = ({
  className,
  label,
  ...other
}: AppHeaderButtonProps) => {
  return (
    <button className={styles[`app-header__button`]} {...other}>
      {label}
    </button>
  );
};

/**
 * TODO-AH: Add in the following sub-components:
 * - https://www.figma.com/design/l0raejrPqwRU6YWi1D4fyx/Components%E2%80%93appHeader?node-id=431-20439&m=dev
 */
