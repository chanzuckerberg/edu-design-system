import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

export interface Props {
  /**
   * Button reference
   */
  buttonRef?: any;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
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
  variant?: 'primary' | 'bare' | 'table-header' | 'link';
}

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef(
  (
    {
      buttonRef,
      className,
      variant,
      size,
      disabled,
      onClick,
      href,
      text,
      type,
      ...other
    }: Props,
    ref,
  ) => {
    const componentClassName = clsx(
      styles['button'],
      className,
      styles['button'],
      className,
      variant === 'primary' && styles['button--primary'],
      variant === 'bare' && styles['button--bare'],
      variant === 'link' && styles['button--link'],
      size === 'sm' && styles['button--sm'],
      variant === 'table-header' && styles['button--table-header'],
    );
    const TagName = href ? 'a' : 'button';

    return (
      <TagName
        className={componentClassName}
        href={href}
        disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        ref={buttonRef || ref}
        type={type}
        onClick={onClick}
        {...other}
      >
        {text}
      </TagName>
    );
  },
);
Button.displayName = 'Button';
