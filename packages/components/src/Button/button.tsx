import Clickable, { ClickableProps } from "../util/clickable";
import React, { ReactNode } from "react";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  as: "button" | React.ComponentType<any>;
  /**
   * The button contents or label.
   */
  children: ReactNode;
  color: ClickableProps<"button">["color"];
  disabled: ButtonHTMLElementProps["disabled"];
  size: ClickableProps<"button">["size"];
  type: ButtonHTMLElementProps["type"];
  variant: ClickableProps<"button">["variant"];
};

function Button(props: ButtonProps) {
  const { ...rest } = props;
  return <Clickable {...rest} />;
}

const defaultProps: Partial<ButtonProps> = {
  as: "button",
  variant: "flat",
  color: "brand",
  disabled: false,
  type: "button",
  size: "medium",
};

Button.defaultProps = defaultProps;

export default Button;
