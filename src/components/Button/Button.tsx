import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { assertEdsUsage } from '../../util/logging';
import type { Size } from '../../util/variant-types';
import Icon, { type IconName } from '../Icon';
import LoadingIndicator from '../LoadingIndicator';
import Text from '../Text';

import styles from './Button.module.css';

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps<ExtendedElement = unknown> = ButtonHTMLElementProps & {
  // Component API
  /**
   * Component used to render the element. Meant to support interaction with framework navigation libraries.
   *
   * **Default is `"button"`**.
   */
  as?: string | React.ElementType;
  /**
   * `Button` contents or label.
   */
  children?: string;
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
  variant?: 'default' | 'neutral' | 'critical' | 'inverse';

  /**
   * Whether the width of the button is set to the full layout.
   */
  isFullWidth?: boolean;

  /**
   * Whether `Button` is set to disabled state (disables interaction and updates appearance).
   *
   * Note: this will set the internal field to `disabled` as well. Prefer this to just setting `disabled`.
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
 * - If you need the button to use some other tag or component, use the `as` prop.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      children,
      className,
      context,
      icon = 'circle',
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
      context && styles[`button--context-${context}`],
      iconLayout && styles[`button--layout-${iconLayout}`],
      isDisabled && styles['button--disabled'],
      isFullWidth && styles['button--full-width'],
      isLoading && styles['button--loading'],
      rank && styles[`button--${rank}`],
      size && styles[`button--${size}`],
      size && styles[`button--size-${size}`],
      variant && styles[`button--variant-${variant}`],
      !isDisabled && className,
    );

    const buttonContentClassName = clsx(
      styles['button__text'],
      isLoading && styles['button--is-loading'],
    );

    assertEdsUsage(
      [
        typeof isDisabled === 'undefined' &&
          typeof other.disabled !== 'undefined',
      ],
      'Use "isDisabled" instead of "disabled" on Button instances',
      'error',
    );

    assertEdsUsage(
      [iconLayout === 'icon-only' && typeof children !== 'undefined'],
      'Specifying content for "children" when using icon-only layout is not required and can be removed.',
    );

    const coreButton = (
      <Component
        className={componentClassName}
        disabled={isDisabled}
        ref={ref}
        type={type}
        {...other}
      >
        <Text
          as="span"
          className={buttonContentClassName}
          preset={`label-${size}`}
        >
          {iconLayout === 'icon-only' && (
            <Icon
              name={icon}
              purpose="decorative"
              size={size === 'lg' ? '24px' : '16px'}
            />
          )}
          {iconLayout === 'left' && (
            <Icon
              name={icon}
              purpose="decorative"
              size={size === 'lg' ? '24px' : '16px'}
            />
          )}
          {iconLayout !== 'icon-only' && children}
          {iconLayout === 'right' && (
            <Icon
              name={icon}
              purpose="decorative"
              size={size === 'lg' ? '24px' : '16px'}
            />
          )}
        </Text>
        {isLoading && (
          <LoadingIndicator className={styles['button__loader']} size="xs" />
        )}
      </Component>
    );

    // Wrap the button in a simple SPAN to allow for adding the not-allowed cursor
    return isDisabled ? (
      <span
        className={clsx(
          className,
          iconLayout && styles[`button--layout-${iconLayout}`],
          isFullWidth && styles['button--full-width'],
          size && styles[`button--size-${size}`],
          styles['button__disabled'],
        )}
      >
        {coreButton}
      </span>
    ) : (
      coreButton
    );
  },
);

Button.displayName = 'Button';
