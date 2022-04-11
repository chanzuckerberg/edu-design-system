import React from 'react';
import ClickableStyle from '../ClickableStyle';
import type { ClickableStyleProps } from '../ClickableStyle';

export type Props = Omit<
  ClickableStyleProps<React.ElementType>,
  'disabled' | 'loading' | 'fullWidth'
> & {
  /**
   * Link to URL.
   */
  href: string;
};

/**
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
export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  ({ variant = 'linkDefault', ...other }, ref) => {
    return <ClickableStyle {...other} as="a" variant={variant} ref={ref} />;
  },
);
Link.displayName = 'Link';
