import React, { ReactNode, forwardRef } from "react";
import Clickable, { ClickableProps } from "../Clickable";

type LinkHTMLElementProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "disabled"
>;

export type LinkProps = LinkHTMLElementProps & {
  as?: "a" | React.ComponentType<any>;
  /**
   * The link contents or label.
   */
  children: ReactNode;
  color?: ClickableProps<"a">["color"];
  "data-testid"?: string;
  size?: ClickableProps<"a">["size"];
  variant?: ClickableProps<"a">["variant"];
};

/**
 * Component for making links that navigate to a different page that is outside of the
 * product (ie help desk or external resource).
 *
 * This component is called Link because it should be used to making link elements;
 * however, it can be styled to look like a button. In terms of the look and feel of the
 * component in the UI, the Link and Button components are exactly the same.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    { as = "a", variant = "link", color = "brand", size = "medium", ...rest },
    ref,
  ) => {
    return (
      <Clickable
        {...rest}
        as={as}
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
