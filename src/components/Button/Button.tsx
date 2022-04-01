import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';
import utilityStyles from '../Utilities/Visibility.module.css';
import Icon from '../Icon';
export interface Props {
  /**
   * Visually hidden button text (but text is still accessible to assistive technology).
   * This overrides `text`
   */
  'aria-label'?: string;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Button reference
   */
  forwardRef?: any;
  /**
   * Toggles button that fills the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Visually hides button text for icon-only buttons for accessibility
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
   * Available size variations for the button
   */
  size?: 'sm' | 'md' | 'lg';
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
  variant?: 'primary' | 'bare' | 'link' | 'table-header';
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef(
  (
    {
      className,
      disabled,
      forwardRef,
      fullWidth,
      href,
      hideText,
      iconName,
      iconPosition = 'before',
      inverted,
      loading,
      onClick,
      size = 'lg',
      text,
      type,
      variant,
      ...other
    }: Props,
    ref,
  ) => {
    const componentClassName = clsx(
      // Base styles
      styles['button'],
      className,
      // Sizes
      variant !== 'link' && [
        size === 'sm' && styles['button--sm'],
        size === 'md' && styles['button--md'],
        size === 'lg' && styles['button--lg'],
      ],
      // Variants
      variant === 'primary' && styles['button--primary'],
      variant === 'bare' && styles['button--bare'],
      variant === 'link' && styles['button--link'],
      variant === 'table-header' && styles['button--table-header'],
      // Other options
      inverted === true && styles['button--inverted'],
      fullWidth && styles['button--full-width'],
      loading && styles['eds-is-loading'],
    );
    const TagName = href ? 'a' : 'button';

    const computedIcon = (
      <>
        {loading && (
          <Icon
            aria-hidden="true"
            focusable={false}
            name="spinner"
            className={styles['button__icon']}
          />
        )}
        {!loading && iconName && (
          <Icon
            aria-hidden="true"
            focusable={false}
            name={iconName}
            className={styles['button__icon']}
          />
        )}
      </>
    );

    return (
      <TagName
        className={componentClassName}
        href={href}
        disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        ref={forwardRef || ref}
        type={type}
        onClick={onClick}
        {...other}
      >
        {iconPosition === 'before' && computedIcon}

        {text && (
          <span
            className={
              hideText
                ? styles['button__text'] + ' ' + utilityStyles['u-is-vishidden']
                : styles['button__text']
            }
          >
            {text}
          </span>
        )}

        {iconPosition === 'after' && computedIcon}
      </TagName>
    );
  },
);
Button.displayName = 'Button';
