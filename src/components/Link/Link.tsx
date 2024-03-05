import clsx from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import type { Size } from '../../util/variant-types';
import type { VariantStatus } from '../ClickableStyle';
import styles from './Link.module.css';

type LinkHTMLElementProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'disabled'
>;

export type LinkProps = LinkHTMLElementProps & {
  /**
   * The link contents or label.
   */
  children: ReactNode;
  'data-testid'?: string;
  /**
   * Link size inherits from the surrounding text.
   */
  size?: Extract<Size, 'sm' | 'md' | 'lg'>;
} & VariantStatus;

/**
 * `import {Link} from "@chanzuckerberg/eds";`
 *
 * Component for making styled anchor tags. It supports neutral and brand statuses (all other variant/status combinations will be removed in a future release).
 *
 * This component is called Link because it should be used to make `<a>` elements.
 *
 * - If you need to style a `<button>` element to look like a link, please use the `Button` component.
 * - If you need to style a different element or component like a button or link, you can use the `ClickableStyle` component.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      className,
      variant = 'link',
      status = 'brand',
      size = 'lg',
      ...rest
    },
    ref,
  ) => {
    const componentClassName = clsx(
      // Base styles
      styles['link'],
      // Sizes
      variant !== 'link' && [
        size === 'sm' && styles['link--sm'],
        size === 'md' && styles['link--md'],
        size === 'lg' && styles['link--lg'],
      ],
      // Variants
      variant === 'primary' && styles['link--primary'],
      variant === 'secondary' && styles['link--secondary'],
      variant === 'icon' && styles['link--icon'],
      variant === 'link' && styles['link--link'],
      // Colors
      status === 'brand' && styles['link--brand'],
      status === 'neutral' && styles['link--neutral'],
      status === 'success' && styles['link--success'],
      status === 'warning' && styles['link--warning'],
      status === 'error' && styles['link--error'],
      className,
    );

    return (
      <a className={componentClassName} ref={ref} {...rest}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
