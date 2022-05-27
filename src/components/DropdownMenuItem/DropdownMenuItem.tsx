import clsx from 'clsx';
import React, { ReactNode, MouseEventHandler } from 'react';
import styles from '../DropdownMenu/DropdownMenu.module.css';

export interface Props {
  /**
   * Stylistic variations for the Box
   * - **top** horizontally and vertically aligns the content
   */
  align?: 'top-left';
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Child node(s) that can be nested inside component
   */
  children: ReactNode;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * On click handler for component
   */
  onClick?: () => void;
  /**
   * On hover handler for component
   */
  onHover?: MouseEventHandler;
  /**
   * Stylistic variations of the GridL
   * - **lined** yields a dropdown item with a border bottom
   */
  variant?: 'lined';
}

/**
 * BETA: This component is still a work in progress and is subject to change.
 *
 * ```ts
 * import {DropdownMenuItem} from "@chanzuckerberg/eds";
 * ```
 *
 * Dropdown menu item within `DropdownMenu`
 */
export const DropdownMenuItem = React.forwardRef<HTMLLIElement, Props>(
  ({ align, className, href, children, variant, onClick, ...other }, ref) => {
    const TagName = createTagName();

    function createTagName() {
      if (href) {
        return 'a';
      } else {
        return 'button';
      }
    }

    const componentClassName = clsx(
      styles['dropdown-menu__item'],
      className,
      align === 'top-left' && styles['dropdown-menu__item--align-top-left'],
      variant === 'lined' && styles['dropdown-menu__item--lined'],
    );

    return (
      <li
        className={componentClassName}
        {...other}
        ref={ref}
        role="presentation"
      >
        <TagName
          className={styles['dropdown-menu__link']}
          href={href}
          onClick={onClick}
        >
          {children}
        </TagName>
      </li>
    );
  },
);

DropdownMenuItem.displayName = 'DropdownMenuItem';
