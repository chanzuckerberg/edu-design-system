import clsx from 'clsx';
import React from 'react';
import styles from '../FooterNav/FooterNav.module.css';

export interface Props {
  className?: string /* CSS class names that can be appended to the component */;
  href?: string /* URL for the footer nav item */;
  text?: string /* Footer nav item text */;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FooterNavItem} from "@chanzuckerberg/eds";
 * ```
 *
 * Component represents the footer navigation bar items consists hyperlink to redirect to respective links added to hrefs.
 */
export const FooterNavItem = ({ className, href, text, ...other }: Props) => {
  const componentClassName = clsx(styles['footer-nav__item'], className);
  return (
    <li className={componentClassName} {...other}>
      <a className={styles['footer-nav__link']} href={href}>
        {text}
      </a>
    </li>
  );
};
