import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import React, { forwardRef } from 'react';
import ClickableStyle from '../ClickableStyle';
import type { ClickableStyleProps, VariantStatus } from '../ClickableStyle';
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
  /**
   * Toggles clickable that fills the full width of its container
   */
  fullWidth?: boolean;
  'data-testid'?: string;
  size?: ClickableStyleProps<'a'>['size'];
} & VariantStatus;

/**
 * `import {Link} from "@chanzuckerberg/eds";`
 *
 * Component for making styled anchor tags.
 *
 * This component is called Link because it should be used to make `<a>` elements;
 * however, it can be styled to look like a button.
 *
 * If you need to style a `<button>` element to look like a link, please use the `Button` component.
 * If you need to style a different element or component (e.g. `Link` from `react-router`) to
 * look like a button or link, you can use the `ClickableStyle` component.
 *
 * In terms of the look and feel of the component in the UI, the `Button`, and `Link`, and `ClickableStyle`
 * components are exactly the same.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { className, variant = 'link', status = 'brand', size = 'lg', ...rest },
    ref,
  ) => {
    const componentClassName = clsx(
      variant === 'link' && styles['link--link'],
      className,
    );

    return (
      <ClickableStyle
        {...rest}
        as="a"
        className={componentClassName}
        ref={ref}
        size={size}
        status={status}
        variant={variant}
      />
    );
  },
);
Link.displayName = 'Link';
