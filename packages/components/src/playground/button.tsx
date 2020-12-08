import * as React from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import tw from "twin.macro";

// Temporary props for button to test out css options for variants
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary";
};

function Button(props: ButtonProps): JSX.Element {
  const { variant, ...rest } = props;
  const Button = styled.button`
    ${tw`font-bold py-2 px-4 rounded text-white`}
  `;
  const primary = css`
    ${tw`bg-blue-300 hover:bg-blue-400`}
  `;
  const secondary = css`
    ${tw`bg-gray-600 hover:bg-blue-800`}
  `;

  return (
    <Button className={variant === "primary" ? primary : secondary} {...rest} />
  );
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
