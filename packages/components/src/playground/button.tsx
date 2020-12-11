import tw, { styled } from "twin.macro";
import React from "react";

type BaseButtonProps = {
  variant?: "primary" | "secondary";
};

// Temporary props for button to test out css options for variants
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;

const base = tw`font-bold py-2 px-4 rounded text-white border-none`;
const primary = tw`bg-brand-600 hover:bg-brand-700`;
const secondary = tw`bg-neutral-400 hover:bg-neutral-500`;

const ButtonComponent = styled.button<BaseButtonProps>(({ variant }) => [
  base,
  variant === "secondary" ? secondary : primary,
]);

function Button(props: ButtonProps): JSX.Element {
  return <ButtonComponent {...props} />;
}

export default Button;
