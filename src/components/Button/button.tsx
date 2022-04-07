import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';
import Icon from '../Icon';
export interface Props {
  /**
   * Visually hidden button text (but text is still accessible to assistive technology).
   * This overrides `children` for screen readers
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
   * The visible button children
   */
  children: string | ReactNode;
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
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'icon'
    | 'link'
    | 'destructive';
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
      loading,
      onClick,
      size = 'lg',
      children,
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
      variant === 'secondary' && styles['button--secondary'],
      variant === 'tertiary' && styles['button--tertiary'],
      variant === 'icon' && styles['button--icon'],
      variant === 'link' && styles['button--link'],
      variant === 'destructive' && styles['button--destructive'],
      // Other options
      fullWidth && styles['button--full-width'],
      loading && styles['eds-is-loading'],
    );
    const TagName = href ? 'a' : 'button';

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
        {loading && (
          <Icon
            purpose="informative"
            title="loading"
            name="spinner"
            className={styles['button__icon-loading']}
          />
        )}

        {children}
      </TagName>
    );
  },
);
Button.displayName = 'Button';
