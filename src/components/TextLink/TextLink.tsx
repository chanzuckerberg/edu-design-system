import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './TextLink.module.css';

export interface Props {
  /**
   * Child node(s) that can be nested inside component
   */
  children?: ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * Inverted variant for component rendered on a dark background
   */
  inverted?: boolean;
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible button text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText?: string;
  /**
   * List of variants:
   * - **bold** yields bolder font weight than default
   */
  variant?: 'bold';
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
export const TextLink = React.forwardRef<HTMLAnchorElement, Props>(
  function TextLink(
    {
      href,
      className,
      children,
      target,
      inverted,
      screenReaderText,
      variant,
      ...other
    },
    ref,
  ) {
    const componentClassName = clsx(styles['text-link'], className, {
      [styles['text-link--inverted']]: inverted === true,
    });
    return (
      <a
        className={componentClassName}
        href={href}
        target={target}
        {...other}
        ref={ref}
      >
        {children}
        {screenReaderText && (
          <span className={styles['u-is-vishidden']}>{screenReaderText}</span>
        )}
      </a>
    );
  },
);
