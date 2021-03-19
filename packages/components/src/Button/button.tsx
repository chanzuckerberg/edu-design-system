import Clickable, { ClickableProps } from "../util/clickable";
import React, { ReactNode } from "react";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * The button contents or label.
   */
  children: ReactNode;
  type: ButtonHTMLElementProps["type"];
  disabled: ButtonHTMLElementProps["disabled"];
  as: "button" | React.ComponentType<any>;
  variant: ClickableProps<"button">["variant"];
  color: ClickableProps<"button">["color"];
  size: ClickableProps<"button">["size"];
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
