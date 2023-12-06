import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { Size } from '../../util/variant-types';
import type {
  PrimaryStatus,
  SecondaryStatus,
  IconStatus,
  LinkStatus,
} from '../ClickableStyle/ClickableStyle';
import LoadingIndicator from '../LoadingIndicator';

import styles from './Button.module.css';

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariants = IconStatus | PrimaryStatus | SecondaryStatus | LinkStatus;

export type ButtonProps = ButtonHTMLElementProps & {
  /**
   * The button contents or label.
   */
  children: ReactNode;
  /**
   * Toggles clickable that fills the full width of its container
   */
  fullWidth?: boolean;
  /**
   * The size of the button on screen
   */
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Loading state passed down from higher level used to trigger loader and text change
   */
  loading?: boolean;
  /**
   * Determines type of clickable:
   * - **button** The clickable is a clickable button.
   * - **submit** The clickable is a submit clickable (submits form data).
   * - **reset** The clickable is a reset clickable (resets the form-data to its initial values)
   */
  type?: 'button' | 'reset' | 'submit';
  'data-testid'?: string;
} & ButtonVariants;

/**
 * `import {Button} from "@chanzuckerberg/eds";`
 *
 * Component for making buttons that do not navigate the user to another page. Use button to trigger actions, menus,
 * or other in-page activity.
 *
 * - If you need to style a navigation anchor, please use the `Link` component.
 * - If you need to style a different element or component to
 *   look like a button or link, you can use the `ClickableStyle` component.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      fullWidth,
      loading,
      variant = 'secondary',
      status = 'brand',
      disabled = false,
      type = 'button',
      size = 'lg',
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      // Base styles
      styles['button'],
      // Sizes
      variant !== 'link' && [
        size === 'sm' && styles['button--sm'],
        size === 'md' && styles['button--md'],
        size === 'lg' && styles['button--lg'],
      ],
      // Variants
      variant === 'primary' && styles['button--primary'],
      variant === 'secondary' && styles['button--secondary'],
      variant === 'icon' && styles['button--icon'],
      variant === 'link' && styles['button--link'],
      // Colors
      status === 'brand' && styles['button--brand'],
      status === 'neutral' && styles['button--neutral'],
      status === 'success' && styles['button--success'],
      status === 'warning' && styles['button--warning'],
      status === 'error' && styles['button--error'],
      // Other options
      fullWidth && styles['button--full-width'],
      disabled && styles['button--disabled'],
      loading && styles['eds-is-loading'],
      className,
    );

    return (
      <button
        className={componentClassName}
        disabled={disabled}
        ref={ref}
        tabIndex={disabled ? -1 : undefined}
        type={type}
        {...other}
      >
        {loading && <LoadingIndicator className="eds-is-loading" size="sm" />}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
