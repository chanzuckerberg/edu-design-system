import React from "react";
import styled from "styled-components";

// Temporary props for button to test out css options for variants
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const ButtonComponent = styled.button<ButtonProps>`
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
`;

const PrimaryButton = styled(ButtonComponent)`
  background-color: #574eff;

  &:hover {
    background-color: #433bde;
  }
`;

const SecondaryButton = styled(ButtonComponent)`
  background-color: #838c95;

  &:hover {
    background-color: #58636f;
  }
`;

function Button(props: ButtonProps): JSX.Element {
  const { variant = "primary", ...rest } = props;

  return variant === "primary" ? (
    <PrimaryButton {...rest} />
  ) : (
    <SecondaryButton {...rest} />
  );
}

export default Button;
