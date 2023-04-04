import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React from 'react';
import type { IconName } from '../../../src';
import { Icon } from '../../../src';
import styles from './PrimaryNav.module.css';

export type PrimaryNavItemProps = {
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
};

/**
 * Individual item within the PrimaryNav.
 */
const PrimaryNavItem = React.forwardRef<HTMLLIElement, PrimaryNavItemProps>(
  function PrimaryNavItem(
    { className, text, href, isActive, iconName, ...other },
    ref,
  ) {
    function createTagName() {
      if (href) {
        return 'a';
      } else {
        return 'button';
      }
    }

    const TagName = createTagName();

    const componentClassName = clsx(styles['primary-nav__item'], className);

    const linkClassName = clsx(
      styles['primary-nav__link'],
      isActive && styles['primary-nav__link--active'],
    );

    return (
      <li className={componentClassName} {...other} ref={ref}>
        <TagName className={linkClassName} href={href}>
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

export type PrimaryNavProps = {
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  'aria-label'?: string;
  /**
   * Child node(s) that can be nested inside component. `ModalHeader`, `ModalBody`, and `ModelFooter` are the only permissible children of the Modal
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
};

/**
 * Primary navigation existing in the header and maybe the footer.
 */
export const PrimaryNav = ({
  className,
  children,
  id,
  'aria-label': ariaLabel,
  ...other
}: PrimaryNavProps) => {
  const componentClassName = clsx(styles['primary-nav'], className);

  return (
    <nav
      aria-label={ariaLabel}
      className={componentClassName}
      id={id}
      role="navigation"
      title="Primary navigation"
      {...other}
    >
      <ul className={styles['primary-nav__list']}>{children}</ul>
    </nav>
  );
};

PrimaryNav.Item = PrimaryNavItem;
