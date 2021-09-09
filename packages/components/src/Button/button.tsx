import React, { ReactNode, forwardRef } from "react";
import ClickableStyle, { ClickableStyleProps } from "../ClickableStyle";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonHTMLElementProps & {
  /**
   * The button contents or label.
   */
  children: ReactNode;
  color?: ClickableStyleProps<"button">["color"];
  "data-testid"?: string;
  size?: ClickableStyleProps<"button">["size"];
  variant?: ClickableStyleProps<"button">["variant"];
};

/**
 * Component for making buttons that do not navigate the user to another page.
 *
 * This component is called Button because it should be used to making button elements;
 * however, it can be styled to look like a link. In terms of the look and feel of the
 * component in the UI, the Button and Link components are exactly the same.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "flat",
      color = "brand",
      disabled = false,
      type = "button",
      size = "medium",
      ...rest
    },
    ref,
  ) => {
    return (
      <ClickableStyle
        {...rest}
        as="button"
        variant={variant}
        color={color}
        disabled={disabled}
        type={type}
        size={size}
        ref={ref}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
