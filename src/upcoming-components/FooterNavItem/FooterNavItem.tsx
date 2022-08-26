import clsx from 'clsx';
import React from 'react';
import styles from '../FooterNav/FooterNav.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL for the footer nav item
   */
  href?: string;
  /**
   * Footer nav item text
   */
  text?: string;
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {FooterNavItem} from "@chanzuckerberg/eds";
 * ```
 *
 * TODO: update this comment with a description of the component.
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
