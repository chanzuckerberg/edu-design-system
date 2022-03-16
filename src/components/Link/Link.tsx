import React, { ReactNode, forwardRef } from "react";
import ClickableStyle, { ClickableStyleProps } from "../ClickableStyle";

type LinkHTMLElementProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "disabled"
>;

export type LinkProps = LinkHTMLElementProps & {
  /**
   * The link contents or label.
   */
  children: ReactNode;
  color?: ClickableStyleProps<"a">["color"];
  "data-testid"?: string;
  size?: ClickableStyleProps<"a">["size"];
  variant?: ClickableStyleProps<"a">["variant"];
};

/**
 * ```ts
 * import {Link} from "@chanzuckerberg/eds";
 * ```
 *
 * Component for making anchor tags.
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
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "link", color = "brand", size = "large", ...rest }, ref) => {
    return (
      <ClickableStyle
        {...rest}
        as="a"
        variant={variant}
        color={color}
        ref={ref}
        size={size}
      />
    );
  },
);

Link.displayName = "Link";

export default Link;
