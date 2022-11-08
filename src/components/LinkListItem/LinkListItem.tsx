import clsx from 'clsx';
import type { MouseEventHandler } from 'react';
import React from 'react';
import type { IconName } from '../Icon';
import Icon from '../Icon';
import styles from '../LinkList/LinkList.module.css';

export interface Props {
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Reference to a link list item (i.e. used to add focus to item after modal closes)
   */
  forwardRef?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName?: IconName;
  /**
   * Position of the icon. "before" renders the icon before the link text, and "after" renders the icon after the link text
   */
  iconPosition?: 'before' | 'after';
  /**
   * Click handler function for link
   */
  onClick?: MouseEventHandler;
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible link text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText?: string;
  /**
   * Link text string
   */
  text?: string;
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target?: '_blank' | '_self' | '_parent' | '_top';
}

/**
 * `import {LinkListItem} from "@chanzuckerberg/eds";`
 *
 * Link list item to be used inside the LinkList component.
 */
export const LinkListItem = ({
  className,
  forwardRef,
  href,
  onClick,
  iconPosition,
  iconName,
  screenReaderText,
  text,
  target,
  ...other
}: Props) => {
  const componentClassName = clsx('link-list__item', className);
  return (
    <li className={componentClassName} {...other}>
      <a
        className={styles['link-list__link']}
        href={href}
        onClick={onClick}
        ref={forwardRef}
        target={target}
      >
        {iconPosition === 'before' && (
          <Icon
            className={styles['link-list__icon']}
            name={iconName}
            purpose="decorative"
          />
        )}
        <div className={styles['link-list__text']}>
          {text}
          {screenReaderText && ' '}
          {screenReaderText && (
            <span className={styles['u-is-vishidden']}>
              {' '}
              {screenReaderText}
            </span>
          )}
        </div>

        {iconPosition === 'after' && (
          <Icon
            className={styles['link-list__icon']}
            name={iconName}
            purpose="decorative"
            size="0.875rem"
          />
        )}
      </a>
    </li>
  );
};
