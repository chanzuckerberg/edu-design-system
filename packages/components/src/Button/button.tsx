import Clickable, { ClickableProps } from "../Clickable";
import React, { ReactNode } from "react";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonHTMLElementProps & {
  as?: "button" | React.ComponentType<any>;
  /**
   * The button contents or label.
   */
  children: ReactNode;
  color?: ClickableProps<"button">["color"];
  size?: ClickableProps<"button">["size"];
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
