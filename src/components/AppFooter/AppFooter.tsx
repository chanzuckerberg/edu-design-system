import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import { assertEdsUsage } from '../../util/logging';
import type { NavItem, NavLink } from '../../util/utility-types';
import type { Emphasis } from '../../util/variant-types';

import Link from '../Link';
import Text from '../Text';

import styles from './AppFooter.module.css';

export type AppFooterProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'title'
> & {
  // Component API
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Web location for the home page. Use this to direct where the main page of the application lives.
   */
  href?: string;
  /**
   * Sets of navigation targets in the footer. Consider using four at maximum.
   */
  navItems: NavLink[];
  /**
   * Handle the click event for a given clickable link nav item in the footer. Includes the data from the associated/clicked `NavItem` for reference
   * (e.g., attaching events, tracking, etc.)
   */
  onLinkClick?: AppFooterEventHandler;
  // Design API
  /**
   * Text slot for specifying the copyright information (e.g., "Copyright © ${YEAR}")
   */
  copyright?: string;
  /**
   * Determine the amount of emphasis applied to the component, e.g., low or high.
   *
   * **Default is `"high"`**.
   */
  emphasis?: Emphasis;
  /**
   * Element used for the application's logo (can be text or an image)
   */
  title: ReactNode;
};

export type AppFooterEventHandler = (
  event: React.SyntheticEvent,
  navItem: NavItem, // Using abstract type to handle future cases
) => void;

/**
 * **BETA**: This component is still a work in progress and is subject to change.
 *
 * `import {AppFooter} from "@chanzuckerberg/eds";`
 *
 * A footer is a navigation component. It can hold links, buttons, company info, copyrights, forms, and many other elements.
 */
export const AppFooter = ({
  className,
  copyright,
  emphasis = 'high',
  href,
  navItems,
  onLinkClick,
  title,
  ...other
}: AppFooterProps) => {
  const componentClassName = clsx(
    styles['app-footer'],
    emphasis && styles[`app-footer--emphasis-${emphasis}`],
    className,
  );

  // if title is not a string, and href does not exist, render directly
  // if title is not a string, and href exists, wrap with unstyled anchor
  // if title is a string, and href does not exist, render directly
  // if title is a string and href exists, use a link component

  return (
    <footer className={componentClassName} {...other}>
      <div className={styles['app-footer__wrapper']}>
        <div className={styles['app-footer__colophon']}>
          {href ? (
            typeof title === 'string' ? (
              <Link
                context="standalone"
                emphasis="low"
                href={href}
                onClick={(ev) => {
                  onLinkClick &&
                    onLinkClick(ev, {
                      name: 'EDS-footer-logo',
                      type: 'link',
                      href: href,
                    } as NavLink);
                }}
                size="xs"
                variant={emphasis === 'low' ? undefined : 'inverse'}
              >
                {title}
              </Link>
            ) : (
              <a
                aria-label="homepage"
                className={styles['app-footer__home-link']}
                href={href}
                onClick={(ev) => {
                  onLinkClick &&
                    onLinkClick(ev, {
                      name: 'EDS-footer-logo',
                      type: 'link',
                      href: href,
                    } as NavLink);
                }}
              >
                <div className={styles['app-footer__title']}>{title}</div>
              </a>
            )
          ) : (
            <div className={styles['app-footer__title']}>{title}</div>
          )}
          {copyright && (
            <Text
              as="div"
              className={styles['app-footer__copyright']}
              preset="body-xs"
            >
              {copyright}
            </Text>
          )}
        </div>
        <menu className={styles['app-footer__nav-items']}>
          {navItems?.map((navItem) => {
            switch (navItem.type) {
              case 'link':
                return (
                  <li
                    className={styles['app-footer__nav-item']}
                    key={navItem.name}
                  >
                    <Link
                      context="standalone"
                      emphasis="low"
                      href={navItem.href}
                      onClick={(ev) => {
                        onLinkClick && onLinkClick(ev, navItem);
                      }}
                      size="xs"
                      variant={emphasis === 'low' ? undefined : 'inverse'}
                    >
                      {navItem.name}
                    </Link>
                  </li>
                );
              default:
                // We only allow links in the footer for now, so don't handle other
                // data types
                assertEdsUsage(
                  [true],
                  `Problem with navItem data in footer: ${JSON.stringify(navItem)}`,
                  'error',
                );
                return (
                  <li
                    className={styles['app-footer__nav-item']}
                    key={`error-unknown-nav-item-type-${navItem.name}`}
                  >
                    <Text as="span" preset="body-xs">
                      N/A
                    </Text>
                  </li>
                );
            }
          })}
        </menu>
      </div>
    </footer>
  );
};
