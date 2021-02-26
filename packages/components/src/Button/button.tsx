import React, { ReactNode } from "react";
import StyledClickable, { ClickableProps } from "util/clickable";

type ButtonHTMLElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  /**
   * The button contents or label.
   */
  children: ReactNode;
  type: ButtonHTMLElementProps["type"];
  disabled: ButtonHTMLElementProps["disabled"];
  as: "button" | React.ComponentType<any>;
} & ClickableProps;

function Button(props: ButtonProps) {
  const { ...rest } = props;
  return <StyledClickable {...rest} />;
}

const defaultProps: Partial<ButtonProps> = {
  as: "button",
  variant: "flat",
  color: "brand",
  disabled: false,
  type: "button",
};

Button.defaultProps = defaultProps;

export default Button;
