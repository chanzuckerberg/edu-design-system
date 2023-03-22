import clsx from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import styles from './ClickableStyle.module.css';

export const VARIANTS = ['primary', 'secondary', 'icon', 'link'] as const;
export type Variant = (typeof VARIANTS)[number];

export const STATUSES = [
  'brand',
  'neutral',
  'success',
  'warning',
  'error',
] as const;
export type Status = (typeof STATUSES)[number];

export const SIZES = ['sm', 'md', 'lg'] as const;
export type Size = (typeof SIZES)[number];

// Define Discriminating unions for the valid statuses based on variant
type IconStatus = {
  variant?: Extract<Variant, 'icon'>;
  status?: Status;
};

type SecondaryStatus = {
  variant?: Extract<Variant, 'secondary'>;
  status?: Status;
};

type PrimaryStatus = {
  variant?: Extract<Variant, 'primary'>;
  status?: Extract<Status, 'brand' | 'error'>;
};

type LinkStatus = {
  variant?: Extract<Variant, 'link'>;
  status?: Extract<Status, 'brand' | 'neutral'>;
};

export type VariantStatus =
  | IconStatus
  | SecondaryStatus
  | LinkStatus
  | PrimaryStatus;

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
  size?: Size;
  /**
   * Available _color_ variations available for the ClickableStyle component
   */
  status?: Status;
  /**
   * Available _shape_ variations available for the ClickableStyle component
   */
  variant?: Variant;
} & React.ComponentProps<IComponent>;

/**
 * `import {ClickableStyle} from "@chanzuckerberg/eds";`
 *
 * A helper component that contains all the styling for buttons and links.
 *
 * If you're styling a `<button>` or `<a>` element, you can use the `Button`
 * and `Link` components (respectively). `ClickableStyle` should only be used
 * directly when styling other elements or components (e.g. `Link` from `react-router`)
 * to look like a button or link. Use the exported `VariantStatus` to augment the type
 * when using `ClickableStyle`.
 *
 * See the `Button` and `Link` stories for usage examples.
 */
export const ClickableStyle = React.forwardRef(
  <IComponent extends React.ElementType>(
    props: ClickableStyleProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    const {
      as: Component = 'button',
      className,
      fullWidth,
      size = 'lg',
      status = 'brand',
      variant = 'secondary',
      ...other
    } = props;

    const componentClassName = clsx(
      // Base styles
      styles['clickable-style'],
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
      className,
    );

    return <Component className={componentClassName} ref={ref} {...other} />;
  },
);
ClickableStyle.displayName = 'ClickableStyle';
