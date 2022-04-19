import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.css';
import ClickableStyle from '../ClickableStyle';
import type { ClickableStyleProps } from '../ClickableStyle';
import Icon from '../Icon';

export type Props = ClickableStyleProps<React.ElementType> & {
  /**
   * Disables the field and prevents editing the contents
   */
  disabled?: boolean;
  /**
   * Loading state passed down from higher level used to trigger loader and text change
   */
  loading?: boolean;
  /**
   * Determines type of clickable
   * - **button** The clickable is a clickable button.
   * - **submit** The clickable is a submit clickable (submits form data).
   * - **reset** The clickable is a reset clickable (resets the form-data to its initial values)
   */
  type?: 'button' | 'reset' | 'submit';
};

/**
 * Component for making buttons that do not navigate the user to another page.
 *
 * This component is called `Button` because it should be used to make `<button>` elements;
 * however, it can be styled to look like a link.
 *
 * If you need to style an `<a>` element to look like a button, please use the `Link` component.
 * If you need to style a different element or component (e.g. `Link` from `react-router`) to
 * look like a button or link, you can use the `ClickableStyle` component.
 *
 * In terms of the look and feel of the component in the UI, the `Button`, and `Link`, and `ClickableStyle`
 * components are exactly the same.
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  ClickableStyleProps<React.ElementType>
>(
  (
    {
      children,
      className,
      disabled,
      loading,
      size = 'lg',
      type = 'button',
      variant = 'primary',
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      // Base styles
      styles['button'],
      className,
      // Variants
      variant === 'primary' && styles['button--primary'],
      variant === 'secondary' && styles['button--secondary'],
      variant === 'icon' && styles['button--icon'],
      variant === 'link' && styles['button--link'],
      // Other options
      disabled && styles['button--disabled'],
      loading && styles['eds-is-loading'],
    );

    return (
      <ClickableStyle
        as="button"
        className={componentClassName}
        disabled={disabled}
        ref={ref}
        size={size}
        tabIndex={disabled ? -1 : undefined}
        type={type}
        variant={variant}
        {...other}
      >
        {loading && (
          <Icon
            className={styles['eds-is-loading']}
            name="spinner"
            purpose="informative"
            size="1.5em"
            title="loading"
          />
        )}

        {children}
      </ClickableStyle>
    );
  },
);
Button.displayName = 'Button';
