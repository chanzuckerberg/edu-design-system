import React from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import tw from "twin.macro";

// Temporary props for button to test out css options for variants
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
};

function Button(props: ButtonProps): JSX.Element {
  const { variant = "primary", ...rest } = props;
  const primary = css`
    ${tw`bg-blue-300 hover:bg-blue-400`}
  `;
  const secondary = css`
    --color-background: gray;
  `;

  const ButtonComponent = styled.button`
    color: white;
    background-color: var(--color-background);
  `;

  return (
    <ButtonComponent
      className={variant === "primary" ? primary : secondary}
      {...rest}
    />
  );
}

export default Button;
