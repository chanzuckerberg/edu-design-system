import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './ClickableStyle.module.css';

export type ClickableStyleProps<IComponent extends React.ElementType> = {
  /**
   * Visually hidden clickable text (but text is still accessible to assistive technology).
   * This overrides `children` for screen readers
   */
  'aria-label'?: string;
  /**
   * The visible clickable children
   */
  children: string | ReactNode;
  /**
   * CSS class names that can be appended to the component
   */
  className?: string;
  /**
   * Toggles clickable that fills the full width of its container
   */
  fullWidth?: boolean;
  /**
   * On click handler for component
   */
  onClick?: MouseEventHandler;
  /**
   * Available size variations for the clickable
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Available _color_ variations available for the ClickableStyle component
   */
  status?: 'brand' | 'neutral' | 'success' | 'warning' | 'error';
  /**
   * Available _shape_ variations available for the ClickableStyle component
   */
  variant?: 'primary' | 'secondary' | 'icon' | 'link';
} & React.ComponentProps<IComponent>;

/**
 * ```ts
 * import {ClickableStyle} from "@chanzuckerberg/eds";
 * ```
 *
 * A helper component that contains all the styling for buttons and links.
 *
 * If you're styling a `<button>` or `<a>` element, you can use the `Button`
 * and `Link` components (respectively). `ClickableStyle` should only be used
 * directly when styling other elements or components (e.g. `Link` from `react-router`)
 * to look like a button or link.
 *
 * See the `Button` and `Link` stories for usage examples.
 */
export const ClickableStyle = React.forwardRef(
  <IComponent extends React.ElementType>(
    {
      as: Component,
      className,
      fullWidth,
      size = 'lg',
      status = 'brand',
      variant = 'secondary',
      ...other
    }: ClickableStyleProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const nonPrimaryStatuses = ['neutral', 'success', 'warning'];
    if (
      variant === 'primary' &&
      nonPrimaryStatuses.includes(status) &&
      process.env.NODE_ENV !== 'production'
    ) {
      console.warn(
        `*** Invalid prop combo warning ***:\n`,
        `This component does not support using the '${status}' status with a 'primary' variant.`,
        `The 'primary' variant can only be used with the 'brand' and 'error' statuses.`,
      );
    }

    const componentClassName = clsx(
      // Base styles
      styles['clickable-style'],
      className,
      // Sizes
      variant !== 'link' && [
        size === 'sm' && styles['clickable-style--sm'],
        size === 'md' && styles['clickable-style--md'],
        size === 'lg' && styles['clickable-style--lg'],
      ],
      // Variants
      variant === 'primary' && styles['clickable-style--primary'],
      variant === 'secondary' && styles['clickable-style--secondary'],
      variant === 'icon' && styles['clickable-style--icon'],
      variant === 'link' && styles['clickable-style--link'],
      // Colors
      status === 'brand' && styles['clickable-style--brand'],
      status === 'neutral' && styles['clickable-style--neutral'],
      status === 'success' && styles['clickable-style--success'],
      status === 'warning' && styles['clickable-style--warning'],
      status === 'error' && styles['clickable-style--error'],
      // Other options
      fullWidth && styles['clickable-style--full-width'],
    );

    return <Component className={componentClassName} ref={ref} {...other} />;
  },
);
ClickableStyle.displayName = 'ClickableStyle';
