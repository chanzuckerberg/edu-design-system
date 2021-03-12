import React from "react";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
};

// Temporary props for button to test out css options for variants
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;

function Button(props: Props) {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
}

export default Button;
