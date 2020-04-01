import * as React from "react";

function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): JSX.Element {
  const { className = "", ...rest } = props;
  return <button className={`czedi-btn ${className}`} {...rest}></button>;
}

export default Button;
