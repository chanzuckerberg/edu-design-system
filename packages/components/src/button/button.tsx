import * as React from "react";

import cx from "classnames";

// Temporary props for button to test out css options for variants
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary";
};

function Button(props: ButtonProps): JSX.Element {
  const { className = "", variant, ...rest } = props;
  const classNames = cx("czedi-btn", className, {
    "czedi-btn-primary": variant === "primary",
    "czedi-btn-secondary": variant === "secondary",
  });

  return <button className={classNames} {...rest}></button>;
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
