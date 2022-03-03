import React from 'react';
import clsx from 'clsx';
import styles from '../PrimaryNav/PrimaryNav.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * Set to true when the primary nav item is the active page
   */
  isActive?: boolean;
  /**
   * Link text string
   */
  text?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryNavItem = React.forwardRef<HTMLLIElement, Props>(
  function PrimaryNavItem({ className, text, href, isActive, ...other }, ref) {
    const componentClassName = clsx(styles['primary-nav__item'], className, {
      [styles['eds-is-active']]: isActive === true,
    });

    const TagName = createTagName();

    function createTagName() {
      if (href) {
        return 'a';
      } else {
        return 'button';
      }
    }
    return (
      <li className={componentClassName} {...other} ref={ref}>
        <TagName className={styles['primary-nav__link']} href={href}>
          <span className={styles['primary-nav__text']}>{text}</span>
        </TagName>
      </li>
    );
  },
);
