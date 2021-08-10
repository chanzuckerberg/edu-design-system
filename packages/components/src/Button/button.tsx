import React, { ReactNode, forwardRef } from "react";
import Clickable, { ClickableProps } from "../Clickable";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonHTMLElementProps & {
  as?: "button" | React.ComponentType<any>;
  /**
   * The button contents or label.
   */
  children: ReactNode;
  color?: ClickableProps<"button">["color"];
  "data-testid"?: string;
  size?: ClickableProps<"button">["size"];
  variant?: ClickableProps<"button">["variant"];
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as = "button",
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
      <Clickable
        {...rest}
        as={as}
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
