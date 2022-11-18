import clsx from 'clsx';
import React from 'react';
import styles from './PrimaryNavItem.module.css';
import type { IconName } from '../Icon';
import Icon from '../Icon';

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
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName?: IconName;
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
 * `import {PrimaryNavItem} from "@chanzuckerberg/eds";`
 *
 * Individual item within the PrimaryNav.
 */
export const PrimaryNavItem = React.forwardRef<HTMLLIElement, Props>(
  function PrimaryNavItem(
    { className, text, href, isActive, iconName, ...other },
    ref,
  ) {
    const TagName = createTagName();

    function createTagName() {
      if (href) {
        return 'a';
      } else {
        return 'button';
      }
    }

    const componentClassName = clsx(
      styles['primary-nav__item'],
      isActive && styles['eds-is-active'],
      className,
    );
    return (
      <li className={componentClassName} {...other} ref={ref}>
        <TagName className={styles['primary-nav__link']} href={href}>
          <Icon
            className={styles['primary-nav__icon']}
            name={iconName}
            purpose="decorative"
            size="1.25rem"
          />
          <span>{text}</span>
        </TagName>
      </li>
    );
  },
);
