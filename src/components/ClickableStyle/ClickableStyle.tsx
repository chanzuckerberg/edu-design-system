import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import styles from './ClickableStyle.module.css';

export const VARIANTS = ['primary', 'secondary', 'icon', 'link'] as const;
export type Variant = typeof VARIANTS[number];

export const STATUSES = [
  'brand',
  'neutral',
  'success',
  'warning',
  'error',
] as const;
export type Status = typeof STATUSES[number];

export const SIZES = ['sm', 'md', 'lg'] as const;
export type Size = typeof SIZES[number];

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

const getPropCombinationIsValid = (variant: Variant, status: Status) => {
  const nonPrimaryStatuses = ['neutral', 'success', 'warning'];
  const nonLinkStatuses = ['success', 'warning', 'error'];

  if (
    (variant === 'primary' && nonPrimaryStatuses.includes(status)) ||
    (variant === 'link' && nonLinkStatuses.includes(status))
  ) {
    return false;
  }

  return true;
};

const throwInvalidPropComboError = (variant: Variant, status: Status) => {
  const primaryStatuses = ['brand', 'error'];
  const linkStatuses = ['brand', 'neutral'];

  const getValidStatusesString = () => {
    const validStatuses =
      variant === 'primary' ? primaryStatuses : linkStatuses;

    return `'${validStatuses[0]}' and '${validStatuses[1]}'`;
  };

  // TODO: change to `throw new Error()` when invalid combos have been removed from downstream product
  console.warn(
    // We have to add the strings and variables together because string interpolation doesn't work in console messages.
    "\n*** Invalid prop combo ***:\n\nThe `Button` and `Link` components do not support using the '" +
      variant +
      "' variant with a '" +
      status +
      "' status." +
      "\n\nThe '" +
      variant +
      "' variant can only be used with the " +
      getValidStatusesString() +
      ' statuses.\n',
  );
};

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
      as: Component = 'button',
      className,
      fullWidth,
      size = 'lg',
      status = 'brand',
      variant = 'secondary',
      ...other
    }: ClickableStyleProps<IComponent>,
    ref: React.ForwardedRef<HTMLElement>,
  ) => {
    if (
      !getPropCombinationIsValid(variant, status) &&
      process.env.NODE_ENV !== 'production'
    ) {
      throwInvalidPropComboError(variant, status);
    }

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

    const dataAttribute = `clickable-style-${variant}`;

    return (
      <Component
        className={componentClassName}
        data-bootstrap-override={dataAttribute}
        ref={ref}
        {...other}
      />
    );
  },
);
ClickableStyle.displayName = 'ClickableStyle';
