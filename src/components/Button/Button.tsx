import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

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
   * Link to URL. If href is present, the button will be rendered as an <a> element.
   */
  href?: string;
  /**
   * On click handler for component
   */
  onClick?: MouseEventHandler;
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
  variant?: 'primary' | 'bare' | 'link';
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
      iconName,
      iconPosition = 'before',
      inverted,
      loading,
      onClick,
      size,
      text,
      type,
      variant,
      ...other
    }: Props,
    ref,
  ) => {
    const componentClassName = clsx(
      styles['button'],
      className,
      variant === 'primary' && styles['button--primary'],
      variant === 'bare' && styles['button--bare'],
      variant === 'link' && styles['button--link'],
      size === 'sm' && styles['button--sm'],
      variant === 'table-header' && styles['button--table-header'],
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

        {text && <span className={styles['button__text']}>{text}</span>}

        {iconPosition === 'after' && computedIcon}
      </TagName>
    );
  },
);
Button.displayName = 'Button';
