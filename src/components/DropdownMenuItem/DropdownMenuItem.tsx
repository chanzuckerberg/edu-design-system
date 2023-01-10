import clsx from 'clsx';
import type { ReactNode, MouseEventHandler } from 'react';
import React, { useContext } from 'react';
import { DropdownMenuContext } from '../DropdownMenu';
import styles from '../DropdownMenu/DropdownMenu.module.css';

// Note: This component will be deprecated in favor of PopoverListItem
export type DropdownMenuItemProps = {
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
  onClick?: MouseEventHandler;
  /**
   * On hover handler for component
   */
  onHover?: MouseEventHandler;
  /**
   * Status variant
   * - **error** yields a dropdown item with red text
   */
  status?: 'error';
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /**
   * Stylistic variations of the GridL
   * - **lined** yields a dropdown item with a border bottom
   */
  variant?: 'lined';
};

/**
 * `import {DropdownMenuItem} from "@chanzuckerberg/eds";`
 *
 * Dropdown menu item within `DropdownMenu`
 */
export const DropdownMenuItem = ({
  align,
  className,
  href,
  children,
  variant,
  onClick,
  status,
  target,
  ...other
}: DropdownMenuItemProps) => {
  const context = useContext(DropdownMenuContext);
  const ref = (element: HTMLLIElement) => {
    if (context && element && !context.refs.current.set.has(element)) {
      context.refs.current.set.add(element);
      context.refs.current.list.push(element);
    }
  };

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
    align === 'top-left' && styles['dropdown-menu__item--align-top-left'],
    variant === 'lined' && styles['dropdown-menu__item--lined'],
    status === 'error' && styles['dropdown-menu__item--error'],
    className,
  );

  return (
    <li className={componentClassName} {...other} ref={ref} role="menuitem">
      <TagName
        className={styles['dropdown-menu__link']}
        href={href}
        onClick={onClick}
        tabIndex={-1}
        target={target}
      >
        {children}
      </TagName>
    </li>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';
