import React from 'react';
import ClickableStyle from '../ClickableStyle';
import type { ClickableStyleProps } from '../ClickableStyle';

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
    { forwardRef, size = 'lg', type = 'button', variant = 'primary', ...other },
    ref,
  ) => {
    return (
      <ClickableStyle
        as="button"
        ref={forwardRef || ref}
        size={size}
        type={type}
        variant={variant}
        {...other}
      />
    );
  },
);
Button.displayName = 'Button';
