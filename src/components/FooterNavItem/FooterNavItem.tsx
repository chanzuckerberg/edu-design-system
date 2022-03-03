import React from 'react';
import clsx from 'clsx';
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
 * Primary UI component for user interaction
 */
export const FooterNavItem: React.FC<Props> = ({
  className,
  href,
  text,
  ...other
}) => {
  const componentClassName = clsx(styles['footer-nav__item'], className, {});
  return (
    <li className={componentClassName} {...other}>
      <a className={styles['footer-nav__link']} href={href}>
        {text}
      </a>
    </li>
  );
};
