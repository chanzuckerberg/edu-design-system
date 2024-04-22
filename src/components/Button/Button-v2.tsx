import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { Size } from '../../util/variant-types';
import Icon from '../Icon';
import type { IconName } from '../Icon';
import LoadingIndicator from '../LoadingIndicator';

import styles from './Button-v2.module.css';

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonV2Props<ExtendedElement = unknown> =
  ButtonHTMLElementProps & {
    // Component API
    /**
     * `Button` contents or label.
     */
    children: string;
    /**
     * Determine the behavior of the button upon click:
     * - **button** `Button` is a clickable button with no default behavior
     * - **submit** `Button` is a clickable button that submits form data
     * - **reset** `Button` is a clickable button that resets the form-data to its initial values
     */
    type?: 'button' | 'reset' | 'submit';

    // Design API
    /**
     * Sets the hierarchy rank of the button
     *
     * **Default is `"primary"`**.
     */
    rank?: 'primary' | 'secondary' | 'tertiary';

    /**
     * The size of the button on screen
     */
    size?: Extract<Size, 'sm' | 'md' | 'lg'>;

    /**
     * The variant of the default tertiary button.
     */
    context?: 'default' | 'standalone';

    /**
     * Icon from the set of defined EDS icon set, when `iconLayout` is used.
     */
    icon?: IconName;

    /**
     * Allows configuation of the icon's positioning within `Button`.
     *
     * - When set to a value besides `"none"`, an icon must be specified.
     * - When `"icon-only"`, `aria-label` must be given a value.
     */
    iconLayout?: 'none' | 'left' | 'right' | 'icon-only';

    /**
     * Status (color) variant for `Button`.
     *
     * **Default is `"default"`**.
     */
    variant?: 'default' | 'critical' | 'inverse';

    /**
     * Whether the width of the button is set to the full layout.
     */
    isFullWidth?: boolean;

    /**
     * Whether `Button` is set to disabled state (disables interaction and updates appearance).
     */
    isDisabled?: boolean;

    /**
     * Loading state passed down from higher level used to trigger loader and text change.
     */
    isLoading?: boolean;
  } & ExtendedElement;

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
export const Button = forwardRef<HTMLButtonElement, ButtonV2Props>(
  (
    {
      children,
      className,
      context,
      icon = 'empty-circle',
      iconLayout = 'none',
      isDisabled,
      isFullWidth,
      isLoading,
      type = 'button',
      rank = 'primary',
      size = 'lg',
      variant = 'default',
      ...other
    },
    ref,
  ) => {
    const componentClassName = clsx(
      styles['button'],
      context && clsx(styles[`button--context-${context}`]),
      iconLayout && clsx(styles[`button--layout-${iconLayout}`]),
      isDisabled && clsx(styles['button--disabled']),
      isFullWidth && clsx(styles['button--full-width']),
      isLoading && clsx(styles['button--loading']),
      rank && clsx(styles[`button--${rank}`]),
      size && clsx(styles[`button--${size}`]),
      variant && clsx(styles[`button--variant-${variant}`]),
      className,
    );

    const buttonContentClassName = clsx(
      styles['button__text'],
      isLoading && styles['button--is-loading'],
    );

    return (
      <button
        className={componentClassName}
        disabled={isDisabled}
        ref={ref}
        type={type}
        {...other}
      >
        <span className={buttonContentClassName}>
          {iconLayout === 'icon-only' && (
            <Icon
              name={icon}
              purpose="decorative"
              size={size === 'lg' ? '1.5rem' : '1rem'}
            />
          )}
          {iconLayout === 'left' && (
            <Icon name={icon} purpose="decorative" size="1rem" />
          )}
          {iconLayout !== 'icon-only' && children}
          {iconLayout === 'right' && (
            <Icon name={icon} purpose="decorative" size="1rem" />
          )}
        </span>
        {isLoading && (
          <LoadingIndicator className={styles['button__loader']} size="sm" />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
