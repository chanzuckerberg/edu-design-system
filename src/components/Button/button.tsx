import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';
import { Icon } from '../Icon/Icon';
export interface Props {
  /**
   * Button reference
   */
  buttonRef?: any;
  /**
   * Toggle between full width button (true) and default button width
   */
  block?: boolean;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Toggles button that fills the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Visually hide button text (but text is still accessible to assistive technology)
   */
  hideText?: boolean;
  /**
   * Link to URL. If href is present, the button will be rendered as an <a> element.
   */
  href?: string;
  /**
   * Name of SVG icon (i.e. caret-down, minus, warning)
   */
  iconName?: string;
  /**
   * Determines position of icon relative to button text.
   * - **before** places icon before button text
   * - **after** places icon after button text
   */
  iconPosition?: 'before' | 'after';
  /**
   * Button rendered on a dark backgorund
   */
  inverted?: boolean;
  /**
   * Loading state passed down from higher level used to trigger loader and text change
   */
  loading?: boolean;
  /**
   * On click handler for component
   */
  onClick?: MouseEventHandler;
  /**
   * Visually hidden additional instruction text to help provide screen reader users additional context. For instance, "View details" might be the visible button text, but screenReaderText might add additional instructions such as "for confirmation number C1234567"
   */
  screenReaderText?: string;
  /**
   * Available size variations for the button
   */
  size?: 'sm' | 'lg';
  /**
   * The visible button text
   */
  text?: string | ReactNode;
  /**
   * Determines type of button
   * - **button** The button is a clickable button.
   * - **submit** The button is a submit button (submits form data). This is the default `button` behavior
   * - **reset** The button is a reset button (resets the form-data to its initial values)
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * Available _stylistic_ variations available for the Button component
   */
  variant?: 'primary' | 'bare' | 'table-header' | 'link';
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<Props> = ({
  buttonRef,
  className,
  variant,
  size,
  disabled,
  fullWidth,
  iconName,
  iconPosition = 'before',
  inverted,
  loading,
  onClick,
  screenReaderText,
  href,
  text,
  type,
  hideText,
  ...other
}) => {
  const componentClassName = clsx(styles['button'], className, {
    [styles['button--primary']]: variant === 'primary',
    [styles['button--bare']]: variant === 'bare',
    [styles['button--link']]: variant === 'link',
    [styles['button--sm']]: size === 'sm',
    [styles['button--table-header']]: variant === 'table-header',
    [styles['button--inverted']]: inverted === true,
    [styles['button--full-width']]: fullWidth,
    [styles['eds-is-loading']]: loading,
  });
  const TagName = href ? 'a' : 'button';

  const computedIcon = (
    <>
      {loading && (
        <Icon
          aria-hidden="true"
          className={styles['button__icon']}
          focusable={false}
          name="spinner"
        />
      )}
      {!loading && iconName && (
        <Icon
          aria-hidden="true"
          className={styles['button__icon']}
          focusable={false}
          name={iconName}
        />
      )}
    </>
  );

  return (
    <TagName
      className={componentClassName}
      disabled={disabled}
      href={href}
      onClick={onClick}
      ref={buttonRef}
      tabIndex={disabled ? -1 : undefined}
      type={type}
      {...other}
    >
      {iconPosition === 'before' && computedIcon}

      {text && (
        <span
          className={
            !hideText
              ? styles['button__text']
              : styles['button__text'] + 'u-is-vishidden'
          }
        >
          {text}
          {screenReaderText && (
            <span className={styles['u-is-vishidden']}>{screenReaderText}</span>
          )}
        </span>
      )}

      {iconPosition === 'after' && computedIcon}
    </TagName>
  );
};
