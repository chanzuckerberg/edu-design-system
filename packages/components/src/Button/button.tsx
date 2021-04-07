import Clickable, { ClickableProps } from "../util/clickable";
import React, { ReactNode } from "react";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  as?: "button" | React.ComponentType<any>;
  /**
   * The button contents or label.
   */
  children: ReactNode;
  color?: ClickableProps<"button">["color"];
  disabled?: ButtonHTMLElementProps["disabled"];
  size?: ClickableProps<"button">["size"];
  type?: ButtonHTMLElementProps["type"];
  variant?: ClickableProps<"button">["variant"];
};

function Button({
  as = "button",
  variant = "flat",
  color = "brand",
  disabled = false,
  type = "button",
  size = "medium",
  ...rest
}: ButtonProps) {
  return (
    <Clickable
      {...rest}
      as={as}
      variant={variant}
      color={color}
      disabled={disabled}
      type={type}
      size={size}
    />
  );
}

export default Button;
