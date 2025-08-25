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
  // Insert props/values as defined in figma for AppHeader
  href?: string;
  navGroups?: NavGroup[];
  orientation?: 'vertical' | 'horizontal';
  subTitle?: string;
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
  title?: ReactNode;
  subTitle?: string;
};

type AppHeaderNavGroupProps = {
  // Component API
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  // Insert props/values as defined in figma for AppHeader
};

type NavGroup = {
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
  isCurrent?: boolean;
  href: string;
};

type NavButton = NavItem;

type AppHeaderLinkProps = {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  // Design API
  // Insert props/values as defined in figma for AppHeaderLink
};

type AppHeaderButtonProps = {
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
      <div className={componentClassName} {...other}>
        {/* TODO-AH: add in a slot for triggering the hambuger menu when contextually relevant */}
        <div className={styles['app-header__titles']}>
          <AppHeaderTitle subTitle={subTitle} title={title} />
        </div>
        <div className={styles['app-header__nav-groups']}>
          {/* TODO-AH: process the JSON blob here: use nav groups, and within each, nav links or buttons */}
          <pre>{navGroups?.toString()}</pre>
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

const AppHeaderNavGroup = ({ children, ...other }: AppHeaderNavGroupProps) => {
  const { orientation } = useContext(AppHeaderContext);
  const componentClassName = clsx(
    styles['app-header-nav-group'],
    orientation && styles[`app-header-nav-group--orientation-${orientation}`],
  );
  return <nav className={componentClassName}>{children}</nav>;
};

const AppHeaderLink = ({ className, ...other }: AppHeaderLinkProps) => {
  return <a href="#test">link</a>;
};

const AppHeaderButton = ({ className, ...other }: AppHeaderButtonProps) => {
  return <button></button>;
};

/**
 * TODO-AH: Add in the following sub-components:
 * - https://www.figma.com/design/l0raejrPqwRU6YWi1D4fyx/Components%E2%80%93appHeader?node-id=431-20439&m=dev
 */
