import React, { MouseEventHandler } from 'react';
import clsx from 'clsx';
import styles from '../LinkList/LinkList.module.css';
import { Icon } from '../Icon/Icon';

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
  iconName?: string;
  /**
   * Position of the icon. "before" renders the icon before the link text, and "after" renders the icon after the link text
   */
  iconPosition?: 'before' | 'after';
  /**
   * Reference to a link list item (i.e. used to add focus to item after modal closes)
   */
  linkListRef?: string;
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
 * Primary UI component for user interaction
 */
export const LinkListItem: React.FC<Props> = ({
  className,
  href,
  onClick,
  linkListRef,
  iconPosition,
  iconName,
  screenReaderText,
  text,
  target,
  ...other
}) => {
  const componentClassName = clsx('link-list__item', className, {});
  return (
    <li className={componentClassName} {...other}>
      <a
        className={styles['link-list__link']}
        href={href}
        onClick={onClick}
        ref={linkListRef}
        target={target}
      >
        {iconPosition === 'before' && (
          <Icon
            aria-hidden="true"
            name={iconName}
            className={styles['link-list__icon']}
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
            aria-hidden="true"
            name={iconName}
            className={styles['link-list__icon']}
          />
        )}
      </a>
    </li>
  );
};
