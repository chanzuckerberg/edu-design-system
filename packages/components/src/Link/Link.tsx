import React, { ReactNode, forwardRef } from "react";
import ClickableStyleWrapper, {
  ClickableStyleWrapperProps,
} from "../ClickableStyleWrapper";

type LinkHTMLElementProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "disabled"
>;

export type LinkProps = LinkHTMLElementProps & {
  /**
   * The link contents or label.
   */
  children: ReactNode;
  color?: ClickableStyleWrapperProps<"a">["color"];
  "data-testid"?: string;
  size?: ClickableStyleWrapperProps<"a">["size"];
  variant?: ClickableStyleWrapperProps<"a">["variant"];
};

/**
 * Component for making anchor tags.
 *
 * This component is called Link because it should be used to making link elements;
 * however, it can be styled to look like a button. In terms of the look and feel of the
 * component in the UI, the Link and Button components are exactly the same.
 *
 * Note: when using a routing component like react-router, you'll probably want to
 * use Clickable and pass in the routing component via the `as` prop.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "link", color = "brand", size = "medium", ...rest }, ref) => {
    return (
      <ClickableStyleWrapper
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
