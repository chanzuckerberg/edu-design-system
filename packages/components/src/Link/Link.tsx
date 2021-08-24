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
  color?: ClickableProps<"button">["color"];
  "data-testid"?: string;
  size?: ClickableProps<"button">["size"];
  variant?: ClickableProps<"button">["variant"];
};

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ as = "a", variant = "link", color = "brand", ...rest }, ref) => {
    return (
      <Clickable {...rest} as={as} variant={variant} color={color} ref={ref} />
    );
  },
);

Link.displayName = "Link";

export default Link;
