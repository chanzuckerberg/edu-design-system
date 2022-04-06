import clsx from 'clsx';
import React from 'react';
import { EdsThemeColorIconNeutralDefaultKnockout } from '../../tokens-dist/colors';
import Icon, { IconName } from '../Icon';
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
 * Primary UI component for user interaction
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
      className,
      isActive && styles['eds-is-active'],
    );
    return (
      <li className={componentClassName} {...other} ref={ref}>
        <TagName className={styles['primary-nav__link']} href={href}>
          <Icon
            className={styles['primary-nav__icon']}
            color={EdsThemeColorIconNeutralDefaultKnockout}
            name={iconName}
            purpose="decorative"
            size="1.25rem"
          />
          <span className={styles['primary-nav__text']}>{text}</span>
        </TagName>
      </li>
    );
  },
);
